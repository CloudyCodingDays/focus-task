const SearchFilters = () => {
  return (
    <div>
      <div className="flex flex-row justify-around items-baseline lg:w-[1000px] lg:mx-auto w-full mb-4 text-sm">
        Filters:
        <button className="hover:bg-green-500 hover:text-gray-100 bg-white text-gray-500 border-2 border-green-500 px-2 py-2 rounded-lg">
          Show All
        </button>
        <button className="hover:bg-green-500 hover:text-gray-100 bg-green-300 text-gray-500 px-2 py-2 rounded-lg">
          I can only do the bare minimum
        </button>
        <button className="hover:bg-yellow-500 hover:text-gray-100 bg-yellow-300 text-gray-500 px-2 py-2 rounded-lg">
          I can manage a little more
        </button>
        <button className="hover:bg-purple-500 hover:text-gray-100 bg-purple-300 text-gray-500 rounded-lg">
          I got a burst of energy to get stuff done
        </button>
      </div>
    </div>
  );
};
export default SearchFilters;
