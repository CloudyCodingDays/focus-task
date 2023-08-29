"use client";
import { useUserInfo } from "@/hooks/useUserInfo";
import NavBarLogin from "./NavBarLogin";
import NavBarLogo from "./NavBarLogo";
import NavBarMenu from "./NavBarMenu";
import Routes from "./Routes";

interface NavBarProps {
  children: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  const { user } = useUserInfo();
  return (
    <div className="flex flex-col md:min-h-screen">
      <div className="flex flex-row w-full justify-between items-center px-2 pt-2 mx-auto bg-green-400 md:px-12">
        <NavBarMenu user={user} />
        <NavBarLogo />
        <NavBarLogin />
      </div>
      <div className="flex flex-row md:flex-auto">
        <div className="md:block hidden bg-gray-100">
          <Routes user={user} />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};
export default NavBar;
