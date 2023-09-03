import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Task } from "@/types/Task";
import { useState } from "react";
import AssignForm from "./AssignForm";
import AssignTaskItemLayout from "./AssignTaskItemLayout";
import useThemeContext from "@/hooks/useThemeContext";
import { GetThemeStyle } from "@/components/GetThemeStyle";

const AssignTaskAction = ({ task }: { task: Task }) => {
  const [assignOpen, setAssignOpen] = useState<boolean>(false);
  const { color, setColor, mode, setMode } = useThemeContext();
  const themeStyle = GetThemeStyle(color, mode);

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
            <button type="button" className="w-full">
              <AssignTaskItemLayout task={task} />
            </button>
          </DialogTrigger>
          <DialogContent className={"bg-mainBg text-onMainBg " + themeStyle}>
            <div className="py-12 px-2">
              <AssignForm task={task} onBack={setAssignOpen} />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AssignTaskAction;
