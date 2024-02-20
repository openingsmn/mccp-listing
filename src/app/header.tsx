"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const menuItems = [
  {
    href: "/",
    label: "Home",
    frontend: false,
  },
  {
    href: "/listing",
    label: "All Listings",
    frontend: false,
  },
  {
    href: "/about",
    label: "About",
    frontend: false,
  },
  // {
  //   href: "/contact",
  //   label: "Contact",
  //   frontend: true,
  // },
];

export default function Header() {
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.screenY);
    });
  }, []);
  return (
    <header
      className={cn(
        "w-full fixed top-0 h-16 px-4 md:px-10 bg-[#FAFCF7] border-b z-50",
        scrollY > 100 && "shadow-xl"
      )}
    >
      <div className="mx-auto h-full flex items-center justify-between">
        <Link href="/" className="w-auto h-full">
          <Image
            src={"/logo.png"}
            width={60}
            height={60}
            alt="Logo"
            unoptimized
            className="h-full w-auto aspect-square"
          />
        </Link>
        <nav className="flex items-center gap-8">
          {menuItems.map((mItem) => {
            const Slot = mItem.frontend ? "a" : Link;
            return (
              <Slot
                key={mItem.href}
                href={mItem.href}
                className={cn(
                  "text-base text-black uppercase font-medium transition-all underline-offset-4",
                  pathname === mItem.href
                    ? "underline text-nprimary"
                    : "hover:underline hover:text-nprimary"
                )}
              >
                {mItem.label}
              </Slot>
            );
          })}
        </nav>
        {/* <div className="flex items-center">
          <a
            href="/signup"
            className={cn(
              "text-[17px] font-poppins text-black focus-visible:outline-none",
              "py-[5px] px-[26px]"
            )}
          >
            Sign Up
          </a>
          <a
            href="/signin"
            className={cn(
              "text-[17px] hover:text-primary font-poppins text-nprimary focus-visible:outline-none",
              "border border-nprimary rounded-md py-[5px] px-[26px]"
            )}
            style={{ borderColor: "#BB006E !important" }}
          >
            Sign In
          </a>
        </div> */}
      </div>
    </header>
  );
}
