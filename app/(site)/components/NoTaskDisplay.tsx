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
        <div className="flex flex-row justify-center">
          <div className="px-8">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              I am feeling Lucky!
            </button>
          </div>
          <div className="px-8">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
              Let me Pick!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoTaskDisplay;
