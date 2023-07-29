"use client";
import Login from "@/app/login/components/login";
import { useUserInfo } from "@/hooks/useUserInfo";
import Link from "next/link";

const Header = () => {
  const { user } = useUserInfo();

  return (
    <div>
      <div>Manage Tasks</div>
      <div>
        <div className="my-8">
          <Link
            href="/manage/add"
            className="bg-green-400 rounded-lg my-4 mx-4 py-4 px-4"
          >
            New Task
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
