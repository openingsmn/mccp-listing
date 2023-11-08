import { createRouteHandler } from "@/lib/router";
import db from "@/server/db";
import { z } from "zod";

const listingFiltersSchema = z.object({
  page: z
    .string()
    .optional()
    .default("10")
    .transform((value) => Number(value)),
  perPage: z
    .string()
    .optional()
    .default("10")
    .transform((value) => Number(value)),
  city: z.string().optional(),
  state: z.string().optional(),
  housingType: z.array(z.string()).optional(),
  fundingType: z.array(z.string()).optional(),
  beds: z.string().optional(),
  gender: z.string().optional(),
  age: z
    .string()
    .transform((value) => Number(value))
    .optional(),
  bedroomLocation: z.array(z.string()).optional(),
  intelectualDisability: z.array(z.string()).optional(),
  mentalDiagnose: z.array(z.string()).optional(),
  physicalAccomodations: z.array(z.string()).optional(),
  nursingSupport: z.array(z.string()).optional(),
  challengingBehaviours: z.array(z.string()).optional(),
  staffingPattern: z.array(z.string()).optional(),
  overnightSupervision: z.array(z.string()).optional(),
});

export const GET = createRouteHandler({
  validate: {
    query: listingFiltersSchema,
  },
  handler: async ({ query }) => {
    console.log(query);
    try {
      const {
        page,
        perPage,
        beds,
        bedroomLocation,
        age,
        state,
        challengingBehaviours,
        city,
        fundingType,
        gender,
        housingType,
        intelectualDisability,
        mentalDiagnose,
        nursingSupport,
        overnightSupervision,
        physicalAccomodations,
        staffingPattern,
      } = query;
      const profiles = await db.housingProfile.findMany({
        where: {
          city: city,
          ...(beds && {
            beds: beds,
          }),
          ...(housingType && {
            housingType: {
              in: housingType,
            },
          }),
          ...(fundingType && {
            fundingType: {
              in: fundingType,
            },
          }),
          ...(bedroomLocation && {
            bedroomLocation: {
              in: bedroomLocation,
            },
          }),
          ...(state && {
            state: state,
          }),
          ...(challengingBehaviours && {
            challengingBehaviors: {
              in: challengingBehaviours,
            },
          }),
        },
        orderBy: {
          provider: "asc",
        },
        ...(perPage !== -1 && {
          take: perPage,
          skip: page <= 1 ? 0 : (page - 1) * perPage,
        }),
      });
      console.log(profiles.length);
      const totalCount = await db.housingProfile.count({});
      return {
        succeed: true,
        pagination: {
          page: page,
          perPage: perPage,
          results: profiles.length,
          totalPages: Math.ceil(totalCount / perPage),
          count: totalCount,
        },
        data: profiles,
      };
    } catch (error) {
      return {
        succeed: false,
        reason: "UNKOWN_ERROR",
      };
    }
  },
});
