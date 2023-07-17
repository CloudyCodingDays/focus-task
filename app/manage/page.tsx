import TaskListDisplay from "./components/TaskListDisplay";
import ManageHeader from "./components/ManageHeader";

export default function Home() {
  return (
    <div>
      <div className="px-4">
        <div>
          <ManageHeader />
        </div>
        <TaskListDisplay />
      </div>
    </div>
  );
}
