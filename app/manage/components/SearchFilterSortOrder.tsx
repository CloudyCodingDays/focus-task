import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronDown } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import useThemeContext from "@/hooks/useThemeContext";
import { GetThemeStyle } from "@/components/GetThemeStyle";

const TaskProperties = [
  {
    value: "sort order",
    label: "Sort Order",
  },
  {
    value: "ascending",
    label: "Ascending",
  },
  {
    value: "descending",
    label: "Descending",
  },
];

const SearchFilterSortOrder = ({
  setSortOrder,
  sortOrder,
}: {
  setSortOrder: Dispatch<SetStateAction<string>>;
  sortOrder: string;
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
            className=" justify-between"
          >
            {sortOrder
              ? TaskProperties.find(
                  (TaskProperty) => TaskProperty.value === sortOrder,
                )?.label
              : "Sort Order..."}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className={"bg-mainBg w-[200px] p-0 text-onMainBg " + themeStyle}
        >
          <Command>
            <CommandGroup>
              {TaskProperties.map((TaskProperty) => (
                <CommandItem
                  key={TaskProperty.value}
                  onSelect={(currentValue) => {
                    setSortOrder(currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      sortOrder === TaskProperty.value
                        ? "opacity-100"
                        : "opacity-0",
                    )}
                  />
                  {TaskProperty.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SearchFilterSortOrder;
