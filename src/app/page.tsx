import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Page() {
  return (
    <main className="">
      <section className="home-screen flex items-center min-h-[calc(100vh_-_90px)] px-20 relative">
        <div className="w-full max-w-screen-xl mx-auto">
          <h2 className="text-[130px] leading-[120px] tracking-[4px] text-white">
            <span className="font-sans">SEARCH FOR</span>
            <br />
            <span className="text-primary">RESIDENTIAL</span>
            <br />
            <span className="font-sans">OPENINGS</span>
          </h2>
          <p className="mt-2 text-lg text-white max-w-[486px] tracking-[1px]">
            Discover a variety of housing options tailored to your clients needs 
            with MCCP. We provide up-to-date openings for clients on 
            CADI, BI, EW waivers, including but not limited to Customized 
            Living/Assisted Living Facilities, CRS, Foster Care, etc. 
            Explore a diverse range of options in our comprehensive listings.
            {/* MCCP provides timely assistance to address behavioral concerns in
            the lives of people with Intellectual Disabilities and Mental Health
            issues. Assessment, strategies, trainings, crisis homes and more */}
          </p>
        </div>
        <div className="absolute bottom-20 right-20">
          <Link
            href="/listing"
            className={cn(
              buttonVariants({
                variant: "primary",
                className: "tracking-widest uppercase gap-5 h-16",
              })
            )}
          >
            See All Listing
            <ArrowRightIcon className="w-6 h-6" />
          </Link>
        </div>
      </section>
      {/* <section className="p-20">
        <div
          className={cn(
            "bg-white rounded-[29px] mx-auto max-w-screen-lg py-8",
            "border-t-4 border-primary shadow-primary/20 shadow-xl"
          )}
        >
          <div className="flex justify-center gap-2 border-b border-slate-400 py-4">
            <MagnifyingGlassIcon className="w-10 h-10 text-primary" />
            <input
              type="text"
              placeholder="Enter Zip Code"
              className="min-w-[300px] bg-transparent focus-visible:outline-none text-3xl"
            />
          </div>
          <div className="py-4 flex items-center justify-center gap-5">
            <button
              type="button"
              className="h-[53px] px-8 focus-visible:outline-none bg-primary rounded-xl text-sm text-white"
            >
              Volvo
            </button>
            <button
              type="button"
              className={cn(
                "h-[53px] px-8 focus-visible:outline-none bg-primary rounded-xl text-sm text-white",
                "flex items-center justify-center gap-5"
              )}
            >
              <Image
                src={"/images/location.png"}
                width={20}
                height={20}
                alt=""
              />
              Search by Location
            </button>
          </div>
        </div>
      </section> */}
    </main>
  );
}
