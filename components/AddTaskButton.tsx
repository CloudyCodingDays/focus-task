"use client";
import Login from "@/app/login/components/login";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useUserInfo } from "@/hooks/useUserInfo";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddForm from "./AddForm";

const AddTaskButton = () => {
  const [addOpen, setAddOpen] = useState<boolean>(false);
  const { user } = useUserInfo();

  return (
    <div>
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogTrigger asChild>
          <button
            className="          
            hover:bg-green-200
          hover:text-green-500 
          bg-green-400
          text-green-100
          rounded-lg"
          >
            <div className="flex flex-row items-center font-semibold px-2 py-2 text-sm">
              <Plus size={16} /> New Task
            </div>
          </button>
        </DialogTrigger>
        <DialogContent className="bg-gray-200 rounded-lg">
          {!user ? <Login /> : <AddForm onBack={setAddOpen} />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTaskButton;
