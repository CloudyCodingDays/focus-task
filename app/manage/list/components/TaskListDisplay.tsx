"use client";
import { FormEventHandler, useEffect, useState } from "react";
import GetTasks from "./GetTasks";
import TaskItem from "./TaskItem";
import { Task } from "@/types/supabase";
import useTaskListContext from "@/hooks/useTaskListContext";
import Search from "./Search";

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
    <div className="flex flex-col w-full">
      <div>
        <Search onSearch={HandleSearch} />
      </div>
      <div className="text-sm font-light mt-8 px-4">All Tasks</div>
      <div className="px-4">
        {filteredTasks?.map((item) => (
          <div key={item.id}>
            <TaskItem task={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskListDisplay;
