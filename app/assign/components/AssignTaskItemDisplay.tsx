import AddTaskButton from "@/components/AddTaskButton";
import { DateFormatDisplay } from "@/components/DateFormatDisplay";
import FilterTaskListItems from "@/components/task_functions/FilterTaskListItems";
import { GetInitialTaskListItems } from "@/components/task_functions/GetInitialTaskListItems";
import { ReactQueryCache } from "@/components/task_functions/ReactQueryCache";
import { SortInitialTaskListItems } from "@/components/task_functions/SortInitialTaskListItems";
import { Separator } from "@/components/ui/separator";
import { useUserInfo } from "@/hooks/useUserInfo";
import { Task } from "@/types/Task";
import { useQuery, useQueryClient } from "react-query";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import TaskItemDetailsLayout from "@/components/TaskItemDetailsLayout";
import AssignForm from "./AssignForm";
import AssignItemTaskDetails from "./AssignTaskItemLayout";
import AssignTaskItemLayout from "./AssignTaskItemLayout";
import AssignTaskAction from "./AssignTaskAction";

const AssignTaskItemDisplay = ({
  currentDate,
}: {
  currentDate: Date | undefined;
}) => {
  const { user } = useUserInfo();
  const queryClient = useQueryClient();
  const validatedDate = currentDate ? currentDate : new Date();
  const taskDueDateFormatted = DateFormatDisplay(validatedDate);

  const queryKeys = [
    "ActiveTask",
    user ? user.id : "",
    JSON.stringify(validatedDate),
  ];

  const getTasks = async () => {
    let taskList: Task[] = [] as Task[];

    if (user) {
      taskList = ReactQueryCache(queryClient, queryKeys) as Task[];

      if (taskList === undefined) {
        taskList = await GetInitialTaskListItems(user.id, validatedDate);

        taskList = SortInitialTaskListItems(taskList, true);

        taskList = FilterTaskListItems(taskList, "");
      }
      return taskList;
    }
    return [] as Task[];
  };

  const query = useQuery<Task[], Error>({
    queryKey: queryKeys,
    queryFn: getTasks,
  });

  if (query.isLoading) return "Loading...";
  if (query.error) return "Error has occured : " + query.error.message;

  return (
    <div>
      <div className="text-sm px-2 py-2">
        <div className="flex flex-row justify-between items-end">
          <div className="text-gray-600 font-semibold text-md">
            {query.data ? query.data.length : 0} Tasks due for{" "}
            {taskDueDateFormatted}
          </div>
          <div>
            <AddTaskButton />
          </div>
        </div>
      </div>
      <Separator className="pt-0.25 bg-green-400 lg:mb-4 mb-8" />
      <div className="px-2">
        {query.data?.map((item) => (
          <div key={item.id}>
            <AssignTaskAction task={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default AssignTaskItemDisplay;
