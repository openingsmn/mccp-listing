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
    label: "All Listing",
    frontend: false,
  },
  {
    href: "/advance-search",
    label: "Advance Search",
    frontend: true,
  },
  {
    href: "/contact",
    label: "Contact",
    frontend: true,
  },
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
        "w-full fixed top-0 left-0 h-[90px] px-10 py-[20px] bg-slate-100 border-b z-50",
        scrollY > 100 && "shadow-xl"
      )}
    >
      <div className="mx-auto flex items-center justify-between">
        <Link href="/" className="">
          <Image
            src={"/logo2.png"}
            width={184}
            height={65}
            alt="Logo"
            className="h-[50px] w-auto"
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
        <div className="flex items-center">
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
        </div>
      </div>
    </header>
  );
}
