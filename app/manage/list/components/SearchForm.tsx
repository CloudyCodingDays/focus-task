"use client";

import { Separator } from "@/components/ui/separator";

interface SearchFormProps {
  onSearch: React.FormEventHandler<HTMLFormElement>;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
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
              <form onSubmit={onSearch}>
                <div className="flex flex-row w-full">
                  <div className="px-4 w-full drop-shadow-lg">
                    <input style={{ width: "100%" }} name="SearchTerm"></input>
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
