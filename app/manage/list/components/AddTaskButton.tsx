"use client";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import AddForm from "@/app/manage/list/components/AddForm";

interface AddTaskButtonProps {
  taskCount: number;
}

const AddTaskButton: React.FC<AddTaskButtonProps> = ({ taskCount }) => {
  const [addOpen, setAddOpen] = useState<boolean>(false);
  return (
    <div>
      <div
        className="
        flex 
        flex-row 
        justify-between 
        items-end 
        px-8 
        mt-8 
        mb-1"
      >
        <div className="text-md font-light">{taskCount} results</div>
        <button>
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
        </button>
      </div>
      <div className="px-8">
        <Separator className="bg-green-300 pt-0.25" />
      </div>
    </div>
  );
};

export default AddTaskButton;
