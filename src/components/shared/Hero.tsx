import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const Hero = () => {
  return (
    <section className="home-screen min-h-screen flex items-center relative">
      <div className="px-10 md:mt-20">
        <h2 className="text-5xl md:text-8xl text-white">
          <span className="font-sans">SEARCH FOR</span>
          <br />
          <span className="text-primary">RESIDENTIAL</span>
          <br />
          <span className="font-sans">OPENINGS</span>
        </h2>
        <p className="mt-2 text-white max-w-xl">
          Discover a variety of housing options tailored to your clients needs
          with MCCP. We provide up-to-date openings for clients on CADI, BI, EW
          waivers, including but not limited to Customized Living/Assisted
          Living Facilities, CRS, Foster Care, etc. Explore a diverse range of
          options in our comprehensive listings.
          {/* MCCP provides timely assistance to address behavioral concerns in
            the lives of people with Intellectual Disabilities and Mental Health
            issues. Assessment, strategies, trainings, crisis homes and more */}
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
          <Link
            href="/listing"
            className={cn(
              buttonVariants({
                className: "w-full py-8 px-10 text-white text-base",
              })
            )}
          >
            See All Listing
            <ArrowRightIcon className="w-6 h-6 ml-4" />
          </Link>

          <div>
            <Link
              href="/listing/202/contact"
              className={cn(
                buttonVariants({
                  className: "w-full py-8 px-10 text-white text-base",
                })
              )}
            >
              Fill out referral form
              <ArrowRightIcon className="w-6 h-6 ml-4" />
            </Link>
          </div>
        </div>
        <div>
          <p className="text-white text-end mt-2">It takes 2 minutes</p>
        </div>

        <div className="mt-10">
          <p className="text-lg text-primary tracking-wider">
            We match with homes that might be a good fit.
          </p>
          <p className="text-lg text-white tracking-wider">
            76% placement rate through MCCPOpenings
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
