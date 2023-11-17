import {
  ListingFiltersSchema,
  listingFiltersSchema,
} from "@/shared/validation/listing.z";
import { PaginatedApiResponse } from "@/typing/api";
import { HousingProfile } from "@prisma/client";
import axios from "axios";
import { create } from "zustand";
import queryString from "query-string";

type UseListingStore = {
  filters: ListingFiltersSchema;
  setFilters: (
    value:
      | ((value: ListingFiltersSchema) => ListingFiltersSchema)
      | ListingFiltersSchema
  ) => void;
  listingData?: PaginatedApiResponse<HousingProfile> | null;
  loadingData?: boolean;
  loadListingData: () => void;
};

export const useListingStore = create<UseListingStore>((set, get) => ({
  filters: listingFiltersSchema.parse({}),
  loadingData: false,
  listingData: null,
  setFilters: (value) => {
    set((state) => ({
      ...state,
      filters: listingFiltersSchema.parse(
        typeof value === "function" ? value(state.filters) : value
      ),
    }));
    get().loadListingData();
  },
  async loadListingData() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    set((state) => ({
      ...state,
      loadingData: true,
      listingData: null,
      filters: {
        ...state.filters,
        // page: 1,
      },
    }));
    // const queryString = Object.entries(get().filters)
    //   .map(([key, value]) => `${key}=${value}`)
    //   .join("&");
    const listingUrl = queryString.stringifyUrl(
      {
        url: "/api/listing",
        query: get().filters,
      },
      {
        arrayFormat: "bracket",
      }
    );
    const res = await axios.get<PaginatedApiResponse<HousingProfile>>(
      listingUrl
    );
    if (res.data.succeed) {
      set((state) => ({
        ...state,
        loadingData: false,
        listingData: res.data,
        filters: {
          ...state.filters,
          page:
            (res.data.data?.length || 0) > 0
              ? res.data.pagination?.page || 1
              : 1,
        },
      }));
    }
  },
}));
