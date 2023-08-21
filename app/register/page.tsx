"use client";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useRouter } from "next/navigation";
import Register from "./components/Register";

export default function Home() {
  const { user } = useUserInfo();
  const router = useRouter();

  return (
    <div>
      <Register />
    </div>
  );
}
