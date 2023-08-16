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
    let TaskList: Task[] = [] as Task[];

    if (user) {
      TaskList = ReactQueryCache(queryClient, queryKeys) as Task[];

      if (TaskList === undefined) {
        TaskList = await GetInitialTaskListItems(ShowTaskActions, user.id);

        SortInitialTaskListItems(TaskList, ShowTaskActions);
        FilterTaskListItems(TaskList, debouncedValue);
      }
      return TaskList;
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
    <div className="bg-gray-100 lg:w-[1000px] lg:mx-auto">
      <div className="flex flex-row justify-between items-baseline text-md font-light px-8">
        {query.data ? query.data.length : 0} tasks
        <AddTaskButton />
      </div>
      <Separator className="pt-0.25 bg-green-500 mb-4 mt-2" />
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
