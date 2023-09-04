"use client";
import GetActiveTaskByUserId from "@/components/task_queries/GetActiveTaskByUserId";
import { Task } from "@/types/Task";
import { User } from "@supabase/supabase-js";
import { useQuery, useQueryClient, UseQueryResult } from "react-query";
import ActiveTaskDisplay from "./ActiveTaskDisplay";
import NoActiveTaskDisplay from "./NoActiveTaskDisplay";
import { Skeleton } from "@/components/ui/skeleton";
import { CatPictureData } from "@/types/CatPictureData";

interface CurrentTaskDisplayProps {
  user: User | null;
  catQuery: UseQueryResult<CatPictureData[], Error>;
}

const CurrentTaskDisplay: React.FC<CurrentTaskDisplayProps> = ({
  user,
  catQuery,
}) => {
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

  const { data, error, isFetching, isError } = useQuery<Task[], Error>({
    queryKey: ["ActiveTask", user?.id],
    queryFn: getTasks,
  });

  if (isFetching)
    return (
      <div>
        <Skeleton />
      </div>
    );
  if (isError) return "Error has occured : " + error.message;

  return (
    <div>
      {data?.length !== 0 ? (
        data?.map((item) => (
          <div key={item.id}>
            <ActiveTaskDisplay task={item} catQuery={catQuery} />
          </div>
        ))
      ) : (
        <NoActiveTaskDisplay />
      )}
    </div>
  );
};

export default CurrentTaskDisplay;
