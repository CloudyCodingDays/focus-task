const ActiveTaskDisplay = () => {
  return (
    <div>
      Current Task Display
      <div className="h-full grid grid-cols-2">
        <div className="py-6 bg-neutral-700">Washing Dishes</div>
        <div className="py-6 bg-neutral-600">
          Mission Objective: Get atleast one side of the sink free of Dishes!
        </div>
        <div className="py-6 bg-neutral-700"></div>
        <div className="py-6 bg-neutral-500">
          Bonus Objective: Organize dishes in dish drainer!
        </div>
      </div>
      <div className="py-6 grid grid-cols-2 rounded-lg text-4xl">
        <button className="bg-yellow-400 mx-2">Do a different task</button>
        <button className="bg-green-600 mx-2">Task Complete!</button>
      </div>
      <div className="py-6 text-left"></div>
    </div>
  );
};

export default ActiveTaskDisplay;
