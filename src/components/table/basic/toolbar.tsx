"use client";
import * as React from "react";
import { Table as TTable } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Cross2Icon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { DataTableViewOptions } from "./table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableActionProps } from "@/typing/table";

export interface ToolbarProps<TData> {
  toolbarActions?: TableActionProps;
}
interface DataTableToolbarProps<TData> extends ToolbarProps<TData> {
  table: TTable<TData>;
  filterValue: string;
  setFilterValue: (value: string) => void;
}

export type TableActionPopupState = {
  state: boolean;
  type: "ARCHIVE" | "RESTORE" | "DELETE";
};

export function DataTableToolbar<TData>({
  table,
  filterValue,
  setFilterValue,
  toolbarActions,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const selectedRows = table.getSelectedRowModel().rows.map((r) => r.original);

  return (
    <div className="flex items-center justify-between p-4 border border-b-0 rounded-t">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search..."
          value={filterValue}
          onChange={(event) => setFilterValue(event.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="flex items-center gap-3">
        {/* {(toolbarActions?.restoreAction ||
          toolbarActions?.deleteAction ||
          toolbarActions?.archiveAction) &&
          session?.user.role === "ADMIN" && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  disabled={
                    selectedRows?.length <= 0 ||
                    (!toolbarActions.restoreAction &&
                      !toolbarActions.deleteAction &&
                      !toolbarActions.archiveAction)
                  }
                  variant="ghost"
                  className="flex h-8 w-8 p-0 data-[state=open]:bg-secondary-low/10"
                >
                  <DotsHorizontalIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[250px]">
                {toolbarActions.restoreAction ? (
                  <DropdownMenuItem disabled={selectedRows.length <= 0}>
                    Restore
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem disabled={selectedRows.length <= 0}>
                    Archive
                  </DropdownMenuItem>
                )}
                {toolbarActions.deleteAction && (
                  <DropdownMenuItem disabled={selectedRows.length <= 0}>
                    Delete (Permanantly)
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          )} */}
        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}
