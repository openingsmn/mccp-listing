"use server";

import { PostListingSchema } from "@/shared/validation/listing.z";
import db from "../db";
import { sendListingEmail } from "../mailer";
import { IListing } from "@/typing/db";
import { saveFileToLocal } from "../files-handler";
import { RedirectType, redirect } from "next/navigation";

const SITE_URL = process.env.SITE_URL ?? "";

export default async function addNewListing(data: PostListingSchema) {
  try {
    // Saving Data into Database
    const listing = await db.listing.create({
      data: {
        email: data.email,
        fullName: data.fullName,
        dateOfBirth: data.dateOfBirth,
        equipementsNeeded: data.equipementsNeeded,
        gender: data.gender,
        guardianStatus: data.guardianStatus,
        housingType: data.housingType,
        livingSituation: data.livingSituation,
        phone: data.phone,
        pmiNumber: data.pmiNumber,
        race: data.race,
        relegiousPref: data.relegiousPref,
        timeframe: data.timeframe,
        waiverType: data.waiverType.general,
        waiverTypeSpecific: data.waiverType.specific,
        ...(data.address && {
          address: {
            create: {
              fullAddress: data.address?.fullAddress || "",
              city: data.address?.city || "",
              postalCode: data.address?.postalCode || "",
            },
          },
        }),
        ...(data.mobility &&
          data.mobility?.mobilityConcers && {
            mobility: {
              create: {
                mobilityConcers: data.mobility?.mobilityConcers,
                usedMobilityDevices: data.mobility?.usedMobilityDevices,
                adjustWithOneFloor: data.mobility?.adjustWithOneFloor,
              },
            },
          }),
        residentialOpenings: JSON.stringify({}),
        teamContact: {
          create: {
            assessmentData: "",
            caseManager: data.teamContact.caseManager,
            referrer: data.teamContact.referrer,
            legalRepresentative: data.teamContact.legalRepresentative,
            signature: data.teamContact.signature,
          },
        },
      },
      include: {
        address: true,
        mobility: true,
        teamContact: {
          include: {
            assessmentFiles: true,
          },
        },
      },
    });
    // Sending Email to user who submitted form
    await sendListingEmail(listing as IListing);
    return listing;
  } catch (error) {
    return null;
  }
}

export async function uploadListingFiles(listingId: string, data: FormData) {
  // Saving Assessment Atachements
  try {
    const assessmentFiles =
      (data.getAll("assessments") as File[] | undefined) ?? [];
    const savedAssFiles: Array<string> = [];
    await Promise.all(
      assessmentFiles.map(async (file) => {
        const filePath = await saveFileToLocal("assessments", file, listingId);
        if (filePath) savedAssFiles.push(filePath);
        return filePath;
      })
    );
    console.log(savedAssFiles);
    if (savedAssFiles.length > 0) {
      const listing = await db.teamContact.update({
        where: {
          listinId: listingId,
        },
        data: {
          assessmentFiles: {
            createMany: {
              skipDuplicates: true,
              data: savedAssFiles.map((filePath) => ({
                localUrl: filePath,
                publicUrl: `${SITE_URL}/${filePath}`,
              })),
            },
          },
        },
      });
      console.log(listing);
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
