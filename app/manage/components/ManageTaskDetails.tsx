"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Task } from "@/types/Task";
import { useState } from "react";
import ManageTaskActions from "./ManageTaskActions";
import ManageTaskItemLayout from "./ManageTaskItemLayout";

const ManageTaskDetails = ({ task }: { task: Task }) => {
  const [Open, setOpen] = useState<boolean>(false);
  return (
    <Dialog open={Open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="w-full">
          <ManageTaskItemLayout task={task} />
        </button>
      </DialogTrigger>
      <DialogContent>
        <ManageTaskActions task={task} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default ManageTaskDetails;
