"use client";
import AssignForm from "@/app/assign/components/AssignForm";
import TaskItemRowLayout from "@/components/TaskItemRowLayout";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Task } from "@/types/Task";
import { Dispatch, SetStateAction } from "react";

const AssignItemButton = ({
  task,
  assignOpen,
  setAssignOpen,
}: {
  task: Task;
  assignOpen: boolean;
  setAssignOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Dialog open={assignOpen} onOpenChange={setAssignOpen}>
      <DialogTrigger asChild>
        <button className="hover:bg-green-500 hover:rounded-lg px-4">
          Select Task
        </button>
      </DialogTrigger>
      <DialogContent className="left-[50%] lg:w-[1300px]">
        <div className="mt-12">
          <TaskItemRowLayout task={task} />
          <AssignForm id={task.id} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AssignItemButton;
