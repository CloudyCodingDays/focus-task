"use client";
import Login from "@/app/login/components/login";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useState } from "react";
import AddForm from "./AddForm";
import useThemeContext from "@/hooks/useThemeContext";
import { GetThemeStyle } from "./GetThemeStyle";
import { PlusSquare } from "lucide-react";

const AddTaskButton = () => {
  const [addOpen, setAddOpen] = useState<boolean>(false);
  const { user } = useUserInfo();
  const { color, mode } = useThemeContext();
  const themeStyle = GetThemeStyle(color, mode);

  return (
    <div>
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogTrigger asChild>
          <button
            className="
            rounded-lg
            hover:bg-inverted
            hover:text-onInvertedBg
            bg-main
            text-onMainBg"
          >
            <div className="flex flex-row items-center font-semibold px-2 py-2 text-sm">
              <PlusSquare size={24} />
            </div>
          </button>
        </DialogTrigger>
        <DialogContent className={"bg-mainBg text-onMainBg " + themeStyle}>
          {!user ? <Login /> : <AddForm onBack={setAddOpen} />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTaskButton;
