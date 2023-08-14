import TaskList from "@/components/TaskList";

export default function Home() {
  return (
    <div>
      <TaskList ShowTaskActions={false} />
    </div>
  );
}
