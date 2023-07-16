import { Button } from "@/components/ui/button";

const NoTaskDisplay = () => {
  //TODO: grab whether task was completed today and detemine what to show
  return (
    <div>
      <div className="text-center text-3xl">
        You do not have an active task currently. That is perfectly fine!
      </div>
      <div className="py-6">
        If you do feel like doing something though. That is awesome! Feel free
        to choose from the options below:{" "}
      </div>
      <div>
        <div className="flex flex-row justify-center">
          <div className="px-8">
            <Button>I am feeling Lucky!</Button>
          </div>
          <div className="px-8">
            <Button>Let me Pick!</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoTaskDisplay;
