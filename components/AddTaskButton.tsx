"use client";
import Login from "@/app/login/components/login";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui_components/dialog";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import useThemeContext from "@/hooks/useThemeContext";
import { Plus } from "lucide-react";
import { Settings } from "@/types/Setting";
import { ReactQueryCache } from "@/components/task_functions/ReactQueryCache";
import { GetSettings } from "@/components/user_queries/GetSettings";
import { useQuery, useQueryClient } from "react-query";
import { Skeleton } from "@/components/ui_components/skeleton";

const AddTaskButton = () => {
  const [addOpen, setAddOpen] = useState<boolean>(false);
  const { user } = useUserInfo();
  const { color } = useThemeContext();
  const queryClient = useQueryClient();
  const queryKeys = ["Settings", user ? user.id : ""];
  const getNewTaskSettings = async () => {
    let NewTaskSettings: Settings[] = [] as Settings[];

    if (user) {
      NewTaskSettings = ReactQueryCache(queryClient, queryKeys) as [];
      if (NewTaskSettings === undefined)
        NewTaskSettings = await GetSettings(user.id);

      return NewTaskSettings;
    }
    return [] as Settings[];
  };

  const query = useQuery<Settings[], Error>({
    queryKey: queryKeys,
    queryFn: getNewTaskSettings,
  });

  if (query.isFetching)
    return (
      <div>
        <Skeleton />
      </div>
    );
  if (query.error) return "Error has occurred : " + query.error.message;

  return (
    <div>
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogTrigger asChild>
          <button className="rounded-lg hover:bg-inverted hover:text-onInvertedBg bg-main text-onMainBg">
            <div className="flex flex-row items-center font-semibold px-2 py-2 text-xs">
              <Plus size={14} /> New Task
            </div>
          </button>
        </DialogTrigger>
        <DialogContent
          className={"bg-mainBg text-onMainBg " + `theme-${color}`}
        >
          {query?.data?.map((setting) => (
            <div key={setting.id}>
              {!user ? (
                <Login />
              ) : (
                <AddTaskForm onBack={setAddOpen} setting={setting} />
              )}
            </div>
          ))}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTaskButton;
