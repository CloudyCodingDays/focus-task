"use client";
import Login from "@/app/login/components/login";
import { useUserInfo } from "@/hooks/useUserInfo";
import Link from "next/link";

const Header = () => {
  const { user } = useUserInfo();

  return (
    <div>
      <div>Manage Tasks</div>
      <div className="absolute bottom-8 right-8">
        <Link
          href="/manage/add"
          className="bg-green-400 text-3xl rounded-lg pb-2 px-4"
        >
          +
        </Link>
      </div>
    </div>
  );
};

export default Header;
