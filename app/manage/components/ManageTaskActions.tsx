import { Task } from "@/types/Task";
import {
  AlertCircle,
  CalendarClock,
  Dot,
  FileEdit,
  Repeat,
} from "lucide-react";
import React, { useState } from "react";
import DeleteForm from "./DeleteForm";
import EditForm from "./EditForm";
import useThemeContext from "@/hooks/useThemeContext";
import { GetThemeStyle } from "@/components/GetThemeStyle";

interface ManageTaskActionsProps {
  task: Task;
}

const ManageTaskActions: React.FC<ManageTaskActionsProps> = ({ task }) => {
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const { color, setColor, mode, setMode } = useThemeContext();
  const themeStyle = GetThemeStyle(color, mode);

  return (
    <div>
      {editOpen ? <EditForm task={task} onBack={setEditOpen} /> : <div></div>}
      {!deleteOpen && !editOpen ? (
        <div>
          <div className="w-full mx-auto">
            <div className={"text-1xl font-semibold"}>{task?.name}</div>

            <div className={"text-sm font-light pl-4 pt-2 flex items-center"}>
              <Dot />
              <div className={"pl-2 break-words"}>{task?.description}</div>
            </div>

            <div className={"pl-4 flex items-center pt-2 font-light"}>
              <AlertCircle size={20} />
              <div className={"pl-2 text-sm"}>{task?.priority} Priority</div>
            </div>

            {task?.is_recurring ? (
              <div className="pl-4 flex items-center pt-2 font-light">
                <Repeat size={20} />
                <div className={"pl-2 text-sm"}>{task?.recurring_type}</div>
              </div>
            ) : (
              <></>
            )}
            <div className="pl-4 flex items-center pt-2 font-light">
              <CalendarClock size={20} />
              <div className={"pl-2 text-sm"}>
                {task?.due_date.substring(0, 10)}
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <DeleteForm task={task} onBack={setDeleteOpen} />
            <button
              onClick={() => {
                setEditOpen(true);
              }}
              className="              
              hover:bg-inverted
              hover:text-onInvertedBg 
              bg-main
              text-onMainBg 
                rounded-lg               
                w-[7em]
                h-[3em]
                drop-shadow-md
                mx-4"
            >
              <div className="flex flex-row w-fit mx-4 px-2 py-2 items-baseline">
                <FileEdit size={16} /> Edit
              </div>
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ManageTaskActions;
