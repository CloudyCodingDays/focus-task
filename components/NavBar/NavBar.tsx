"use client";
import NavBarMenu from "./NavBarMenu";
import NavBarLogo from "./NavBarLogo";
import NavBarLogin from "./NavBarLogin";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavBarProps {
  children: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        //Icon: HiHome,
        label: "Home",
        active: pathname === "/",
        href: "/",
      },
      {
        //Icon: BiSearch,
        label: "Manage",
        active: pathname === "/manage/list",
        href: "/manage/list",
      },
      {
        //Icon: BiSearch,
        label: "Settings",
        active: pathname === "/setting",
        href: "/setting",
      },
    ],
    [pathname]
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-row bg-white h-full">
      <div className="bg-green-600">
        <button className="text-md" onClick={toggleMenu}>
          {isOpen ? "Taking It Easy" : "TIE"}
        </button>

        <div className="px-2 text-sm">
          {routes.map((item) => (
            <div key={item.label}>
              <Link href={item.href} className={`${isOpen ? "hidden" : ""}`}>
                {item.label}
              </Link>
              <div className="py-1"></div>
              <Link href={item.href} className={`${isOpen ? "" : "hidden"}`}>
                {item.label} {" Open"}
              </Link>
              <div></div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-baseline px-4 mx-auto">
        {/* <NavBarMenu /> <NavBarLogo />*/}
        <NavBarLogin />
        <div>{children}</div>
      </div>
    </div>
  );
};
export default NavBar;
