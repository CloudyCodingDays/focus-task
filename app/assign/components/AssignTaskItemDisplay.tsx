import AddTaskButton from "@/components/AddTaskButton";
import FilterTaskListItems from "@/components/task_functions/FilterTaskListItems";
import { GetInitialTaskListItems } from "@/components/task_functions/GetInitialTaskListItems";
import { ReactQueryCache } from "@/components/task_functions/ReactQueryCache";
import { SortInitialTaskListItems } from "@/components/task_functions/SortInitialTaskListItems";
import { Separator } from "@/components/ui/separator";
import { useUserInfo } from "@/hooks/useUserInfo";
import { Task } from "@/types/Task";
import { useQuery, useQueryClient } from "react-query";
import AssignTaskAction from "./AssignTaskAction";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";

const AssignTaskItemDisplay = ({
  currentDate,
}: {
  currentDate: Date | undefined;
}) => {
  const { user } = useUserInfo();
  const queryClient = useQueryClient();
  const validatedDate = currentDate ? currentDate : new Date();

  const queryKeys = [
    "ActiveTask",
    user ? user.id : "",
    validatedDate.toLocaleDateString(),
  ];

  const getTasks = async () => {
    let taskList: Task[] = [] as Task[];

    if (user) {
      taskList = ReactQueryCache(queryClient, queryKeys) as Task[];

      if (taskList === undefined) {
        taskList = await GetInitialTaskListItems(user.id, validatedDate);

        taskList = SortInitialTaskListItems(taskList);

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

  if (query.isFetching)
    return (
      <div>
        <Skeleton />
      </div>
    );
  if (query.error) return "Error has occured : " + query.error.message;

  return (
    <div>
      <div className="text-sm px-2 py-2">
        <div className="flex flex-row justify-between items-end">
          <div className="text-neutral font-semibold text-md">
            {query.data?.length} Task
            {query.data && query.data.length < 2 ? "" : "s"} due for{" "}
            {format(validatedDate, "PPP")}
          </div>
          <div>
            <AddTaskButton />
          </div>
        </div>
      </div>
      <Separator className="pt-0.25 bg-main lg:mb-4 mb-8" />
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
