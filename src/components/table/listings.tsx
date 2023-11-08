"use client";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { useEffect } from "react";
import { HousingProfile } from "@prisma/client";
import { DataTableColumnHeader } from "./basic/table";
import { perPageCountOptions } from "./basic/pagination";
import { PaginationProps } from "@/typing/pagination";
import { PaginatedApiResponse } from "@/typing/api";
import DataTable from "./basic";
import axios from "axios";
import { format } from "date-fns";

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
        <div className="flex  space-x-2">
          <span className={cn("font-bold truncate font-nunito text-slate-600")}>
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
            className={cn(
              "max-w-full truncate font-medium font-nunito text-slate-600"
            )}
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
            className={cn(
              "max-w-full truncate font-medium font-nunito text-slate-600"
            )}
          >
            {row.original.city}
          </span>
        </div>
      );
    },
  },
  {
    id: "updated",
    accessorFn: (row) => format(new Date(row.updateAt), "PPP"),
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Updated" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex  space-x-2">
          <span
            className={cn(
              "max-w-full truncate font-medium font-nunito text-slate-600"
            )}
          >
            {format(new Date(row.original.updateAt), "PP")}
          </span>
        </div>
      );
    },
  },
];

export default function ListingTable() {
  const [tableData, setTableData] =
    useState<PaginatedApiResponse<HousingProfile> | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState<number>(perPageCountOptions[0]);

  const pagination: PaginationProps = {
    onPageChange: setCurrentPage,
    currentPage: currentPage,
    perPage: perPage,
    setPerPage: setPerPage,
    totalPages: tableData?.pagination?.totalPages ?? 1,
  };

  // tableData?.data?.map((da)=> da.)

  const loadData = async () => {
    setTableData(null);
    const queryString = Object.entries({ page: currentPage, perPage: perPage })
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const res = await axios.get<PaginatedApiResponse<HousingProfile>>(
      `/api/listing/?${queryString}`
    );
    if (res.data.succeed) {
      setTableData(res.data);
    }
  };

  useEffect(() => {
    console.log(currentPage);
    console.log(perPage);
    loadData();
  }, [currentPage, perPage]);

  useEffect(() => {
    loadData();
  }, []);

  tableData;
  return (
    <div>
      <DataTable
        pagination={pagination}
        columns={tableColumns}
        tableData={tableData}
      />
    </div>
  );
}
