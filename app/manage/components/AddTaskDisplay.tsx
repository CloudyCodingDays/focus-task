"use client";
import { useRouter } from "next/navigation";
import { FormSubmit } from "@/components/CRUDForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const AddTaskDisplay = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    FormSubmit(e, "add");
    setOpen(false);
    router.refresh();
  };

  return (
    <div>
      <div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="bg-green-400 rounded-lg my-4 mx-4 py-4 px-4">
              New Task
            </button>
          </DialogTrigger>
          <DialogContent className="h-full flex flex-col items-center">
            <form method="post" onSubmit={HandleSubmit}>
              <div>Name</div>
              <input name="name" className="border-2" required></input>
              <div>Description</div>
              <input name="description" className="border-2" required></input>
              <div>
                <button
                  type="submit"
                  className="bg-green-400 rounded-lg my-4 mx-4 py-4 px-4"
                >
                  Add New Task
                </button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AddTaskDisplay;
