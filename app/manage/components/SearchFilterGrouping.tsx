import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronDown, ChevronsUpDown } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

const TaskProperties = [
  {
    value: "name",
    label: "Name",
  },
  {
    value: "description",
    label: "Description",
  },
  {
    value: "recurring",
    label: "Recurring",
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

const SearchFilterGrouping = ({
  setGroupBy,
}: {
  setGroupBy: Dispatch<SetStateAction<string>>;
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
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
                  (TaskProperty) => TaskProperty.value === value
                )?.label
              : "Group By..."}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandGroup>
              {TaskProperties.map((TaskProperty) => (
                <CommandItem
                  key={TaskProperty.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue);
                    setGroupBy(currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === TaskProperty.value ? "opacity-100" : "opacity-0"
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
