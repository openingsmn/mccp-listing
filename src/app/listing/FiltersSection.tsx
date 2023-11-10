"use client";
import { useListingStore } from "@/components/hooks/stores/useListing";
import { Button } from "@/components/ui/button";
import { CheckboxGroupEl } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroupEl } from "@/components/ui/radio-group";
import { ListingFiltersSchema } from "@/shared/validation/listing.z";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";

const filtersData = [
  {
    shorName: "housingType",
    name: "Types of Home",
    numeric: false,
    items: [
      "CRS/Formerly SLS",
      "ICF",
      "Foster Care",
      "SILS",
      "In-Home",
      "Respite",
      "Temporary Care  Covid",
      "Out of Metro Crisis Bed",
    ],
  },
  {
    shorName: "fundingType",
    name: "Funding Type",
    numeric: false,
    items: [
      "DD Waiver",
      "CAC",
      "CADI Waiver",
      "TBI",
      "Elderly Waiver",
      "Private Pay",
      "Medical Assistance",
    ],
  },

  {
    shorName: "beds",
    name: "Beds Available",
    numeric: true,
    singleChoice: true,
    items: [1, 2, 3, 4, 5, 6 + "+"],
  },

  {
    shorName: "bedroomLocation",
    name: "Bedroom Locations",
    numeric: false,
    singleChoice: false,
    items: ["Main Floor", "Basement", "Upstairs"],
  },
  // {
  //   shorName: "",
  //   name: "# of Bathrooms",
  //   numeric: true,
  //   singleChoice: true,
  //   items: [1, 2, 3, 4, 5, 6 + "+"],
  // },
  // {
  //   shorName: "gender",
  //   name: "Gender Allowed",
  //   numeric: true,
  //   singleChoice: true,
  //   items: ["Male", "Female"],
  // },

  // {
  //   shorName: "age",
  //   name: "Age Allowed ",
  //   numeric: true,
  //   singleChoice: true,
  //   items: ["17 and Under", "18+"],
  // },

  // {
  //   shorName: "intellectualDisability",
  //   name: "Level of Intellectual Disability ",
  //   numeric: false,
  //   singleChoice: false,
  //   items: ["Mild", "Moderate", "Severe", "Profound"],
  // },

  // {
  //   shorName: "mentalDiagnosis",
  //   name: "Mental Health Diagnosis ",
  //   numeric: true,
  //   singleChoice: false,
  //   items: ["Yes", "No", "Will Consider"],
  // },

  {
    shorName: "physicalAccommodations",
    name: "Physical Accommodations Available ",
    numeric: false,
    singleChoice: false,
    items: [
      "Wheelchair",
      "Hoyer Lift",
      "Ramp",
      "Hospital Bed",
      "Stair Bed",
      "Stair Lift",
      "Bathroom Hand Rails",
    ],
  },

  {
    shorName: "nursingSupport",
    name: "Nursing Support ",
    numeric: false,
    singleChoice: false,
    items: ["On Site", "On Call", "Weekly Visit", ,],
  },
  {
    shorName: "challengingBehaviours",
    name: "Challenging Behaviors",
    numeric: false,
    singleChoice: false,
    items: [
      "Self Injurious",
      "Verbal Aggression",
      "Physical Aggression",
      "Property Destruction",
      "Elopement",
      "Undesireable Secual Behaviors",
      "Alocohol / Chemical Dependency",
      "Emeergency Use of Controlled Procedure",
      "Positive Support Transition Plan",
    ],
  },

  {
    shorName: "staffingPattern",
    name: "Typical Staffing Pattern ",
    numeric: true,
    singleChoice: false,
    items: ["1:1", "1:2", "1:3", "2:4"],
  },
  {
    shorName: "overnightSupervision",
    name: "Overnight Supervision",
    numeric: false,
    singleChoice: false,
    items: ["Awake", "Sleep", "Electronic Monitoring"],
  },
];

export default function FiltersSection() {
  const { filters, setFilters } = useListingStore();
  const form = useForm<ListingFiltersSchema>({});
  const handleFiltersChange = (name: string, value: any) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  return (
    <Form {...form}>
      <form method="post">
        <div className="border-b p-5 flex items-center gap-2">
          <Input placeholder="Search By Zip Code" className="flex-1 w-full" />
          <Button
            size="icon"
            variant="outline"
            className="h-10 w-10 aspect-square"
          >
            <MagnifyingGlassIcon />
          </Button>
        </div>
        <div className="p-5 space-y-8">
          {filtersData.map((filter) =>
            filter.singleChoice ? (
              <FormField
                key={filter.shorName}
                control={form.control}
                name={filter.shorName as any}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{filter.name}</FormLabel>
                    <FormControl>
                      <RadioGroupEl
                        key={filter.shorName}
                        options={filter.items.map((value) => ({
                          label: String(value),
                          value: String(value),
                        }))}
                        name={filter.shorName}
                        value={(filters as any)?.[filter.shorName] ?? ""}
                        onChange={(value) =>
                          handleFiltersChange(filter.shorName, value)
                        }
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            ) : (
              <FormField
                key={filter.shorName}
                control={form.control}
                name={filter.shorName as any}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{filter.name}</FormLabel>
                    <FormControl>
                      <CheckboxGroupEl
                        key={filter.shorName}
                        options={filter.items.map((value) => ({
                          label: String(value),
                          value: String(value),
                        }))}
                        name={filter.shorName}
                        value={(filters as any)?.[filter.shorName] ?? []}
                        onChange={(value) =>
                          handleFiltersChange(filter.shorName, value)
                        }
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            )
          )}
        </div>
      </form>
    </Form>
  );
}
