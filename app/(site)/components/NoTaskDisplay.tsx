import Image from "next/image";
import Link from "next/link";
import noTaskImage from "@/sarah-dorweiler-unsplash-compressed.png";

const NoTaskDisplay = () => {
  //TODO: grab whether task was completed today and detemine what to show
  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center py-8">
          <Image
            src={noTaskImage}
            width="480"
            height="351"
            priority
            alt="What would you like to do today?"
          />
          <div className="w-[30em] bg-gray-200 rounded-lg mt-4 pb-8 text-center drop-shadow-lg text-gray-500">
            <div className="my-8 text-2xl">
              What would you like to do today?
            </div>
            <Link
              href="/assign"
              className="
          hover:bg-green-500
          hover:text-green-200 
          my-4
          mt-12
          mr-8
          rounded-lg
          py-4
          px-4
        bg-green-100 
        font-semibold
        text-green-500
        self-center"
            >
              Assign New task
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoTaskDisplay;
