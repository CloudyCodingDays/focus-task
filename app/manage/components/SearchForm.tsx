"use client";
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
          flex 
          flex-row 
          justify-center"
      >
        <div
          className="
          mx-4 
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
                      placeholder="Search..."
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
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
