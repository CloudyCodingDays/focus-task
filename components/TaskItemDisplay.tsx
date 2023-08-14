import { useUserInfo } from "@/hooks/useUserInfo";
import { useQuery, useQueryClient } from "react-query";
import FilterSearchResults from "./FilterSearchResults";
import { Task } from "@/types/Task";
import TaskItem from "@/components/TaskItemRowLayout";
import TaskItemActions from "./TaskItemActions";
import { useState } from "react";
import AssignItemButton from "@/app/(site)/components/AssignItemButton";
import { Separator } from "./ui/separator";
import AddTaskButton from "@/app/manage/components/AddTaskButton";

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
          <div
            key={item.id}
            className="
            bg-gray-100
            rounded-lg
            mb-8
            drop-shadow-lg"
          >
            <div>
              <TaskItem task={item} />
              {ShowTaskActions ? (
                <TaskItemActions id={item.id} task={item} />
              ) : (
                <AssignItemButton
                  task={item}
                  assignOpen={assignOpen}
                  setAssignOpen={setAssignOpen}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TaskItemDisplay;
