import AddTaskButton from "@/components/AddTaskButton";
import TaskItemLayout from "@/components/TaskItemLayout";
import { useUserInfo } from "@/hooks/useUserInfo";
import { Task } from "@/types/Task";
import { useQuery, useQueryClient } from "react-query";
import FilterTaskListItems from "./FilterTaskListItems";
import TaskItemActions from "./TaskItemActions";
import { Separator } from "./ui/separator";
import { ReactQueryCache } from "./ReactQueryCache";
import { GetInitialTaskListItems } from "./GetInitialTaskListItems";
import { SortInitialTaskListItems } from "./SortInitialTaskListItems";
import { useState } from "react";

const TaskItemDisplay = ({
  debouncedValue,
  ShowTaskActions,
}: {
  debouncedValue: string;
  ShowTaskActions: boolean;
}) => {
  const { user } = useUserInfo();
  const queryClient = useQueryClient();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const taskDueDate = new Date();
  const dueDateDisplay =
    taskDueDate.getDate() +
    "-" +
    monthNames[taskDueDate.getMonth()] +
    "-" +
    taskDueDate.getFullYear();

  const queryKeys = [
    "Tasks",
    debouncedValue,
    user ? user.id : "",
    JSON.stringify(ShowTaskActions),
  ];

  const getTasks = async () => {
    let taskList: Task[] = [] as Task[];

    if (user) {
      taskList = ReactQueryCache(queryClient, queryKeys) as Task[];

      if (taskList === undefined) {
        taskList = await GetInitialTaskListItems(
          ShowTaskActions,
          user.id,
          taskDueDate
        );

        taskList = SortInitialTaskListItems(taskList, ShowTaskActions);

        taskList = FilterTaskListItems(taskList, debouncedValue);
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
        {!ShowTaskActions ? (
          <div className="flex flex-row justify-between items-center text-green-400 font-semibold text-lg">
            <div>
              Today&apos;s tasks ({query.data ? query.data.length : 0} tasks)
            </div>
            {dueDateDisplay}
          </div>
        ) : (
          <div>All Tasks ({query.data ? query.data.length : 0} tasks)</div>
        )}
      </div>
      <Separator className="pt-0.25 bg-green-400 mb-4" />
      <div className="px-2">
        {query.data?.map((item) => (
          <div key={item.id}>
            <div
              className="
                bg-white
                rounded-lg
                mb-4
                drop-shadow-lg"
            >
              {ShowTaskActions ? (
                <div className="w-full">
                  <TaskItemLayout task={item} />
                  <TaskItemActions id={item.id} task={item} showTaskActions />
                </div>
              ) : (
                <div className="w-full">
                  <TaskItemActions
                    id={item.id}
                    task={item}
                    showTaskActions={false}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TaskItemDisplay;
