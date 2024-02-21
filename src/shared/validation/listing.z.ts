import { File } from "@web-std/file";
import { z } from "zod";

const residentialOpeningsSchema = z.object({
  accessible55P: z
    .array(z.string({ required_error: "Field Required!" }))
    .optional(),
  notAccessible55P: z
    .array(z.string({ required_error: "Field Required!" }))
    .optional(),
  accessible18P: z
    .array(z.string({ required_error: "Field Required!" }))
    .optional(),
  notAccessible18P: z
    .array(z.string({ required_error: "Field Required!" }))
    .optional(),
  notAccessible18PFemaleOnly: z
    .array(z.string({ required_error: "Field Required!" }))
    .optional(),
});

const addressSchema = z.object({
  fullAddress: z.string({ required_error: "Field Required!" }),
  city: z.string({ required_error: "Field Required!" }),
  postalCode: z.string({ required_error: "Field Required!" }),
  phone: z.string({ required_error: "Field Required!" }).optional(), // Made optional as per request
  email: z
    .string({ required_error: "Field Required!" })
    .email({ message: "Please enter a valid email address." })
    .optional(), // Made optional as per request
});

const mobilitySchema = z.object({
  mobilityConcers: z.string({ required_error: "Field Required!" }),
  usedMobilityDevices: z
    .string({ required_error: "Field Required!" })
    .optional(),
  adjustWithOneFloor: z.string().optional(),
});

const teamContactSchema = z.object({
  caseManager: z.string({ required_error: "Field Required!" }),
  referrer: z.string({ required_error: "Field Required!" }).optional(),
  legalRepresentative: z
    .string({ required_error: "Field Required!" })
    .optional(),
  assessmentData: z
    .array(z.instanceof(File, { message: "Field Required!" }))
    .optional(),
  signature: z.string({ required_error: "Field Required!" }).optional(),
});

export const listingSubmissionSchema = z.object({
  waiverType: z.object({
    general: z.string({ required_error: "Field Required!" }),
    specific: z.string({ required_error: "Field Required!" }),
  }),
  timeframe: z.string({ required_error: "Field Required!" }),
  housingType: z.string({ required_error: "Field Required!" }),
  fullName: z.string({ required_error: "Field Required!" }),
  dateOfBirth: z.date().optional(), // Made optional as per request
  pmiNumber: z.string({ required_error: "Field Required!" }).optional(), // Made optional as per request
  address: addressSchema.partial().optional(),
  phone: z.string({ required_error: "Field Required!" }).optional(), // This should remain under addressSchema but adjusted for demonstration
  email: z
    .string({ required_error: "Field Required!" })
    .email({ message: "Please enter a valid email address." })
    .optional(), // This should remain under addressSchema but adjusted for demonstration
  relegiousPref: z.string({ required_error: "Field Required!" }).optional(),
  gender: z.string({ required_error: "Field Required!" }).optional(),
  race: z.string({ required_error: "Field Required!" }).optional(),
  equipementsNeeded: z.string({ required_error: "Field Required!" }),
  guardianStatus: z.string({ required_error: "Field Required!" }),
  livingSituation: z.string({ required_error: "Field Required!" }),
  mobility: mobilitySchema,
  teamContact: teamContactSchema,
  residentialOpenings: residentialOpeningsSchema.optional(),
});

export type ListingSubmissionSchema = z.infer<typeof listingSubmissionSchema>;

export const listingFiltersSchema = z.object({
  page: z
    .union([z.string(), z.number()])
    .optional()
    .default(1)
    .transform((value) => (typeof value === "string" ? Number(value) : value)),
  perPage: z
    .union([z.string(), z.number()])
    .optional()
    .default(20)
    .transform((value) => (typeof value === "string" ? Number(value) : value)),
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
  intellectualDisability: z.array(z.string()).optional(),
  mentalDiagnosis: z.array(z.string()).optional(),
  physicalAccommodations: z.array(z.string()).optional(),
  nursingSupport: z.array(z.string()).optional(),
  challengingBehaviours: z.array(z.string()).optional(),
  staffingPattern: z.array(z.string()).optional(),
  overnightSupervision: z.array(z.string()).optional(),
});

export type ListingFiltersSchema = z.infer<typeof listingFiltersSchema>;
