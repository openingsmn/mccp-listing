"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Label } from "./label";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-slate-200 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-900 data-[state=checked]:text-slate-50",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <CheckIcon className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

type CheckboxGroupElProps = {
  name: string;
  options: Array<{
    label: string;
    value: string;
  }>;
  value?: string[];
  onChange?: (value: string[]) => void;
  className?: string;
};

const CheckboxGroupEl = ({
  options,
  className,
  onChange,
  name,
  value,
}: CheckboxGroupElProps) => {
  const handleChange = (opt: string) => {
    if (!onChange) return;
    if (!value) return onChange?.([opt]);
    if (value?.includes(opt)) {
      onChange?.(value.filter((v) => v !== opt));
    } else {
      onChange?.([...value, opt]);
    }
  };
  return (
    <div className="space-y-2">
      {options.map((option) => {
        const optionId = name + "-" + option.value;
        return (
          <div
            key={option.value}
            role="button"
            onClick={() => handleChange(option.value)}
            className="flex items-center cursor-pointer space-x-2"
          >
            <span
              className={cn(
                "w-4 h-4 aspect-square rounded-sm border border-black",
                "flex items-center justify-center"
              )}
            >
              {value?.includes(option.value) && (
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

CheckboxGroupEl.displayName = "CheckboxGroupEl";

export { Checkbox, CheckboxGroupEl };
