"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Link from "next/link";

const Routes = () => {
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

  return (
    <div>
      {routes.map((item) => (
        <div className="flex flex-col" key={item.label}>
          <Link className="border-2" href={item.href}>
            {item.label}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Routes;
