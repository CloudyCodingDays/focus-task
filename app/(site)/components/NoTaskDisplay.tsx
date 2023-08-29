"use client";
import { User } from "@supabase/supabase-js";
import { useState } from "react";
import NotLoggedIn from "./NotLoggedIn";
import WelcomeDisplay from "./WelcomeDisplay";

interface NoTaskDisplayProps {
  user: User | null;
}

const NoTaskDisplay: React.FC<NoTaskDisplayProps> = ({ user }) => {
  const [addOpen, setAddOpen] = useState<boolean>(false);

  return <div>{user ? <WelcomeDisplay /> : <NotLoggedIn />}</div>;
};

export default NoTaskDisplay;
