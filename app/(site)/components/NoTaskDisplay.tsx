import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const NoTaskDisplay = () => {
  //TODO: grab whether task was completed today and detemine what to show
  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <div className="w-[30em]  bg-gray-200 rounded-lg my-4 mx-4">
          <div className="font-light py-4 px-4">
            <div>Current Task</div>
            <Separator className="bg-green-300" />
          </div>

          <div className="flex flex-col items-center py-8">
            <div className="">You do not have an active task assigned!</div>
            <button
              className="
          hover:bg-green-400 
          my-4
          mt-8
          rounded-lg
          py-4
          px-4
        bg-green-500 
        font-semibold
        text-green-200"
            >
              Assign New task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoTaskDisplay;
