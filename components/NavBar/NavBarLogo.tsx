import { Sansita_Swashed } from "next/font/google";
import { Label } from "@/components/ui/label";

const sansita = Sansita_Swashed({ subsets: ["latin"] });

const NavBarLogo = () => {
  return (
    <div className={"md:mr-auto " + sansita.className}>
      <div className="text-onMainBg text-2xl pb-2">Focus Task</div>
    </div>
  );
};

export default NavBarLogo;
