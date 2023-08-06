"use client";
import Login from "@/app/login/components/login";
import { useUserInfo } from "@/hooks/useUserInfo";
import Link from "next/link";

const Header = () => {
  const { user } = useUserInfo();

  return <div></div>;
};

export default Header;
