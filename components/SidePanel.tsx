"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface SidePanelProps {
  children: React.ReactNode;
}
const SidePanel: React.FC<SidePanelProps> = ({ children }) => {
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
        active: pathname === "/manage",
        href: "/manage",
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
    <div className="flex">
      <div className="w-fit h-screen bg-green-600 ">
        <button className=" px-2 py-2 mb-2 text-md" onClick={toggleMenu}>
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
      <div className="flex flex-col flex-1 bg-green-200 text-black">
        {children}
      </div>
    </div>
  );
};

export default SidePanel;
