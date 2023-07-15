const NoTaskDisplay = () => {
  //grab whether task was completed today and detemine what to show
  return (
    <div>
      <div className="text-center text-3xl">
        You do not have an active task currently. That is perfectly fine!
      </div>
      <div className="py-6">
        If you do feel like doing something though. That is awesome! Feel free
        to choose from the options below:{" "}
      </div>
      <div>
        <div className="flex flex-row">
          <div
            className="rounded-lg bg-gradient-to-r from-red-600 via-yellow-600 via-yellow-400  via-green-500 via-blue-400 via-blue-600 to-indigo-800 p-1
          hover:bg-gradient-to-r hover:from-red-500 hover:via-yellow-500 hover:via-yellow-300  hover:via-green-400 hover:via-blue-300 hover:via-blue-500 hover:to-indigo-950"
          >
            <button className="h-full w-full bg-neutral-800 hover:bg-neutral-400 text-white font-bold">
              I am feeling Lucky!
            </button>
          </div>
          <div>
            <button className="px-4 ">Let me pick!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoTaskDisplay;
