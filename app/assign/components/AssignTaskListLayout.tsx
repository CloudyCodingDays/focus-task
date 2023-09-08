"use client";
import { Separator } from "@/components/ui_components/separator";
import { Skeleton } from "@/components/ui_components/skeleton";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Task } from "@/types/Task";
import { FormatDateRemoveTime } from "@/components/task_functions/FormatDateRemoveTime";
import { ReactQueryCache } from "@/components/task_functions/ReactQueryCache";
import { GetInitialTaskListItems } from "@/app/assign/components/TaskFunctions/GetInitialTaskListItems";
import { useQuery, useQueryClient } from "react-query";
import { useUserInfo } from "@/hooks/useUserInfo";
import AssignCalendar from "@/app/assign/components/AssignCalendar";

const AssignTaskListLayout = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [taskList, setTaskList] = useState<Task[]>([] as Task[]);
  const [taskExistsDays, setTaskExistsDays] = useState<Date[]>([] as Date[]);
  const { user } = useUserInfo();
  const queryClient = useQueryClient();

  const AssignTaskItems = dynamic(() => import("./AssignTaskListItems"), {
    loading: () => (
      <div>
        <div className="flex flex-row justify-between items-end">
          <div className="text-neutral font-semibold text-md">
            <Skeleton className="mx-auto w-[300px] h-[40px]" />
          </div>
          <div>
            <Skeleton className="mx-auto w-[100px] h-[40px]" />
          </div>
        </div>
        <Separator className="pt-0.25 bg-main lg:mb-4 mb-8" />
      </div>
    ),
  });

  const queryKeys = ["Tasks", user ? user.id : ""];

  const getAllTasks = async () => {
    let AllTasks: Task[] = [] as Task[];

    if (user) {
      AllTasks = ReactQueryCache(queryClient, queryKeys) as Task[];

      if (AllTasks === undefined) {
        AllTasks = await GetInitialTaskListItems(user.id);
      }

      setTaskList(AllTasks);
      let taskDates = [] as Date[];
      AllTasks.map((task) => {
        const due = FormatDateRemoveTime(task.due_date);
        due.setDate(due.getDate() + 1); //Add one day to bring it back to current day after date conversion
        taskDates.push(due);
      });
      setTaskExistsDays(taskDates);
      return AllTasks;
    }
    return [] as Task[];
  };

  const query = useQuery<Task[], Error>({
    queryKey: queryKeys,
    queryFn: getAllTasks,
  });

  if (query.isFetching)
    return (
      <div>
        <Skeleton />
      </div>
    );
  if (query.isError) return "Error has occurred : " + query.error.message;

  return (
    <div>
      <div className="py-2 flex flex-row justify-center">
        <AssignCalendar
          date={date}
          setDate={setDate}
          taskExistsDays={taskExistsDays}
        />
      </div>

      <div className="pb-4 rounded-lg md:w-1/2 mx-auto">
        <AssignTaskItems currentDate={date} taskList={taskList} />
      </div>
    </div>
  );
};

export default AssignTaskListLayout;
