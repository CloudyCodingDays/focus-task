"use client";
import { FormEventHandler, useEffect, useState } from "react";
import GetTasks from "./GetTasks";
import TaskItem from "./TaskItem";
import { Task } from "@/types/supabase";
import useTaskListContext from "@/hooks/useTaskListContext";
import Search from "./Search";
import Link from "next/link";

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
      <div className="border-2 mx-4 rounded-lg bg-gray-100 mt-8">
        <div className="text-right mx-4 mt-4">
          <Link
            href="/manage/add"
            className="hover:bg-green-500 hover:text-white bg-green-300 text-green-600 text-md rounded-sm px-2 py-2 "
          >
            Add Task
          </Link>
          <Search onSearch={HandleSearch} />
        </div>
        <div className="text-sm font-light mt-4 px-4">All Tasks</div>
      </div>
      <div className="md:flex md:flex-row md:flex-wrap px-4">
        {filteredTasks?.map((item) => (
          <div key={item.id} className="md:basis-1/3 lg:basis-1/4 my-2">
            <TaskItem task={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskListDisplay;
