import Image from "next/image";

import pic from "@/dishes.jpg";
import Link from "next/link";
import { Task } from "@/types/Task";

interface AssignItemProps {
  task: Task;
}

const AssignItem: React.FC<AssignItemProps> = ({ task }) => {
  const { id, name, description } = task;
  return (
    <div key={id}>
      <div className="flex flex-row w-11/12 rounded-lg border-2 mx-auto">
        <div className="flex flex-col items-start w-11/12  border-4">
          <div className="mr-4">
            <Image
              src={pic}
              width="75"
              height="75"
              alt="Task item Icon"
            ></Image>
          </div>
          <div className="flex-grow">
            <div>{name}</div>
            <div>Tags</div>
          </div>
          <div className="mt-4 ml-4">{description}</div>
        </div>
        <Link
          href={{
            pathname: "/assign/details",
            query: { id: id },
          }}
          className="bg-green-400 rounded-lg my-4 mx-4 py-4 px-4"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AssignItem;
