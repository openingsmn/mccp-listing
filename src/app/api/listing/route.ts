import { createRouteHandler } from "@/lib/router";
import db from "@/server/db";
import {
  ListingFiltersSchema,
  listingFiltersSchema,
} from "@/shared/validation/listing.z";
import { HousingProfile } from "@prisma/client";

const filterProfilesData = (
  data: HousingProfile[],
  filters: ListingFiltersSchema
) => {
  const checkConditions = (profile: HousingProfile) => {
    return [
      ...Object.entries(filters).map(([key, value]) => {
        return () => {
          if (key === "page" || key === "perPage") return true;
          if (!Object.keys(profile).includes(key)) return true;
          if (!value) return true;
          const difference = String((profile as any)[key])
            .split(",")
            .filter((pValue) => {
              return (Array.isArray(value) ? value : [String(value)])?.some(
                (fValue) => {
                  return (
                    fValue === pValue ||
                    fValue.includes(pValue) ||
                    pValue.includes(fValue)
                  );
                }
              );
            }).length;
          return difference > 0;
        };
      }),
    ].some((filter) => filter() === false);
  };
  const filteredData = data.filter((profile) => !checkConditions(profile));
  return filteredData;
};

export const GET = createRouteHandler({
  validate: {
    query: listingFiltersSchema,
  },
  handler: async ({ query }) => {
    try {
      const profiles = await db.housingProfile.findMany({
        where: {},
        orderBy: {
          provider: "asc",
        },
      });
      let filteredProfiles = filterProfilesData(profiles, query);
      const totalCount = filteredProfiles.length;
      // console.log("Skip Profiles = ", skipProfiles);
      const totalPages = Math.ceil(totalCount / query.perPage);
      const currentPage = Math.min(query.page, totalPages);
      const skipProfiles =
        currentPage <= 1 ? 0 : (currentPage - 1) * query.perPage;
      filteredProfiles = filteredProfiles.slice(
        skipProfiles,
        skipProfiles + query.perPage
      );
      // const totalCount = await db.housingProfile.count({});
      // console.log("Total Count = ", totalCount);
      return {
        succeed: true,
        pagination: {
          page: currentPage,
          perPage: query.perPage,
          results: filteredProfiles.length,
          totalPages: totalPages,
          count: totalCount,
        },
        data: filteredProfiles,
      };
    } catch (error) {
      return {
        succeed: false,
        reason: "UNKOWN_ERROR",
      };
    }
  },
});
