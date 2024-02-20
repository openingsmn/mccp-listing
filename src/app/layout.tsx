import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Alkatra, Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./header";

// const inter = Inter({ subsets: ["latin"] });
const alkatra = Alkatra({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400"],
  variable: "--font-poppins",
  subsets: ["latin"],
});
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "MCCP Listing",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(alkatra.className, bebas.variable, poppins.variable)}>
        <Header />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
