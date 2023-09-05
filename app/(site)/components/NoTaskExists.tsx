"use client";
import { User } from "@supabase/supabase-js";
import NotLoggedIn from "./NotLoggedIn";
import WelcomeDisplay from "./WelcomeDisplay";

interface NoTaskDisplayProps {
  user: User | null;
}

const NoTaskExists: React.FC<NoTaskDisplayProps> = ({ user }) => {
  return <div>{user ? <WelcomeDisplay /> : <NotLoggedIn />}</div>;
};

export default NoTaskExists;
