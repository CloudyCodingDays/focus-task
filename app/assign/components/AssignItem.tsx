import Image from "next/image";

import { Task } from "@/types/supabase";
import pic from "@/dishes.jpg";
import Link from "next/link";

interface AssignItemProps {
  data: Task[] | undefined;
}

const AssignItem: React.FC<AssignItemProps> = ({ data }) => {
  return data?.map((item) => (
    <div key={item.id} className="bg-gray-300 w-[30em] rounded-lg">
      <div>
        <div className="flex flex-row ml-4 mt-4 items-start">
          <div className="mr-4">
            <Image
              src={pic}
              width="75"
              height="75"
              alt="Task item Icon"
            ></Image>
          </div>
          <div className="flex-grow">
            <div>{item.name}</div>
            <div>Tags</div>
          </div>
        </div>
        <div className="mt-4 ml-4">{item.description}</div>
        <div className="flex justify-around">
          <Link
            href={{
              pathname: "/assign/details",
              query: { data: JSON.stringify(item) },
            }}
            className="bg-green-400 rounded-lg my-4 mx-4 py-4 px-4"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  ));
};

export default AssignItem;
