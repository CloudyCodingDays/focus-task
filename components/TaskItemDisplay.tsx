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

const TaskItemDisplay = ({
  debouncedValue,
  ShowTaskActions,
}: {
  debouncedValue: string;
  ShowTaskActions: boolean;
}) => {
  const { user } = useUserInfo();
  const queryClient = useQueryClient();

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
        taskList = await GetInitialTaskListItems(ShowTaskActions, user.id);

        taskList = SortInitialTaskListItems(taskList, ShowTaskActions);

        taskList = FilterTaskListItems(taskList, debouncedValue);
      }
      console.log(taskList);
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
      <div className="flex flex-row justify-between items-center text-md font-light px-8">
        {query.data ? query.data.length : 0} tasks
        <AddTaskButton />
      </div>
      <Separator className="pt-0.25 bg-green-400 mb-4" />
      <div className="px-8">
        {query.data?.map((item) => (
          <div key={item.id}>
            <div
              className="
                bg-white
                rounded-lg
                mb-8
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
