"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useMemo } from "react";

interface RoutesProp {
  onRoute?: Dispatch<SetStateAction<boolean>>;
}
const Routes: React.FC<RoutesProp> = ({ onRoute }) => {
  const pathname = usePathname();
  const activePathStyle = "border-2 border-green-200 px-2 rounded-lg";
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
        label: "Manage Tasks",
        active: pathname === "/manage",
        href: "/manage",
      },
      {
        //Icon: BiSearch,
        label: "Settings",
        active: pathname === "/settings",
        href: "/settings",
      },
    ],
    [pathname]
  );

  const NavMenuStyle =
    "hover:bg-green-100 hover:text-text-gray-900 flex flex-col text-gray-700 py-4 px-4 w-[10em]";

  return (
    <div className="flex flex-col justify-start items-center">
      {onRoute !== undefined ? (
        <div className="text-2xl text-green-500">Focus Task</div>
      ) : (
        <div></div>
      )}
      <div className="flex flex-col w-full">
        {routes.map((item, index) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => {
              if (onRoute !== undefined) onRoute(false);
            }}
          >
            <div
              className={
                item.active ? NavMenuStyle + " bg-green-100" : NavMenuStyle
              }
            >
              {item.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Routes;
