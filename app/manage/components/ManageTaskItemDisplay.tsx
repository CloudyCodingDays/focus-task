import FilterTaskListItems from "@/components/task_functions/FilterTaskListItems";
import { GetInitialTaskListItems } from "@/components/task_functions/GetInitialTaskListItems";
import { ReactQueryCache } from "@/components/task_functions/ReactQueryCache";
import { SortInitialTaskListItems } from "@/components/task_functions/SortInitialTaskListItems";
import { Separator } from "@/components/ui/separator";
import { Task } from "@/types/Task";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useQuery, useQueryClient } from "react-query";
import ManageTaskDetails from "./ManageTaskDetails";
import AddTaskButton from "@/components/AddTaskButton";
import { useEffect } from "react";

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

  useEffect(() => {
    //TODO: process Group By filter
    //TODO: process Sort By filter
    //TODO: process Sort Order
  }, []);

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

        taskList = SortInitialTaskListItems(taskList, false);

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

  if (query.isFetching) return "Loading...";
  if (query.error) return "Error has occured : " + query.error.message;

  return (
    <div>
      <div className="flex flex-row justify-between items-end text-sm px-2 py-2">
        <div>All Tasks ({query.data ? query.data.length : 0} tasks)</div>
        <AddTaskButton />
      </div>
      <Separator className="pt-0.25 bg-main mb-4" />
      <div className="px-2">
        {query.data?.map((item) => (
          <div key={item.id}>
            <div
              className="
                bg-mainBg
                text-onMainBg
                rounded-lg
                lg:mb-4
                mb-8
                drop-shadow-lg"
            >
              <div className="w-full">
                <ManageTaskDetails task={item} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ManageTaskItemDisplay;
