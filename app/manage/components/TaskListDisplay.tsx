import Image from "next/image";

import pic from "@/dishes.jpg";
import MeatballMenu from "@/icons/meatball-menu.png";

const TaskListDisplay = () => {
  return (
    <div>
      <div>
        <input></input>Search
      </div>
      <div className="text-sm font-light mt-8">Current Tasks</div>
      <div className="flex">
        <div className="bg-gray-300 w-[30em] rounded-lg">
          <div className="flex ml-4 mt-4">
            <div className="mr-4">
              <Image
                src={pic}
                width="75"
                height="75"
                alt="Hamburger Menu Icon"
              ></Image>
            </div>
            <div className="flex-grow">
              <div>Washing Dishes</div>
              <div>Tags</div>
            </div>
            <div className="mr-4">
              <Image
                src={MeatballMenu}
                width="25"
                height="25"
                alt="Hamburger Menu Icon"
              ></Image>
            </div>
          </div>
          <div className="mt-4 ml-4">
            Wash all the dishes in one or both sides of sink
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskListDisplay;
