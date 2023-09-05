"use client";

import GetTaskCountForUser from "@/components/task_queries/GetTaskCountForUser";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useQuery, useQueryClient } from "react-query";
import TaskExists from "./TaskExists";
import NoTaskExists from "./NoTaskExists";
import { Skeleton } from "@/components/ui_components/skeleton";
import useTaskContext from "@/hooks/useTaskContext";
import { CatPictureData } from "@/types/CatPictureData";
import Image from "next/image";

const DetermineTaskDisplay = () => {
  const { user } = useUserInfo();
  const queryClient = useQueryClient();
  const { taskCompleted } = useTaskContext();

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
    if (user !== null) {
      if (queryClient.getQueryData(["TaskCount", user.id])) {
        return queryClient.getQueryData(["TaskCount", user.id]) as number;
      } else {
        return (await GetTaskCountForUser(user.id)) as number;
      }
    }
    return 0;
  };

  const {
    data: taskCount,
    error: countError,
    isFetching: isCountFetching,
    isError: isCountError,
  } = useQuery<number, Error>({
    queryKey: ["TaskCount", user?.id],
    queryFn: getTaskCount,
  });

  if (isCountFetching)
    return (
      <div>
        <Skeleton />
      </div>
    );
  if (isCountError) return "Error has occured : " + countError.message;

  return (
    <div>
      {user !== null && taskCount && taskCount > 0 ? (
        <TaskExists user={user} catQuery={catQuery} />
      ) : (
        <NoTaskExists user={user} />
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
