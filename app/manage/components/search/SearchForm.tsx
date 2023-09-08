"use client";
import { Separator } from "@/components/ui_components/separator";
import useDebounceSearch from "@/hooks/useDebounceSearch";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import SearchFilterGrouping from "./SearchFilterGrouping";
import SearchFilterSorting from "./SearchFilterSorting";
import SearchFilterSortOrder from "./SearchFilterSortOrder";
import AddTaskButton from "@/components/AddTaskButton";

interface SearchFormProps {
  setDebouncedValue: Dispatch<SetStateAction<string>>;
  setGroupBy: Dispatch<SetStateAction<string>>;
  setSortBy: Dispatch<SetStateAction<string>>;
  setSortOrder: Dispatch<SetStateAction<string>>;
  groupBy: string;
  sortBy: string;
  sortOrder: string;
}

const SearchForm: React.FC<SearchFormProps> = ({
  setDebouncedValue,
  setGroupBy,
  setSortBy,
  setSortOrder,
  groupBy,
  sortBy,
  sortOrder,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedValue = useDebounceSearch(searchTerm, 500);

  useEffect(() => {
    setDebouncedValue(debouncedValue);
  }, [debouncedValue, setDebouncedValue]);

  return (
    <div>
      <div className="mt-4 mx-auto drop-shadow-lg bg-mainBg py-4">
        <div className="my-4">
          <div className="flex flex-row justify-between items-baseline px-4">
            <form className="flex-grow  mr-4">
              <input
                aria-label="Search"
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
          <div className="flex flex-row justify-between lg:justify-end mt-4 mx-4">
            <SearchFilterGrouping setGroupBy={setGroupBy} groupBy={groupBy} />
            <SearchFilterSorting
              setSortBy={setSortBy}
              setSortOrder={setSortOrder}
              sortBy={sortBy}
            />
            <SearchFilterSortOrder
              setSortOrder={setSortOrder}
              sortOrder={sortOrder}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
