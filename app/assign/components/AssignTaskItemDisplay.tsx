import AddTaskButton from "@/components/AddTaskButton";
import { DateFormatDisplay } from "@/components/DateFormatDisplay";
import TaskItemActions from "@/components/TaskItemActions";
import TaskItemLayout from "@/app/manage/components/ManageTaskItemLayout";
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

const AssignTaskItemDisplay = ({
  currentDate,
}: {
  currentDate: Date | undefined;
}) => {
  const { user } = useUserInfo();
  const queryClient = useQueryClient();
  const validatedDate = currentDate ? currentDate : new Date();
  const taskDueDateFormatted = DateFormatDisplay(validatedDate);
  const [assignOpen, setAssignOpen] = useState<boolean>(false);

  const queryKeys = [
    "Tasks",
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
      <Separator className="pt-0.25 bg-green-400 mb-4" />
      <div className="px-2">
        {query.data?.map((item) => (
          <div key={item.id}>
            <div
              className="
                bg-gray-100
                rounded-lg
                mb-8
                drop-shadow-lg"
            >
              <div className="w-full">
                <Dialog open={assignOpen} onOpenChange={setAssignOpen}>
                  <DialogTrigger asChild>
                    <button type="button" className="w-full">
                      <AssignTaskItemLayout task={item} />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="left-[50%] lg:w-[1300px]">
                    <div className="py-12 px-2">
                      <TaskItemDetailsLayout task={item} isEdit={false} />
                      <AssignForm task={item} onBack={setAssignOpen} />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AssignTaskItemDisplay;
