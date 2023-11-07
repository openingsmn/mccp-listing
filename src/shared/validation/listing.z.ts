import { z } from "zod";
import { File } from "@web-std/file";

const addressSchema = z.object({
  fullAddress: z.string({ required_error: "Field Required!" }),
  city: z.string({ required_error: "Field Required!" }),
  postalCode: z.string({ required_error: "Field Required!" }),
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

export const postListingSchema = z.object({
  waiverType: z.object({
    general: z.string({ required_error: "Field Required!" }),
    specific: z.string({ required_error: "Field Required!" }),
  }),
  timeframe: z.string({ required_error: "Field Required!" }),
  housingType: z.string({ required_error: "Field Required!" }),
  fullName: z.string({ required_error: "Field Required!" }),
  dateOfBirth: z.date(),
  pmiNumber: z.string({ required_error: "Field Required!" }),
  address: addressSchema.partial().optional(),
  phone: z.string({ required_error: "Field Required!" }).optional().default(""),
  email: z.string({ required_error: "Field Required!" }).optional().default(""),
  relegiousPref: z
    .string({ required_error: "Field Required!" })
    .optional()
    .default(""),
  gender: z
    .string({ required_error: "Field Required!" })
    .optional()
    .default(""),
  race: z.string({ required_error: "Field Required!" }).optional().default(""),
  equipementsNeeded: z
    .string({ required_error: "Field Required!" })
    .optional()
    .default(""),
  guardianStatus: z.string({ required_error: "Field Required!" }),
  livingSituation: z.string({ required_error: "Field Required!" }),
  mobility: mobilitySchema,
  teamContact: teamContactSchema,
});

export type PostListingSchema = z.infer<typeof postListingSchema>;
