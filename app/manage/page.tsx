import TaskListDisplay from "./components/TaskListDisplay";
import ManageHeader from "./components/ManageHeader";
import Refresh from "./components/Refresh";
export default function Home() {
  return (
    <div>
      <div className="px-4">
        <Refresh />
        <div>
          <ManageHeader />
        </div>
        <TaskListDisplay />
      </div>
    </div>
  );
}
