import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui_components/skeleton";
import ManageTaskList from "@/app/manage/components/ManageTaskList";

export default function Home() {
  const ManageTaskList = dynamic(() => import("./components/ManageTaskList"), {
    loading: () => <Skeleton className="mx-auto w-[400px] h-[30px] mt-4" />,
  });
  return (
    <div>
      <ManageTaskList />
    </div>
  );
}
