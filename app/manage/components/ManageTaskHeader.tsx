"use client";
import Login from "@/app/login/components/login";
import { useUserInfo } from "@/hooks/useUserInfo";
import AddTaskDisplay from "./AddTaskDisplay";

const ManageHeader = () => {
  const { user } = useUserInfo();

  return (
    <div>
      <div>
        {user?.id}
        <Login />
      </div>
      <div>Manage Tasks</div>
      <div>
        <AddTaskDisplay />
      </div>
    </div>
  );
};

export default ManageHeader;
