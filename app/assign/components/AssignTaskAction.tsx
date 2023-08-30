import TaskItemDetailsLayout from "@/components/TaskItemDetailsLayout";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Task } from "@/types/Task";
import { useState } from "react";
import AssignForm from "./AssignForm";
import AssignTaskItemLayout from "./AssignTaskItemLayout";

const AssignTaskAction = ({ task }: { task: Task }) => {
  const [assignOpen, setAssignOpen] = useState<boolean>(false);
  return (
    <div
      className="
      bg-mainBg
      rounded-lg
      mb-8
      drop-shadow-lg"
    >
      <div className="w-full">
        <Dialog open={assignOpen} onOpenChange={setAssignOpen}>
          <DialogTrigger asChild>
            <button type="button" className="w-full">
              <AssignTaskItemLayout task={task} />
            </button>
          </DialogTrigger>
          <DialogContent>
            <div className="py-12 px-2">
              <TaskItemDetailsLayout task={task} isEdit={false} />
              <AssignForm task={task} onBack={setAssignOpen} />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AssignTaskAction;
