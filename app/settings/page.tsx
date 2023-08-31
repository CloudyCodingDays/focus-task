"use client";
import { useState } from "react";
import SettingContent from "./components/SettingContent";
import SettingsMenu from "./components/SettingsMenu";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useQuery, useQueryClient } from "react-query";
import { Settings } from "@/types/Setting";
import { ReactQueryCache } from "@/components/task_functions/ReactQueryCache";
import { GetUserSettings } from "@/components/task_queries/GetUserSettings";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const [category, setCategory] = useState("General");
  const { user } = useUserInfo();
  const queryClient = useQueryClient();

  const queryKeys = ["Settings", user ? user.id : ""];

  const getSettings = async () => {
    let settingList: Settings[] = [] as Settings[];

    if (user) {
      settingList = ReactQueryCache(queryClient, queryKeys) as [];

      if (settingList === undefined) {
        settingList = await GetUserSettings(user.id);
      }
      return settingList;
    }
    return [] as Settings[];
  };

  const query = useQuery<Settings[], Error>({
    queryKey: queryKeys,
    queryFn: getSettings,
  });

  if (query.isFetching)
    return (
      <div>
        <Skeleton />
      </div>
    );
  if (query.error) return "Error has occured : " + query.error.message;

  return (
    <div className="bg-mainBg text-onMainBg flex flex-col lg:w-1/2 mx-auto mt-4">
      {JSON.stringify(query.data)}
      <SettingsMenu setCategory={setCategory} />
      {query?.data?.map((setting) => (
        <div key={setting.id}>
          <SettingContent category={category} settings={setting} />
        </div>
      ))}
    </div>
  );
}
