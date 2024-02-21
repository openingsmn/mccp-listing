"use client";
import { cn } from "@/lib/utils";
import { PaginationProps } from "@/typing/pagination";
import { HousingProfile } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useListingStore } from "../hooks/stores/useListing";
import { Button } from "../ui/button";
import DataTable from "./basic";
import { DataTableColumnHeader } from "./basic/table";

const tableColumns: ColumnDef<HousingProfile>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={table.getIsAllPageRowsSelected()}
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "provider",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Provider" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className={cn("font-bold font-nunito text-slate-600")}>
            {row.original.provider}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "address",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Address" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex  space-x-2">
          <span
            className={cn("max-w-full font-medium font-nunito text-slate-600")}
          >
            {row.original.address}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "city",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="City" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex  space-x-2">
          <span
            className={cn("max-w-full font-medium font-nunito text-slate-600")}
          >
            {row.original.city}
          </span>
        </div>
      );
    },
  },
  {
    id: "updated",
    accessorFn: (row) => format(new Date(row.updatedAt), "PPP"),
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Updated" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex  space-x-2">
          <span
            className={cn("max-w-full font-medium font-nunito text-slate-600")}
          >
            {format(new Date(row.original.updatedAt), "PP")}
          </span>
        </div>
      );
    },
  },
  {
    id: "Refer",
    accessorFn: (row) => format(new Date(row.updatedAt), "PPP"),
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Refer" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex  space-x-2">
          <Button className="text-white">Click to Refer</Button>
        </div>
      );
    },
  },
];

export default function ListingTable() {
  const router = useRouter();
  const { filters, setFilters, listingData, loadListingData } =
    useListingStore();

  const pagination: PaginationProps = {
    onPageChange: (page) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        page: page,
      }));
    },
    currentPage: filters.page,
    perPage: filters.perPage,
    setPerPage: (perPage) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        perPage: perPage,
      }));
    },
    totalPages: listingData?.pagination?.totalPages ?? 1,
  };

  useEffect(() => {
    loadListingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <DataTable
        pagination={pagination}
        columns={tableColumns}
        tableData={listingData}
        onRowClick={(row: HousingProfile) => {
          router.push(`/listing/${row.id}`);
        }}
      />
    </div>
  );
}
