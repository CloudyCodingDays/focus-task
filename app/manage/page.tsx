import TaskListDisplay from "./components/TaskListDisplay";
import WelcomeDisplay from "./components/WelcomeDisplay";

export default function Home() {
  return (
    <div>
      <div className="px-4">
        <div>
          <WelcomeDisplay />
        </div>
        <TaskListDisplay />
      </div>
    </div>
  );
}
