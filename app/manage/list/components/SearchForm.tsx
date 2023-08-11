"use client";

import GetTaskDetails from "@/components/GetTaskDetails";
import { Separator } from "@/components/ui/separator";
import useDebounceSearch from "@/hooks/useDebounceSearch";
import { Task } from "@/types/Task";
import { useCallback, useEffect, useState } from "react";
import FilterSearchResults from "./FilterSearchResults";

interface SearchFormProps {
  onSearch: (searchResults: Task[]) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedValue = useDebounceSearch(searchTerm, 500);

  const searchResults = useCallback(async () => {
    const getSearchResults = await FilterSearchResults(debouncedValue);

    onSearch(getSearchResults);
  }, [debouncedValue, onSearch]);

  useEffect(() => {
    searchResults();
  }, [debouncedValue, searchResults]);

  return (
    <div>
      <div
        className=" 
          flex 
          flex-row 
          justify-center"
      >
        <div
          className="
          border-2 
          mx-4 
          rounded-lg 
          bg-gray-100 
          mt-8 
          w-[650px] 
          drop-shadow-lg"
        >
          <div className="text-right mx-4 my-4">
            <div>
              <form>
                <div className="flex flex-row w-full">
                  <div className="px-4 w-full drop-shadow-lg">
                    <input
                      style={{ width: "100%" }}
                      name="SearchTerm"
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                      }}
                    ></input>
                    <Separator className="bg-green-200 pt-0.5" />
                  </div>
                  <div className="pr-4">
                    <button
                      className="
              hover:text-gray-300
              hover:bg-gray-600
              bg-gray-500
              rounded-md 
              text-gray-200
              px-4          
              drop-shadow-lg"
                      type="submit"
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div className="py-4">
                  <div className="px-4 flex flex-row">
                    <input
                      name="NameFilter"
                      type="checkbox"
                      defaultChecked={true}
                    />
                    <div className="px-4">
                      <label>Filter by Name</label>
                    </div>
                  </div>
                  <div className="px-4 flex flex-row">
                    <input name="DescriptionFilter" type="checkbox" />
                    <div className="px-4">
                      <label>Filter by Description</label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
