import { useUserInfo } from "@/hooks/useUserInfo";
import { User } from "@supabase/supabase-js";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import WelcomeDisplay from "./WelcomeDisplay";
import NotLoggedIn from "./NotLoggedIn";

interface NoTaskDisplayProps {
  user: User | null;
}

const NoTaskDisplay: React.FC<NoTaskDisplayProps> = ({ user }) => {
  const [addOpen, setAddOpen] = useState<boolean>(false);

  return <div>{user ? <WelcomeDisplay /> : <NotLoggedIn />}</div>;
};

export default NoTaskDisplay;
