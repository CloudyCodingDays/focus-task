import GetTasks from "./GetTasks";
import ViewTaskItem from "./ViewTaskItem";

const TaskListDisplay = async () => {
  const tasks = await GetTasks();

  return (
    <div>
      <div className="text-sm font-light mt-8 mr-2">All Tasks</div>
      <ViewTaskItem data={tasks} />
    </div>
  );
};

export default TaskListDisplay;
