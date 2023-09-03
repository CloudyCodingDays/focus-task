import { Task } from "@/types/Task";
import { Separator } from "@/components/ui/separator";
import {
  DetermineGroupByType,
  TaskGroupType,
} from "@/app/manage/components/DetermineGroupByType";
import ManageTaskDetails from "@/app/manage/components/ManageTaskDetails";

const ManageTaskListGrouped = ({
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
  let GroupByType = [] as TaskGroupType[];
  if (taskList) GroupByType = DetermineGroupByType(groupBy, taskList);

  return (
    <div>
      {GroupByType.map((GroupType) => (
        <div key={GroupType.Header}>
          {GroupType.TaskList.length > 0 ? (
            <div>
              <div className="flex flex-row justify-between items-end text-sm px-2 py-2">
                {GroupType.Header} tasks(
                {GroupType.TaskList.length} tasks)
              </div>
              <Separator className="pt-0.25 bg-main mb-4" />
            </div>
          ) : (
            <div></div>
          )}

          {GroupType.TaskList.map((task) => (
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

export default ManageTaskListGrouped;
