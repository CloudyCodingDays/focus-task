import { useUserInfo } from "@/hooks/useUserInfo";
import { useQuery, useQueryClient } from "react-query";
import FilterSearchResults from "./FilterSearchResults";
import { Task } from "@/types/Task";
import TaskItem from "@/components/TaskItem";
import TaskItemActions from "./TaskItemActions";
import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import TaskItemDetails from "./TaskItemDetails";
import AssignForm from "@/app/assign/components/AssignForm";

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

  //PERFORMANCE LOGGING
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });
  //PERFORMANCE LOGGING

  const query = useQuery<Task[], Error>({
    queryKey: ["SearchResults", debouncedValue, user?.id],
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
        {/*//PERFORMANCE LOGGING */}
        <h1>Render Count: {count.current}</h1>
        {/*PERFORMANCE LOGGING */}
        {query.data?.map((item) => (
          <div
            key={item.id}
            className="
            bg-gray-100
            rounded-lg
            drop-shadow-lg"
          >
            {!ShowTaskActions ? (
              <div className="flex flex-row">
                <div className="w-11/12">
                  <TaskItem task={item} />
                </div>

                <Dialog open={assignOpen} onOpenChange={setAssignOpen}>
                  <DialogTrigger asChild>
                    <button className="hover:bg-green-500 hover:rounded-lg px-4">
                      Select Task
                    </button>
                  </DialogTrigger>
                  <DialogContent className="left-[50%] lg:w-[1300px]">
                    <div className="mt-12">
                      <TaskItemDetails task={item} />
                      <AssignForm id={item.id} />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ) : (
              <div className="flex flex-row items-center">
                <TaskItem task={item} />
              </div>
            )}

            {ShowTaskActions ? (
              <div className="pt-4">
                <TaskItemActions id={item.id} task={item} />
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default TaskItemDisplay;
