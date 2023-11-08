import nodemailer from "nodemailer";
import generateEmailTemplate from "./template";
import { IListingSubmission } from "@/typing/db";

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    user: process.env.MAILER_FROM_EMAIL as string,
    pass: process.env.MAILER_FROM_PASSWORD as string,
  },
});

export async function sendListingEmail(
  listing: IListingSubmission
): Promise<boolean> {
  if (!listing.email) return false;
  try {
    const info = await transporter.sendMail({
      from: '"Ali Mi6" <alihussnain.mi6@mgil.com>',
      to: listing.email,
      subject: "",
      text: "",
      html: generateEmailTemplate(listing),
    });

    console.log("Message sent: %s", info.messageId);
    return true;
  } catch (error) {
    return false;
  }
}

// import Queue from "bee-queue";
// import { IListingSubmission } from "@/typing/db";
// const mailerQueue = new Queue<MailerJobData>("listing-mailer", {});

// export type MailerJobData = {
//   listing: IListingSubmission;
// };

// mailerQueue.on("ready", () => {
//   mailerQueue.process(async ({ data: { listing } }) => {
//     return await sendListingEmailSync(listing);
//   });
// });

// export async function sendListingEmailAsync(listing: IListingSubmission) {
//   await mailerQueue.createJob({ listing }).setId(listing.id).save();
// }
