import { Separator } from "@/components/ui/separator";
import { Task } from "@/types/Task";

interface ActiveTaskDetailsProps {
  task: Task;
}
const ActiveTaskDetails: React.FC<ActiveTaskDetailsProps> = ({ task }) => {
  const { id, description, name, due_date } = task;

  return (
    <div>
      <div className="pt-4 px-4 text-md font-semibold">{name}</div>
      <Separator className="bg-main" />
      <div className="py-4 px-4 text-md">
        <p className="break-words">{description}</p>
      </div>
    </div>
  );
};

export default ActiveTaskDetails;
