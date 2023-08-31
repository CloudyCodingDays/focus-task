"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Task } from "@/types/Task";
import { useState } from "react";
import ManageTaskActions from "./ManageTaskActions";
import ManageTaskItemLayout from "./ManageTaskItemLayout";
import useThemeContext from "@/hooks/useThemeContext";
import { GetThemeStyle } from "@/components/GetThemeStyle";

const ManageTaskDetails = ({ task }: { task: Task }) => {
  const [Open, setOpen] = useState<boolean>(false);
  const { color, setColor, mode, setMode } = useThemeContext();
  const themeStyle = GetThemeStyle(color, mode);

  return (
    <Dialog open={Open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="w-full">
          <ManageTaskItemLayout task={task} />
        </button>
      </DialogTrigger>
      <DialogContent className={"bg-mainBg " + themeStyle}>
        <ManageTaskActions task={task} />
      </DialogContent>
    </Dialog>
  );
};

export default ManageTaskDetails;
