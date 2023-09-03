"use client";
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
    value: "group by",
    label: "Group By",
  },
  {
    value: "recurring",
    label: "Recurring",
  },
  {
    value: "recurring type",
    label: "Recurring Type",
  },
  {
    value: "priority",
    label: "Priority",
  },
  {
    value: "due date",
    label: "Due Date",
  },
];

const SearchFilterGrouping = ({
  setGroupBy,
}: {
  setGroupBy: Dispatch<SetStateAction<string>>;
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
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
            {value
              ? TaskProperties.find(
                  (TaskProperty) => TaskProperty.value === value,
                )?.label
              : "Group By..."}
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
                    console.log(currentValue);
                    setValue(currentValue);
                    setGroupBy(currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === TaskProperty.value
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

export default SearchFilterGrouping;
