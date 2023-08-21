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
import { FormattedDateStringForDisplay } from "./DateFormatDisplay";

const TaskItemDisplay = ({
  debouncedValue,
  showTaskActions,
  currentDate,
}: {
  debouncedValue: string;
  showTaskActions: boolean;
  currentDate: Date | undefined;
}) => {
  const { user } = useUserInfo();
  const queryClient = useQueryClient();

  const validatedDate = currentDate ? currentDate : new Date();

  const taskDueDateFormatted = FormattedDateStringForDisplay(validatedDate);

  const queryKeys = [
    "Tasks",
    debouncedValue,
    user ? user.id : "",
    JSON.stringify(showTaskActions),
  ];

  const getTasks = async () => {
    let taskList: Task[] = [] as Task[];

    if (user) {
      taskList = ReactQueryCache(queryClient, queryKeys) as Task[];

      if (taskList === undefined) {
        taskList = await GetInitialTaskListItems(
          showTaskActions,
          user.id,
          validatedDate
        );

        taskList = SortInitialTaskListItems(taskList, showTaskActions);

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
      <div className="text-sm pl-2 py-2">
        {!showTaskActions ? (
          <div className="text-gray-600 font-semibold text-md">
            {query.data ? query.data.length : 0} Tasks due for{" "}
            {taskDueDateFormatted}
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
              {showTaskActions ? (
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
