"use server";

import { PostListingSchema } from "@/shared/validation/listing.z";
import db from "../db";
import { sendListingEmail } from "../mailer";
import { IListing } from "@/typing/db";

export default async function postListingAction(
  data: PostListingSchema,
  formData: FormData
) {
  try {
    // Saving Assessment Atachements
    // const files = (formData.getAll("files") as File[] | undefined) ?? [];
    // const assessmentFiles: Array<string> = [];
    // await Promise.all(
    //   files.map(async (file) => {
    //     const filePath = await saveFile("assessments", file);
    //     if (filePath) assessmentFiles.push(filePath);
    //     return filePath;
    //   })
    // );
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
