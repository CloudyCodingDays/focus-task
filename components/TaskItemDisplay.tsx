import { useUserInfo } from "@/hooks/useUserInfo";
import { useQuery, useQueryClient } from "react-query";
import FilterSearchResults from "./FilterSearchResults";
import { Task } from "@/types/Task";
import TaskItem from "@/components/TaskItemRowLayout";
import TaskItemActions from "./TaskItemActions";
import { useState } from "react";
import AssignItemButton from "@/app/(site)/components/AssignItemButton";

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
      <div className="text-md font-light">
        {query.data ? query.data.length : 0} results
      </div>
      <div className="px-8">
        {query.data?.map((item) => (
          <div
            key={item.id}
            className="
            bg-gray-100
            rounded-lg
            mb-4
            drop-shadow-lg"
          >
            {ShowTaskActions ? (
              <div>
                <div className="flex flex-row items-center">
                  <TaskItem task={item} />
                </div>
                <div className="pt-4">
                  <TaskItemActions id={item.id} task={item} />
                </div>
              </div>
            ) : (
              <div className="flex flex-row">
                <div className="w-11/12">
                  <TaskItem task={item} />
                </div>
                <AssignItemButton
                  task={item}
                  assignOpen={assignOpen}
                  setAssignOpen={setAssignOpen}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default TaskItemDisplay;
