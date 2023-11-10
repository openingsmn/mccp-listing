import ListingTable from "@/components/table/listings";
import FiltersSection from "./FiltersSection";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Page() {
  return (
    <main className="pt-0 grid grid-cols-12 divide-x-4 divide-slate-300 font-poppins">
      <div className="w-full col-span-4 lg:col-span-3 2xl:col-span-2">
        <FiltersSection />
      </div>
      <div className="flex-1 w-full col-span-8 lg:col-span-9 2xl:col-span-10">
        <ListingTable />
      </div>
    </main>
  );
}
