"use client";
import { ColumnDef } from "@tanstack/react-table";
import { BaseTable } from "./table";
import { PaginatedApiResponse } from "@/typing/api";
import { PaginationProps } from "@/typing/pagination";

type DataTableProps = {
  columns: ColumnDef<any>[];
  onRowClick?: (row: any) => void;
  tableData?: PaginatedApiResponse<any> | null;
  pagination: PaginationProps;
};

export default function DataTable({
  columns,
  pagination,
  onRowClick,
  tableData,
}: DataTableProps) {
  return (
    <div>
      <BaseTable
        data={tableData?.data}
        columns={columns}
        pagination={pagination}
        onRowClick={onRowClick}
      />
    </div>
  );
}

// function columns(): ColumnDef<IUser>[] {
//   return [
//     {
//       id: "select",
//       header: ({ table }) => (
//         <Checkbox
//           checked={table.getIsAllPageRowsSelected()}
//           onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//           aria-label="Select all"
//           className="translate-y-[2px]"
//         />
//       ),
//       cell: ({ row }) => (
//         <Checkbox
//           checked={row.getIsSelected()}
//           onCheckedChange={(value) => row.toggleSelected(!!value)}
//           aria-label="Select row"
//           className="translate-y-[2px]"
//         />
//       ),
//       enableSorting: false,
//       enableHiding: false,
//     },
//     {
//       id: "datetime",
//       accessorFn: (activity) => new Date(activity.timestamp).toLocaleString(),
//       header: ({ column }) => (
//         <DataTableColumnHeader column={column} title="Date/Time" />
//       ),
//       cell: ({ row }) => {
//         return (
//           <div className="flex space-x-2">
//             <span className="max-w-[200px] truncate font-medium">
//               {new Date(row.original.timestamp).toLocaleString()}
//             </span>
//           </div>
//         );
//       },
//     },
//     {
//       id: "user",
//       accessorFn: (activity) => activity.user?.name,
//       header: ({ column }) => (
//         <DataTableColumnHeader column={column} title="User" />
//       ),
//       cell: ({ row }) => {
//         const archived = row.original.user?.archived ?? true;
//         return (
//           <div className="flex max-w-[100px] space-x-2">
//             <Link
//               href={archived ? "#" : `/dashboard/users/${row.original.userId}`}
//               className={cn(
//                 "max-w-[100px] truncate font-medium",
//                 archived ? "text-gray-700" : "text-primary"
//               )}
//             >
//               {row.original.user?.name}
//             </Link>
//           </div>
//         );
//       },
//     },
//     // {
//     //   id: "actions",
//     //   header: ({ column }) => (
//     //     <DataTableColumnHeader column={column} title="Actions" />
//     //   ),
//     //   cell: ({ row }) => <DataTableRowActions row={row} {...rowActions} />,
//     // },
//   ];
// }
