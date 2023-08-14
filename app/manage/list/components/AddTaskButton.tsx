"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import AddForm from "@/app/manage/list/components/AddForm";

const AddTaskButton = () => {
  const [addOpen, setAddOpen] = useState<boolean>(false);

  return (
    <div>
      <div
        className="
        w-fit
        mx-auto
        border-2
        px-8 
        mt-8 
        mb-1"
      >
        <Dialog open={addOpen} onOpenChange={setAddOpen}>
          <DialogTrigger asChild>
            <button>Add Task</button>
          </DialogTrigger>
          <DialogContent className="h-full">
            <div className="mt-12">
              <AddForm onBack={setAddOpen} />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AddTaskButton;
