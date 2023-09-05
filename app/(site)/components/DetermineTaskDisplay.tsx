"use client";

import GetTaskCountForUser from "@/components/task_queries/GetTaskCountForUser";
import { useQuery, useQueryClient } from "react-query";
import TaskExists from "./TaskExists";
import NoTaskExists from "./NoTaskExists";
import useTaskContext from "@/hooks/useTaskContext";
import { CatPictureData } from "@/types/CatPictureData";
import Image from "next/image";
import { ReactQueryCache } from "@/components/task_functions/ReactQueryCache";
import { useSessionContext } from "@supabase/auth-helpers-react";

const DetermineTaskDisplay = () => {
  const { session } = useSessionContext();
  const queryClient = useQueryClient();
  const { taskCompleted } = useTaskContext();

  const queryKeys = ["TaskCount", session ? session?.user?.id : ""];

  const getCatData = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    return res.json();
  };

  const catQuery = useQuery<CatPictureData[], Error>("CatPicture", getCatData, {
    refetchOnWindowFocus: false,
    enabled: false,
    staleTime: 1000 * 60 * 60 * 12,
  });

  const getTaskCount = async () => {
    if (session) {
      let taskCount = ReactQueryCache(queryClient, queryKeys) as number;
      if (taskCount === undefined)
        return (await GetTaskCountForUser(session?.user?.id)) as number;

      return taskCount;
    }
    return 0;
  };

  const { data, error, isError } = useQuery<number, Error>({
    queryKey: queryKeys,
    queryFn: getTaskCount,
  });

  if (isError) return "Error has occurred : " + error.message;

  return (
    <div>
      {session?.user && data && data > 0 ? (
        <TaskExists user={session?.user} catQuery={catQuery} />
      ) : (
        <NoTaskExists user={session?.user} />
      )}
      <div className="drop-shadow-lg w-fit mx-auto">
        {!taskCompleted ? (
          <></>
        ) : (
          catQuery.data?.map((cat) => (
            <div key={cat.id} className="flex flex-col justify-center">
              <div className="text-center font-bold">
                Congrats on completing the Task! Here is a random cat!
              </div>
              <div>
                <Image
                  src={cat.url}
                  width={cat.width}
                  height={cat.height}
                  alt="Cat Picture"
                ></Image>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DetermineTaskDisplay;
