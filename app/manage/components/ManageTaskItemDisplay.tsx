import FilterTaskListItems from "@/components/task_functions/FilterTaskListItems";
import { GetInitialTaskListItems } from "@/components/task_functions/GetInitialTaskListItems";
import { ReactQueryCache } from "@/components/task_functions/ReactQueryCache";
import { Task } from "@/types/Task";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useQuery, useQueryClient } from "react-query";
import { Skeleton } from "@/components/ui/skeleton";
import ManageTaskListGrouped from "@/app/manage/components/ManageTaskListGrouped";

const ManageTaskItemDisplay = ({
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
  const { session } = useSessionContext();
  const queryClient = useQueryClient();

  const queryKeys = [
    "ManageTasks",
    debouncedValue,
    session ? session?.user?.id : "",
  ];

  const getTasks = async () => {
    let taskList: Task[] = [] as Task[];

    if (session) {
      taskList = ReactQueryCache(queryClient, queryKeys) as Task[];

      if (taskList === undefined) {
        taskList = await GetInitialTaskListItems(session?.user?.id);

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
  if (query.error) return "Error has occured : " + query.error.message;

  return (
    <div className="px-2">
      <ManageTaskListGrouped
        taskList={query.data}
        groupBy={groupBy}
        sortBy={sortBy}
        sortOrder={sortOrder}
      />
    </div>
  );
};
export default ManageTaskItemDisplay;
