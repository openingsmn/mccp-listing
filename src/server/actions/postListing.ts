"use server";

import { PostListingSchema } from "@/shared/validation/listing.z";
import db from "../db";

export default async function postListingAction(
  data: PostListingSchema,
  assessmentData: FormData
) {
  const files = assessmentData.getAll("files") as File[] | undefined;
  await db.listing.create({
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
              mobilityConcers:
                data.mobility?.mobilityConcers?.toLowerCase() === "yes",
              usedMobilityDevices: data.mobility?.usedMobilityDevices,
              adjustWithOneFloor:
                data.mobility?.adjustWithOneFloor?.toLocaleLowerCase() ===
                "yes",
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
  });
}
