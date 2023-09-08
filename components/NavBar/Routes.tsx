"use client";
import { User } from "@supabase/supabase-js";
import { Home, ListTodo, Settings, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

interface RoutesProp {
  user?: User | null;
  onRoute?: Dispatch<SetStateAction<boolean>>;
}

const Routes: React.FC<RoutesProp> = ({ user, onRoute }) => {
  const pathname = usePathname();
  const routes = [
    {
      Icon: <Home size={18} />,
      label: "Home",
      active: pathname === "/",
      href: "/",
      visible: true,
    },
    {
      Icon: <ListTodo size={18} />,
      label: "Manage Tasks",
      active: pathname === "/manage",
      href: "/manage",
      visible: !!user,
    },
    {
      Icon: <Settings size={18} />,
      label: "Settings",
      active: pathname === "/settings",
      href: "/settings",
      visible: !!user,
    },
  ];

  const NavMenuStyle =
    "hover:bg-main text-onMainBg flex flex-row items-center text-gray-700 py-2 px-4 md:w-[15em] rounded-lg";

  return (
    <div className="flex flex-col justify-start items-center w-full">
      {onRoute !== undefined ? (
        <div className="flex flex-row justify-around items-baseline w-full">
          <div className="text-2xl text-main">Focus Task</div>
          <button
            id="NavigationMenuClose"
            aria-label="Close Navigation Menu Button"
            onClick={() => {
              onRoute(false);
            }}
          >
            <X />
          </button>
        </div>
      ) : (
        <div></div>
      )}
      <div className="flex flex-col w-full mt-4">
        {routes.map((item) =>
          item.visible ? (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => {
                if (onRoute !== undefined) onRoute(false);
              }}
            >
              <div
                className={
                  item.active
                    ? NavMenuStyle + " font-semibold bg-main"
                    : NavMenuStyle
                }
              >
                <div className="mr-2">{item.Icon}</div>
                {item.label}
              </div>
            </Link>
          ) : (
            <div key={item.label}></div>
          ),
        )}
      </div>
    </div>
  );
};

export default Routes;
