import { createRouteHandler } from "@/libs/router";
import { NextRequest } from "next/server";
import { z } from "zod";



const postSchema = z.object({
  waiverType: z.string(),
    timeframe: z.string(),
    housingType: z.string(),
    fullName:z.string(),
    dateOfBirth: z.date(),
    pmiNumber: z.string(),
    address: z.string(),
    city: z.string(),
    phoneNumber: z.string(),
    email: z.string(),
    email: z.string(),
    religiousPreference: z.string(),
    gender: z.string(),
    race: z.string(),
    resourcesNeeded: z.string(),
    guardianStatus:z.string(),
    curLivingSituation: z.string()
})

export const POST = createRouteHandler({
validate: {body: },
  handler: ({ body }) => {},
});
