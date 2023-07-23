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

  return (
    <div>
      {routes.map((item) => (
        <div className="py-4 border-2" key={item.label}>
          <Link href={item.href}>{item.label}</Link>
        </div>
      ))}
    </div>
  );
};

export default Routes;
