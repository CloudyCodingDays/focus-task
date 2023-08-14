"use client";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { user } = useUserInfo();
  const router = useRouter();

  useEffect(() => {
    if (user?.id !== undefined) router.push("/manage/list");
  }, [router, user?.id]);

  return <div></div>;
}
