"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import ManageTaskItemLayout from "./ManageTaskItemLayout";
import ManageTaskActions from "./ManageTaskActions";
import { Task } from "@/types/Task";

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
