import { cn } from "@/lib/utils";
import db from "@/server/db";
import { format } from "date-fns";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { profile: string };
}) {
  const profile = await db.housingProfile.findFirst({
    where: { id: Number(params.profile) },
  });

  if (!profile) return notFound();

  return (
    <main className="max-w-screen-xl mx-auto py-10">
      <div className="p-10 font-poppins">
        <div className="space-y-5 flex flex-col items-start">
          <h3 className="text-3xl text-slate-600">{profile.provider}</h3>
          <Link
            href={`/listing/${profile.id}/contact`}
            className={cn(
              "text-base font-poppins text-white focus-visible:outline-none",
              "bg-primary py-[10px] px-[26px] block"
            )}
          >
            Send Referral
          </Link>
        </div>
        <div className="">
          <div className="grid grid-cols-4 gap-10 py-5 border-b border-slate-300">
            <div className="space-y-1 text-sm tracking-[2px] text-slate-500">
              <h5 className="font-semibold uppercase text-slate-600">
                ADDRESS
              </h5>
              <p>
                {profile.address}, {profile.city}, {profile.state}
              </p>
            </div>
            <div className="space-y-1 text-sm tracking-[2px] text-slate-500">
              <h5 className="font-semibold uppercase text-slate-600">Phone</h5>
              <p>{profile.phone}</p>
            </div>
            <div className="space-y-1 text-sm tracking-[2px] text-slate-500">
              <h5 className="font-semibold uppercase text-slate-600">
                Provider
              </h5>
              <p>{profile.provider}</p>
            </div>
            <div className="space-y-1 text-sm tracking-[2px] text-slate-500">
              <h5 className="font-semibold uppercase text-slate-600">
                Last Updated
              </h5>
              <p>{format(new Date(profile.updatedAt), "PP")}</p>
            </div>
          </div>
          <div className="divide-y divide-slate-300">
            <div className="space-y-1 text-sm tracking-[2px] text-slate-500 py-5">
              <h5 className="font-semibold uppercase text-slate-600">
                Type of Home
              </h5>
              <p>{profile.housingType}</p>
            </div>
            <div className="space-y-1 text-sm tracking-[2px] text-slate-500 py-5">
              <h5 className="font-semibold uppercase text-slate-600">
                Funding Type
              </h5>
              <p>{profile.fundingType}</p>
            </div>
            <div className="space-y-1 text-sm tracking-[2px] text-slate-500 py-5">
              <h5 className="font-semibold uppercase text-slate-600">
                Beds Available
              </h5>
              <p>{profile.beds}</p>
            </div>
            <div className="space-y-1 text-sm tracking-[2px] text-slate-500 py-5">
              <h5 className="font-semibold uppercase text-slate-600">
                Bedroom Location & Privacy
              </h5>
              <p>{profile.bedroomLocation}</p>
            </div>
            {/* <div className="space-y-1 text-sm tracking-[2px] text-slate-500 py-5">
              <h5 className="font-semibold uppercase text-slate-600">
                Level of Intellectual Disabillity
              </h5>
              <p>{pro}</p>
            </div> */}
            <div className="space-y-1 text-sm tracking-[2px] text-slate-500 py-5">
              <h5 className="font-semibold uppercase text-slate-600">
                PHYSICAL ACCOMMODATIONS AVAILABLE
              </h5>
              <p>{profile.physicalAccommodations}</p>
            </div>
            <div className="space-y-1 text-sm tracking-[2px] text-slate-500 py-5">
              <h5 className="font-semibold uppercase text-slate-600">
                NURSING SUPPORT
              </h5>
              <p>{profile.nursingSupport}</p>
            </div>
            <div className="space-y-1 text-sm tracking-[2px] text-slate-500 py-5">
              <h5 className="font-semibold uppercase text-slate-600">
                CHALLENGING BEHAVIORS
              </h5>
              <p>{profile.challengingBehaviours}</p>
            </div>
            <div className="space-y-1 text-sm tracking-[2px] text-slate-500 py-5">
              <h5 className="font-semibold uppercase text-slate-600">
                TYPICAL STAFFING PATTERN
              </h5>
              <p>{profile.staffingPattern}</p>
            </div>
            <div className="space-y-1 text-sm tracking-[2px] text-slate-500 py-5">
              <h5 className="font-semibold uppercase text-slate-600">
                OVERNIGHT SUPERVISION
              </h5>
              <p>{profile.overnightSupervision}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
