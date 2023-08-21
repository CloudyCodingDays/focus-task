"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddForm from "./AddForm";
import Login from "@/app/login/components/login";
import { useUserInfo } from "@/hooks/useUserInfo";

const AddTaskButton = () => {
  const [addOpen, setAddOpen] = useState<boolean>(false);
  const { user } = useUserInfo();

  return (
    <div>
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogTrigger asChild>
          <button className="hover:bg-green-300 rounded-lg border-2 border-green-400">
            <div className="flex flex-row items-center text-green-500 font-semibold px-2 py-2 text-sm">
              <Plus color="green" size={16} /> New Task
            </div>
          </button>
        </DialogTrigger>
        <DialogContent>
          <div className="py-12 px-2">
            {!user ? <Login /> : <AddForm onBack={setAddOpen} />}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTaskButton;
