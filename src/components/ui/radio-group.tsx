"use client";

import * as React from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "@/lib/utils";
import { Label } from "./label";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-slate-200 border-slate-900 text-slate-900 shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:border-slate-50 dark:text-slate-50 dark:focus-visible:ring-slate-300",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <CheckIcon className="h-3.5 w-3.5 fill-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

type RadioGroupElProps = {
  name: string;
  options: Array<{
    label: string;
    value: string;
  }>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: any) => void;
  className?: string;
};

const RadioGroupEl = ({
  options,
  className,
  onChange,
  name,
  value,
}: RadioGroupElProps) => {
  return (
    <div className="space-y-2">
      {options.map((option) => {
        const optionId = name + "-" + option.value;
        return (
          <div
            key={option.value}
            role="button"
            onClick={() => onChange?.(option.value)}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <span
              className={cn(
                "w-4 h-4 aspect-square rounded-full border border-black",
                "flex items-center justify-center"
              )}
            >
              {value === option.value && (
                <CheckIcon className="w-full h-full" />
              )}
            </span>
            <Label className="text-sm font-normal cursor-pointer" htmlFor={optionId}>
              {option.label}
            </Label>
          </div>
        );
      })}
    </div>
  );
};

RadioGroupEl.displayName = "RadioGroupEl";

export { RadioGroup, RadioGroupItem, RadioGroupEl };
