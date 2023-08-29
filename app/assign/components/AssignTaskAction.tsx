import { Task } from "@/types/Task";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AssignTaskItemLayout from "./AssignTaskItemLayout";
import TaskItemDetailsLayout from "@/components/TaskItemDetailsLayout";
import AssignForm from "./AssignForm";
import { useState } from "react";
const AssignTaskAction = ({ task }: { task: Task }) => {
  const [assignOpen, setAssignOpen] = useState<boolean>(false);
  return (
    <div
      className="
      bg-gray-100
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
