import FilterTaskListItems from "@/components/task_functions/FilterTaskListItems";
import { GetInitialTaskListItems } from "@/components/task_functions/GetInitialTaskListItems";
import { ReactQueryCache } from "@/components/task_functions/ReactQueryCache";
import { SortInitialTaskListItems } from "@/components/task_functions/SortInitialTaskListItems";
import { Separator } from "@/components/ui/separator";
import { Task } from "@/types/Task";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useQuery, useQueryClient } from "react-query";
import ManageTaskItemLayout from "./ManageTaskItemLayout";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { FileEdit } from "lucide-react";
import EditForm from "./EditForm";
import ManageTaskActions from "./ManageTaskActions";
import TaskItemDetailsLayout from "@/components/TaskItemDetailsLayout";
import ManageTaskDetails from "./ManageTaskDetails";

const ManageTaskItemDisplay = ({
  debouncedValue,
}: {
  debouncedValue: string;
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

  if (query.isLoading) return "Loading...";
  if (query.error) return "Error has occured : " + query.error.message;

  return (
    <div>
      <div className="text-sm px-2 py-2">
        <div>All Tasks ({query.data ? query.data.length : 0} tasks)</div>
      </div>
      <Separator className="pt-0.25 bg-green-400 mb-4" />
      <div className="px-2">
        {query.data?.map((item) => (
          <div key={item.id}>
            <div
              className="
                bg-gray-100
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
