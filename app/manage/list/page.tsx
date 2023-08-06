import TaskListDisplay from "./components/TaskListDisplay";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <TaskListDisplay />
    </div>
  );
}
