"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddForm from "./AddForm";

const AddTaskButton = () => {
  const [addOpen, setAddOpen] = useState<boolean>(false);

  return (
    <div>
      <div
        className="
        w-fit
        mx-auto
        mt-2"
      >
        <Dialog open={addOpen} onOpenChange={setAddOpen}>
          <DialogTrigger asChild>
            <button className="hover:bg-green-300">
              <div className="flex flex-row items-center text-green-700 font-semibold border-2 border-green-300 px-2">
                <Plus color="green" size={16} /> New Task
              </div>
            </button>
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
