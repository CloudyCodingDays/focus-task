import { Separator } from "@/components/ui/separator";
import { Task } from "@/types/Task";

interface ActiveTaskDetailsProps {
  task: Task;
}
const ActiveTaskDetails: React.FC<ActiveTaskDetailsProps> = ({ task }) => {
  const { id, description, name } = task;

  return (
    <div>
      <div className="pt-2 px-2 text-lg font-semibold text-gray-700">
        {name}
      </div>
      <Separator className="bg-green-500 pt-0.5" />
      <div className="py-2 px-2 text-gray-700 text-md">
        <p className="break-words">{description}</p>
      </div>
    </div>
  );
};

export default ActiveTaskDetails;
