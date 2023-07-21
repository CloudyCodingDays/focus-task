import Image from "next/image";
import uniqid from "uniqid";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { FormEventHandler, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import pic from "@/dishes.jpg";
import { error } from "console";
import { Database, Task } from "@/types/supabase";
import AddTaskDisplay from "./AddTaskDisplay";
import GetTasks from "./GetTasks";
import TaskItem from "./TaskItem";

const TaskListDisplay = async () => {
  const tasks = await GetTasks();

  return (
    <div>
      <AddTaskDisplay />
      <div className="text-sm font-light mt-8">All Tasks</div>
      <TaskItem data={tasks} />
      {/*{tasks.map((task: Task) => {
        <div>task.name</div>;
        {
          <TaskItem key={task.id} data={task} />; 
        }
      })}*/}
    </div>
  );
};

export default TaskListDisplay;
