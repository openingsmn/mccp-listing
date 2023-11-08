import { PrismaClient } from "@prisma/client";
import { housingProfilesData } from "./housing-profiles.mjs";

async function main() {
  const db = new PrismaClient();
  await db.housingProfile.createMany({
    skipDuplicates: true,
    data: housingProfilesData.map((profile) => ({
      beds: String(profile.beds),
      fundingType: profile.funding_type,
      housingType: profile.type_of_home,
      bedroomLocation: profile.bed_room_location_privacy
        .replaceAll("/", "")
        .trim(),
      phone: String(profile.phone_number),
      challengingBehaviors: profile.challenging_behaviors,
      nursingSupport: profile.nursing_support,
      overnightSupervison: profile.overnight_supervision,
      physicalAccommodations: profile.physical_accommodations,
      provider: profile.provider,
      staffingPattern: profile.typical_staffing_pattern,
      address: String(profile.address),
      city: profile.city,
      providerId: profile.profile_id,
      state: profile.state,
    })),
  });
}

await main().then(() => console.log("Seeding done"));
