import { Separator } from "@/components/ui_components/separator";
import React from "react";

interface ActiveTaskDetailsProps {
  name: string;
  desc: string;
}

const ActiveTaskDetailLayout: React.FC<ActiveTaskDetailsProps> = ({
  name,
  desc,
}) => {
  return (
    <div>
      <div className="pt-4 px-4 text-md font-semibold">{name}</div>
      <Separator className="bg-main" />
      <div className="py-4 px-4 text-md">
        <p className="break-words">{desc}</p>
      </div>
    </div>
  );
};

export default ActiveTaskDetailLayout;
