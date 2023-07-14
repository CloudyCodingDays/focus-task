const ActiveTaskDisplay = () => {
  return (
    <div>
      Current Task Display
      <div className="h-full grid grid-cols-3 ">
        <div className="py-6 bg-neutral-700">Washing Dishes</div>
        <div className="py-6 bg-neutral-600">
          Mission Objective: Get atleast one side of the sink free of Dishes!
        </div>
        <div className="grid px-20 py-4">
          <button className="bg-green-600">Finish!</button>
          <div></div>
          <div></div>
        </div>
        <div className="py-6 bg-neutral-700"></div>
        <div className="py-6 bg-neutral-500">
          Bonus Objective: Organize dishes in dish drainer!
        </div>
        <div className="grid px-20 py-4">
          <button className="bg-green-600">Finish!</button>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="py-6 text-center">
        <button className="bg-yellow-400 px-12">
          Do this task another time
        </button>
      </div>
    </div>
  );
};

export default ActiveTaskDisplay;
