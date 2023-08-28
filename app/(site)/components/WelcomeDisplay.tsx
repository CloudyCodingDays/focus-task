"use client";

import AddTaskButton from "@/components/AddTaskButton";

const WelcomeDisplay = () => {
  return (
    <div className="w-[30em] bg-gray-200 rounded-lg mx-4 text-md mt-8 drop-shadow-lg py-8 text-center text-gray-500">
      <div className="text-sm">
        Welcome! You do not have any tasks added yet.
      </div>
      <div className="mt-4 text-sm">
        Add tasks from the Manage Tasks page or use the button below:
      </div>
      <div className="w-fit mx-auto mt-4">
        <AddTaskButton />
      </div>
    </div>
  );
};

export default WelcomeDisplay;
