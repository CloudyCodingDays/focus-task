import { useQuery, useQueryClient } from "react-query";
import ActiveTaskDisplay from "./ActiveTaskDisplay";
import { User } from "@supabase/supabase-js";
import GetActiveTaskByUserId from "@/components/task_queries/GetActiveTaskByUserId";
import { Task } from "@/types/Task";
import NoActiveTaskDisplay from "./NoActiveTaskDisplay";

const DetermineTaskPage = ({ user }: { user: User | null }) => {
  const queryClient = useQueryClient();

  const getTasks = async () => {
    if (user !== null) {
      if (queryClient.getQueryData(["ActiveTask", user.id])) {
        return queryClient.getQueryData(["ActiveTask", user.id]) as Task[];
      } else {
        return await GetActiveTaskByUserId(user.id);
      }
    }
    return [];
  };

  const { data, error, isLoading, isError } = useQuery<Task[], Error>({
    queryKey: ["ActiveTask", user?.id],
    queryFn: getTasks,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return "Error has occured : " + error.message;

  return (
    <div>
      {data?.length !== 0 ? (
        data?.map((item) => (
          <div key={item.id}>
            <ActiveTaskDisplay task={item} />
          </div>
        ))
      ) : (
        <NoActiveTaskDisplay />
      )}
    </div>
  );
};
export default DetermineTaskPage;
