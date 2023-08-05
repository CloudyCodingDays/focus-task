import { Task } from "@/types/supabase";

interface SearchProps {
  onSearch: React.FormEventHandler<HTMLFormElement>;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  return (
    <div>
      <form onSubmit={onSearch}>
        <input name="SearchTerm" className="border-2"></input>
        <input name="NameFilter" type="checkbox" defaultChecked={true} />
        <label>Filter by Name</label>

        <input name="DescriptionFilter" type="checkbox" />
        <label>Filter by Description</label>

        <button className="border-2" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
