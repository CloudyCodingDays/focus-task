import { Separator } from "@/components/ui_components/separator";
import { Task } from "@/types/Task";
import React from "react";

interface ActiveTaskDetailsProps {
  task: Task;
}

const ActiveTaskDetailLayout: React.FC<ActiveTaskDetailsProps> = ({ task }) => {
  const { description, name } = task;

  return (
    <div>
      <div className="pt-4 px-4 text-md font-semibold">{name}</div>
      <Separator className="bg-main" />
      <div className="py-4 px-4 text-md">
        <p className="break-words">{description}</p>
      </div>
    </div>
  );
};

export default ActiveTaskDetailLayout;
