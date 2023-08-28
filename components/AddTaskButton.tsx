"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
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
          <button
            className="          
            hover:bg-green-200
          hover:text-green-500 
          bg-green-500 
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
