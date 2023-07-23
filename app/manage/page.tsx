import TaskListDisplay from "./components/TaskListDisplay";
import ManageTaskHeader from "./components/ManageTaskHeader";

export default function Home() {
  return (
    <div>
      <ManageTaskHeader />
      <TaskListDisplay />
    </div>
  );
}
