import { cn } from "@/lib/utils";
import { Button } from "@/components/ui_components/button";
import {
  Command,
  CommandGroup,
  CommandItem,
} from "@/components/ui_components/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui_components/popover";
import { Check, ChevronDown } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import useThemeContext from "@/hooks/useThemeContext";
import { GetThemeStyle } from "@/components/GetThemeStyle";

const SortProperties = [
  {
    value: "sort",
    label: "Sort By",
  },
  {
    value: "name",
    label: "Name",
  },
  {
    value: "description",
    label: "Description",
  },
  {
    value: "recurring_type",
    label: "Recurring Type",
  },
  {
    value: "priority",
    label: "Priority",
  },
  {
    value: "due_date",
    label: "Due Date",
  },
];

const SearchFilterSorting = ({
  setSortBy,
  setSortOrder,
  sortBy,
}: {
  setSortBy: Dispatch<SetStateAction<string>>;
  setSortOrder: Dispatch<SetStateAction<string>>;
  sortBy: string;
}) => {
  const [open, setOpen] = useState(false);
  const { color, mode } = useThemeContext();
  const themeStyle = GetThemeStyle(color, mode);

  return (
    <div className="md:px-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={"justify-between bg-mainBg text-onMainBg " + themeStyle}
          >
            {sortBy
              ? SortProperties.find(
                  (SortProperty) => SortProperty.value === sortBy,
                )?.label
              : "Sort By..."}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className={"bg-mainBg w-[200px] p-0 text-onMainBg " + themeStyle}
        >
          <Command>
            <CommandGroup>
              {SortProperties.map((SortProperty) => (
                <CommandItem
                  key={SortProperty.value}
                  onSelect={(currentValue) => {
                    const newValue = SortProperties.find(
                      (SortProperty) =>
                        SortProperty.label.toLocaleLowerCase() === currentValue,
                    )?.value;
                    console.log(newValue);
                    if (newValue === "sort by") {
                      setSortBy(newValue);
                      setSortOrder("sort order");
                    } else if (newValue) {
                      setSortBy(newValue);
                      setSortOrder("descending");
                      setOpen(false);
                    }
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      sortBy === SortProperty.value
                        ? "opacity-100"
                        : "opacity-0",
                    )}
                  />
                  {SortProperty.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SearchFilterSorting;
