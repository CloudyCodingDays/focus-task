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

const SortOrders = [
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
  const { color } = useThemeContext();

  return (
    <div className="md:px-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={
              "justify-between bg-mainBg text-onMainBg " + `theme-${color}`
            }
          >
            {sortOrder
              ? SortOrders.find((SortOrder) => SortOrder.value === sortOrder)
                  ?.label
              : "Sort Order..."}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className={
            "bg-mainBg w-[200px] p-0 text-onMainBg " + `theme-${color}`
          }
        >
          <Command>
            <CommandGroup>
              {SortOrders.map((SortOrder) => (
                <CommandItem
                  key={SortOrder.value}
                  onSelect={(currentValue) => {
                    setSortOrder(currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      sortOrder === SortOrder.value
                        ? "opacity-100"
                        : "opacity-0",
                    )}
                  />
                  {SortOrder.label}
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
