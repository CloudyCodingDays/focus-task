"use client";
import AddTaskButton from "@/components/AddTaskButton";
import { Separator } from "@/components/ui/separator";
import useDebounceSearch from "@/hooks/useDebounceSearch";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface SearchFormProps {
  setDebouncedValue: Dispatch<SetStateAction<string>>;
}

const SearchForm: React.FC<SearchFormProps> = ({ setDebouncedValue }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedValue = useDebounceSearch(searchTerm, 500);

  useEffect(() => {
    setDebouncedValue(debouncedValue);
  }, [debouncedValue, setDebouncedValue]);
  return (
    <div>
      <div
        className="
          mt-4
          mx-auto
          lg:w-[1000px] 
          drop-shadow-lg"
      >
        <div className="my-4">
          <div className="flex flex-row justify-between items-baseline">
            <form className="flex-grow mr-4">
              <input
                name="SearchTerm"
                className="w-full"
                value={searchTerm}
                placeholder="Search..."
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              ></input>
              <Separator className="bg-green-200 pt-0.5" />
            </form>
            <AddTaskButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
