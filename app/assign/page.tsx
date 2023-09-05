import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui_components/skeleton";

export default function Home() {
  const AssignTaskListLayout = dynamic(
    () => import("./components/AssignTaskListLayout"),
    {
      loading: () => <Skeleton className="mx-auto w-[400px] h-[30px] mt-4" />,
    },
  );
  return (
    <div>
      <AssignTaskListLayout />
    </div>
  );
}
