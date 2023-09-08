import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui_components/dialog";
import { Task } from "@/types/Task";
import { useState } from "react";
import AssignForm from "./AssignForm";
import AssignTaskItemLayout from "./AssignTaskItemLayout";
import useThemeContext from "@/hooks/useThemeContext";

const AssignTaskItem = ({ task }: { task: Task }) => {
  const [assignOpen, setAssignOpen] = useState<boolean>(false);
  const { color } = useThemeContext();

  return (
    <div
      className="
      bg-mainBg
      text-onMainBg
      rounded-lg
      mb-8
      drop-shadow-lg"
    >
      <div className="w-full">
        <Dialog open={assignOpen} onOpenChange={setAssignOpen}>
          <DialogTrigger asChild>
            <button
              id={"AssignTaskItem"}
              aria-label="View Task Item Button"
              type="button"
              className="w-full"
            >
              <AssignTaskItemLayout task={task} />
            </button>
          </DialogTrigger>
          <DialogContent
            className={"bg-mainBg text-onMainBg " + `theme-${color}`}
          >
            <div className="py-12 px-2">
              <AssignForm task={task} onBack={setAssignOpen} />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AssignTaskItem;
