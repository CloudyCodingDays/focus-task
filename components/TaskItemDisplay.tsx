import AddTaskButton from "@/components/AddTaskButton";
import TaskItemLayout from "@/components/TaskItemLayout";
import { useUserInfo } from "@/hooks/useUserInfo";
import { Task } from "@/types/Task";
import { useQuery, useQueryClient } from "react-query";
import FilterSearchResults from "./FilterSearchResults";
import TaskItemActions from "./TaskItemActions";
import { Separator } from "./ui/separator";

const TaskItemDisplay = ({
  debouncedValue,
  ShowTaskActions,
}: {
  debouncedValue: string;
  ShowTaskActions: boolean;
}) => {
  const { user } = useUserInfo();
  const queryClient = useQueryClient();

  const query = useQuery<Task[], Error>({
    queryKey: ["Tasks", debouncedValue, user?.id],
    queryFn: async () => {
      if (user) {
        if (queryClient.getQueryData(["Tasks", debouncedValue, user.id])) {
          return queryClient.getQueryData([
            "Tasks",
            debouncedValue,
            user.id,
          ]) as Task[];
        } else {
          return await FilterSearchResults(debouncedValue, user.id);
        }
      }
      return [] as Task[];
    },
  });

  if (query.isLoading) return "Loading...";
  if (query.error) return "Error has occured : " + query.error.message;

  return (
    <div className="bg-gray-100">
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
