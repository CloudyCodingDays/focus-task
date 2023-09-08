import { Task } from "@/types/Task";
import { Separator } from "@/components/ui_components/separator";
import {
  DetermineGroupByType,
  TaskGroupType,
} from "@/app/manage/components/task_list_functions/DetermineGroupByType";
import ManageTaskDetails from "@/app/manage/components/ManageTaskDetails";
import { SortGroupedTasks } from "@/app/manage/components/task_list_functions/SortGroupedTasks";

const GroupAndSortTaskList = ({
  taskList,
  groupBy,
  sortBy,
  sortOrder,
}: {
  taskList: Task[] | undefined;
  groupBy: string;
  sortBy: string;
  sortOrder: string;
}) => {
  let SortedGroupTypes = [] as TaskGroupType[];

  if (taskList) {
    const GroupByType = DetermineGroupByType(groupBy, taskList);
    SortedGroupTypes = SortGroupedTasks(GroupByType, sortBy, sortOrder);
  }

  return (
    <div>
      {SortedGroupTypes.map((SortedGroupType) => (
        <div key={SortedGroupType.Header}>
          {SortedGroupType.TaskList.length > 0 ? (
            <div className={"text-onMainBg"}>
              <div className="flex flex-row justify-between items-end text-md font-semibold px-2 py-2">
                {SortedGroupType.Header} tasks(
                {SortedGroupType.TaskList.length} tasks)
              </div>
              <Separator className="pt-0.25 bg-main mb-4" />
            </div>
          ) : (
            <div></div>
          )}

          {SortedGroupType.TaskList.map((task) => (
            <div
              key={task.id}
              className="bg-mainBg text-onMainBg rounded-lg lg:mb-4 mb-8 drop-shadow-lg"
            >
              <div className="w-full">
                <ManageTaskDetails task={task} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GroupAndSortTaskList;
