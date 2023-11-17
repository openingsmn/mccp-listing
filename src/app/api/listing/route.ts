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
      // () => {
      //   if (!filters.fundingType) return true;
      //   const difference = profile.fundingType.split(",").filter((pValue) => {
      //     return filters.fundingType?.some((fValue) => {
      //       return (
      //         fValue === pValue ||
      //         fValue.includes(pValue) ||
      //         pValue.includes(fValue)
      //       );
      //     });
      //   }).length;
      //   return difference > 0;
      // },
      // () => {
      //   if (!filters.beds) return true;
      //   return (
      //     filters.beds === profile.beds ||
      //     filters.beds.includes(profile.beds) ||
      //     profile.beds.includes(filters.beds)
      //   );
      // },
      // () => {
      //   if (
      //     !filters.intellectualDisability ||
      //     !profile.intellectualDisability
      //   ) {
      //     return true;
      //   }
      //   const difference = profile.intellectualDisability
      //     .split(",")
      //     .filter((pValue) => {
      //       return filters.intellectualDisability?.some((fValue) => {
      //         return (
      //           fValue === pValue ||
      //           fValue.includes(pValue) ||
      //           pValue.includes(fValue)
      //         );
      //       });
      //     }).length;
      //   return difference > 0;
      // },
      // () => {
      //   if (!filters.bedroomLocation) return true;
      //   const difference = profile.bedroomLocation
      //     .split(",")
      //     .filter((pValue) => {
      //       return filters.bedroomLocation?.some((fValue) => {
      //         return (
      //           fValue === pValue ||
      //           fValue.includes(pValue) ||
      //           pValue.includes(fValue)
      //         );
      //       });
      //     }).length;
      //   return difference > 0;
      // },
      // () => {
      //   if (!filters.nursingSupport) return true;
      //   const difference = profile.nursingSupport
      //     .split(",")
      //     .filter((pValue) => {
      //       return filters.nursingSupport?.some((fValue) => {
      //         return (
      //           fValue === pValue ||
      //           fValue.includes(pValue) ||
      //           pValue.includes(fValue)
      //         );
      //       });
      //     }).length;
      //   return difference > 0;
      // },
      // () => {
      //   if (!filters.staffingPattern) return true;
      //   const difference = profile.staffingPattern
      //     .split(",")
      //     .filter((pValue) => {
      //       return filters.staffingPattern?.some((fValue) => {
      //         return (
      //           fValue === pValue ||
      //           fValue.includes(pValue) ||
      //           pValue.includes(fValue)
      //         );
      //       });
      //     }).length;
      //   return difference > 0;
      // },
      // () => {
      //   if (!filters.overnightSupervision) return true;
      //   const difference = profile.overnightSupervision
      //     .split(",")
      //     .filter((pValue) => {
      //       return filters.overnightSupervision?.some((fValue) => {
      //         return (
      //           fValue === pValue ||
      //           fValue.includes(pValue) ||
      //           pValue.includes(fValue)
      //         );
      //       });
      //     }).length;
      //   return difference > 0;
      // },
      // () => {
      //   if (!filters.physicalAccommodations) return true;
      //   const difference = profile.physicalAccommodations
      //     .split(",")
      //     .filter((pValue) => {
      //       return filters.physicalAccommodations?.some((fValue) => {
      //         return (
      //           fValue === pValue ||
      //           fValue.includes(pValue) ||
      //           pValue.includes(fValue)
      //         );
      //       });
      //     }).length;
      //   return difference > 0;
      // },
      // () => {
      //   if (!filters.challengingBehaviours) return true;
      //   const difference = profile.challengingBehaviours
      //     .split(",")
      //     .filter((pValue) => {
      //       return filters.challengingBehaviours?.some((fValue) => {
      //         return (
      //           fValue === pValue ||
      //           fValue.includes(pValue) ||
      //           pValue.includes(fValue)
      //         );
      //       });
      //     }).length;
      //   return difference > 0;
      // },
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
      const currentPage = Math.min(query.page, totalPages)
      const skipProfiles = currentPage <= 1 ? 0 : (currentPage - 1) * query.perPage;
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
