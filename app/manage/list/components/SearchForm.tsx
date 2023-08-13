"use client";

import { Separator } from "@/components/ui/separator";
import useDebounceSearch from "@/hooks/useDebounceSearch";
import { Dispatch, SetStateAction, useState } from "react";

interface SearchFormProps {
  onSearch: Dispatch<SetStateAction<string>>;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedValue = useDebounceSearch(searchTerm, 500);

  return (
    <div>
      {/*//PERFORMANCE LOGGING */}
      <div>
        <p>Value real-time: {searchTerm}</p>
        <p>Debounced value: {debouncedValue}</p>
      </div>

      {searchTerm}
      {/*//PERFORMANCE LOGGING */}
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
                        onSearch(debouncedValue);
                      }}
                    ></input>
                    <Separator className="bg-green-200 pt-0.5" />
                  </div>
                  <div className="pr-4"></div>
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
