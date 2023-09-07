"use client";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui_components/dialog";
import { Task } from "@/types/Task";
import React, { useState } from "react";
import ManageTaskItemLayout from "./ManageTaskItemLayout";
import useThemeContext from "@/hooks/useThemeContext";
import EditTaskForm from "@/components/EditTaskForm";
import {
  AlertCircle,
  CalendarClock,
  Dot,
  FileEdit,
  Repeat,
} from "lucide-react";
import DeleteTaskForm from "@/components/DeleteTaskForm";
import format from "date-fns/format";

const ManageTaskDetails = ({ task }: { task: Task }) => {
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [Open, setOpen] = useState<boolean>(false);
  const { color } = useThemeContext();

  const dueDate = new Date(task.due_date);
  dueDate.setDate(dueDate.getDate() + 1);

  return (
    <Dialog open={Open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="w-full">
          <ManageTaskItemLayout task={task} />
        </button>
      </DialogTrigger>
      <DialogContent className={"bg-mainBg text-onMainBg " + `theme-${color}`}>
        <div>
          {editOpen ? (
            <EditTaskForm task={task} onBack={setEditOpen} />
          ) : (
            <div></div>
          )}
          {!deleteOpen && !editOpen ? (
            <div>
              <div className="w-full mx-auto">
                <div className={"text-1xl font-semibold"}>{task?.name}</div>

                <div
                  className={"text-sm font-light pl-4 pt-2 flex items-center"}
                >
                  <Dot />
                  <div className={"pl-2 break-words"}>{task?.description}</div>
                </div>

                <div className={"pl-4 flex items-center pt-2 font-light"}>
                  <AlertCircle size={20} />
                  <div className={"pl-2 text-sm"}>
                    {task?.priority} Priority
                  </div>
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
                  <div className={"pl-2 text-sm"}>{format(dueDate, "PP")}</div>
                </div>
              </div>
              <div className="text-center mt-4">
                <DeleteTaskForm task={task} onBack={setDeleteOpen} />
                <button
                  onClick={() => {
                    setEditOpen(true);
                  }}
                  className="hover:bg-inverted hover:text-onInvertedBg bg-main text-onMainBg rounded-lg w-[7em] h-[3em] drop-shadow-md mx-4"
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
      </DialogContent>
    </Dialog>
  );
};

export default ManageTaskDetails;
