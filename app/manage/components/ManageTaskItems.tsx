import FilterTaskListItems from "@/app/assign/components/TaskFunctions/FilterTaskListItems";
import { GetInitialTaskListItems } from "@/app/assign/components/TaskFunctions/GetInitialTaskListItems";
import { ReactQueryCache } from "@/components/task_functions/ReactQueryCache";
import { Task } from "@/types/Task";
import { useQuery, useQueryClient } from "react-query";
import { Skeleton } from "@/components/ui_components/skeleton";
import GroupAndSortTaskList from "@/app/manage/components/GroupAndSortTaskList";
import { useUserInfo } from "@/hooks/useUserInfo";

const ManageTaskItems = ({
  debouncedValue,
  groupBy,
  sortBy,
  sortOrder,
}: {
  debouncedValue: string;
  groupBy: string;
  sortBy: string;
  sortOrder: string;
}) => {
  const { user } = useUserInfo();
  const queryClient = useQueryClient();

  const queryKeys = ["ManageTasks", debouncedValue, user ? user?.id : ""];

  const getTasks = async () => {
    let taskList: Task[] = [] as Task[];

    if (user) {
      taskList = ReactQueryCache(queryClient, queryKeys) as Task[];

      if (taskList === undefined) {
        taskList = await GetInitialTaskListItems(user?.id);

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

  if (query.isFetching)
    return (
      <div>
        <Skeleton />
      </div>
    );
  if (query.error) return "Error has occurred : " + query.error.message;

  return (
    <div className="px-2">
      <GroupAndSortTaskList
        taskList={query.data}
        groupBy={groupBy}
        sortBy={sortBy}
        sortOrder={sortOrder}
      />
    </div>
  );
};
export default ManageTaskItems;
