"use client";

import { Button } from "@/components/ui/button";

const TaskListDisplay = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between rounded-lg border bg-card text-card-foreground shadow-sm items-center py-4 px-4">
        <div className="flex gap-2 text-2xl">
          <div>!</div>
          <div>Washing Dishes</div>
        </div>
        <div>
          <p className="font-semibold">
            Objective: Wash up dishes in atleast one side of the sink so that
            one side is clear and can be used.
          </p>
          <p className="font-light">
            Bonus: Organize dish drainer and/or wash up dishes in other side of
            sink
          </p>
        </div>
        <div>
          <Button>View Details</Button>
        </div>
      </div>

      <div className="flex flex-row justify-evenly rounded-lg border bg-card text-card-foreground shadow-sm items-center py-4">
        <div className="text-2xl">
          <div>Cooking meals</div>
        </div>
        <div>
          <p className="font-semibold">
            Objective: Wash up dishes in atleast one side of the sink so that
            one side is clear and can be used.
          </p>
          <p className="font-light">
            Bonus: Organize dish drainer and/or wash up dishes in other side of
            sink
          </p>
        </div>
        <div>
          <Button>View Details</Button>
        </div>
      </div>

      <div className="flex flex-row justify-evenly rounded-lg border bg-card text-card-foreground shadow-sm items-center py-4">
        <div className="text-2xl">
          <div>Cleaning Bathroom</div>
        </div>
        <div>
          <p className="font-semibold">
            Objective: Wash up dishes in atleast one side of the sink so that
            one side is clear and can be used.
          </p>
          <p className="font-light">
            Bonus: Organize dish drainer and/or wash up dishes in other side of
            sink
          </p>
        </div>
        <div>
          <Button>View Details</Button>
        </div>
      </div>
    </div>
  );
};

export default TaskListDisplay;
