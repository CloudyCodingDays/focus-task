import { Task } from "@/types/supabase";

interface SearchProps {
  onSearch: React.FormEventHandler<HTMLFormElement>;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  return (
    <div>
      <form onSubmit={onSearch}>
        <div className="flex flex-row w-full">
          <div className="px-4 w-full">
            <input
              style={{ width: "100%" }}
              name="SearchTerm"
              className="border-2"
            ></input>
          </div>
          <div className="pr-4">
            <button
              className="
              hover:text-gray-300
              hover:bg-gray-600
              bg-gray-500
              rounded-md 
              text-gray-200
              px-2"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
        <div className="py-4">
          <div className="px-4 flex flex-row">
            <input name="NameFilter" type="checkbox" defaultChecked={true} />
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
  );
};

export default Search;
