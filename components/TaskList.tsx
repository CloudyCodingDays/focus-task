"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import SearchForm from "@/app/manage/components/SearchForm";

const TaskList = ({ ShowTaskActions }: { ShowTaskActions: boolean }) => {
  const [debouncedValue, setDebouncedValue] = useState("");

  const TaskItemDisplay = dynamic(() => import("./TaskItemDisplay"), {
    loading: () => <p>Loading..</p>,
  });

  return (
    <div>
      <SearchForm setDebouncedValue={setDebouncedValue} />
      <div className="w-11/12 mx-auto">
        <TaskItemDisplay
          debouncedValue={debouncedValue}
          ShowTaskActions={ShowTaskActions}
        />
      </div>
    </div>
  );
};

export default TaskList;
