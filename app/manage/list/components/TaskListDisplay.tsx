"use client";
import { FormEventHandler, useEffect, useState } from "react";
import GetTasks from "./GetTasks";
import TaskItem from "../../../../components/TaskItem";

import useTaskListContext from "@/hooks/useTaskListContext";
import Search from "./Search";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Task } from "@/types/Task";
import TaskItemActions from "./TaskItemActions";

const TaskListDisplay = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [byName, setByName] = useState<Task[]>([]);
  const [byDesc, setByDesc] = useState<Task[]>([]);
  const { updateTaskList, setUpdateTaskList } = useTaskListContext();

  const HandleSearch: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const searchTerm = formData.get("SearchTerm") as string;
    const nameFilter = formData.get("NameFilter");
    const descriptionFilter = formData.get("DescriptionFilter");

    if (nameFilter !== null) {
      setByName(
        tasks?.filter((task) => {
          return task.name.includes(searchTerm);
        })
      );
    } else {
      setByName([]);
    }

    if (descriptionFilter !== null) {
      setByDesc(
        tasks?.filter((task) => {
          return task.description.includes(searchTerm);
        })
      );
    } else {
      setByDesc([]);
    }

    return tasks;
  };

  useEffect(() => {
    let finalFilteredResults: Task[] = [];
    if (byName.length !== 0) {
      Array.prototype.push.apply(finalFilteredResults, byName);
    }

    if (byDesc.length !== 0) {
      Array.prototype.push.apply(finalFilteredResults, byDesc);
    }

    finalFilteredResults = Array.from(
      new Map(finalFilteredResults.map((v) => [v.id, v])).values()
    );

    setFilteredTasks(finalFilteredResults);
  }, [byName, byDesc]);

  useEffect(() => {
    const getTasks = async () => {
      const newTasks = await GetTasks();
      setTasks(newTasks);
      setFilteredTasks(newTasks);
    };

    getTasks().catch(console.error);
    if (setUpdateTaskList !== undefined) setUpdateTaskList(false);
  }, [updateTaskList, setUpdateTaskList]);

  return (
    <div>
      <div
        className=" 
      flex 
      flex-row 
      justify-center"
      >
        <div
          className="
        border-2 
        mx-4 
        rounded-lg 
        bg-gray-100 
        mt-8 
        w-[650px] 
        drop-shadow-lg"
        >
          <div className="text-right mx-4 my-4">
            <Search onSearch={HandleSearch} />
          </div>
        </div>
      </div>
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
        <div className="text-sm font-light">Search Results</div>
        <Link
          href="/manage/add"
          className="
          hover:bg-green-500
           hover:text-white 
           bg-green-300 
           text-green-600 
           text-sm 
           rounded-sm 
           px-2 
           py-2
           drop-shadow"
        >
          Add Task
        </Link>
      </div>
      <div className="px-8">
        <Separator className="bg-green-300 pt-0.25" />
      </div>
      <div>
        <div
          className="
          grid
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          px-8"
        >
          {filteredTasks?.map((item) => (
            <div
              key={item.id}
              className="
              bg-gray-100
              rounded-lg
              my-4 
              mx-2 
              drop-shadow-md"
            >
              <div>
                <div>
                  <TaskItem task={item} />
                </div>
                <Separator className="bg-green-300 pt-0.25" />
                <div className="pt-4">
                  <TaskItemActions id={item.id} task={item} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskListDisplay;
