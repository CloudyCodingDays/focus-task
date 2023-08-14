import { useUserInfo } from "@/hooks/useUserInfo";
import { useQuery, useQueryClient } from "react-query";
import FilterSearchResults from "./FilterSearchResults";
import { Task } from "@/types/Task";
import TaskItemActions from "./TaskItemActions";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "./ui/separator";
import AddTaskButton from "@/components/AddTaskButton";
import TaskItemRowLayout from "@/components/TaskItemRowLayout";
import AssignForm from "@/app/assign/components/AssignForm";
import TaskFormLayout from "./TaskFormLayout";

const TaskItemDisplay = ({
  debouncedValue,
  ShowTaskActions,
}: {
  debouncedValue: string;
  ShowTaskActions: boolean;
}) => {
  const { user } = useUserInfo();
  const [assignOpen, setAssignOpen] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const query = useQuery<Task[], Error>({
    queryKey: ["Tasks", debouncedValue, user?.id],
    queryFn: async () => {
      if (user) {
        if (queryClient.getQueryData([debouncedValue, user.id])) {
          return queryClient.getQueryData([debouncedValue, user.id]) as Task[];
        }
        return await FilterSearchResults(debouncedValue, user.id);
      }
      return [] as Task[];
    },
  });

  if (query.isLoading) return "Loading...";
  if (query.error) return "Error has occured : " + query.error.message;

  return (
    <div>
      <div className="flex flex-row justify-between items-baseline text-md font-light">
        {query.data ? query.data.length : 0} results
        <AddTaskButton />
      </div>
      <Separator className="pt-0.25 bg-green-500 mb-4 mt-2" />
      <div>
        {query.data?.map((item) => (
          <div key={item.id}>
            {ShowTaskActions ? (
              <div
                className="
                bg-gray-100
                rounded-lg
                mb-8
                drop-shadow-lg"
              >
                <div>
                  <TaskItemRowLayout task={item} />
                  <TaskItemActions id={item.id} task={item} />
                </div>
              </div>
            ) : (
              <Dialog open={assignOpen} onOpenChange={setAssignOpen}>
                <DialogTrigger asChild>
                  <div className="mb-8 bg-gray-100 rounded-lg drop-shadow-md">
                    <button type="button" className="w-full">
                      <TaskItemRowLayout task={item} />
                    </button>
                  </div>
                </DialogTrigger>
                <DialogContent className="left-[50%] lg:w-[1300px]">
                  <div className="h-fit ">
                    <TaskFormLayout task={item} isEdit={false} />
                    <AssignForm id={item.id} onBack={setAssignOpen} />
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default TaskItemDisplay;
