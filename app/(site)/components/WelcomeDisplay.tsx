"use client";

import AddTaskButton from "@/components/AddTaskButton";

const WelcomeDisplay = () => {
  return (
    <div className="bg-mainBg text-onMainBg lg:w-[50em] w-full lg:mx-auto rounded-lg text-md mt-8 drop-shadow-lg py-8 text-start">
      <div className="text-sm pl-4">
        Welcome! You do not have any tasks added yet.
      </div>
      <div className="mt-4 text-sm pl-4">
        Add tasks from Manage Tasks or use the button below to get started:
      </div>
      <div className="w-fit mx-auto mt-4">
        <AddTaskButton />
      </div>
    </div>
  );
};

export default WelcomeDisplay;
