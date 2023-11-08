import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const formPayload = Object.fromEntries(await req.formData());
  console.log(formPayload);
  return NextResponse.redirect("/");
};
