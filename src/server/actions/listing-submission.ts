"use server";
import { ListingSubmissionSchema } from "@/shared/validation/listing.z";
import db from "../db";
import { saveFileToLocal } from "../files-handler";

const SITE_URL = process.env.SITE_URL ?? "";

export default async function addListingSubmission(
  data: ListingSubmissionSchema
) {
  try {
    // Saving Data into Database
    const submissionData = await db.listingSubmission.create({
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
        // residentialOpenings: JSON.stringify({}),
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
    // await sendListingEmail(submissionData as IListingSubmission);
    return submissionData;
  } catch (error) {
    return null;
  }
}

export async function uploadListingSubmissionFiles(
  listingId: string,
  data: FormData
) {
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
          submissionId: listingId,
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
