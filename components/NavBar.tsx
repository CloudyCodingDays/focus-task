import Link from "next/link";
import { Button } from "./ui/button";

interface NavBarProps {
  children: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <div>Taking It Easy</div>
        <div className="py-2">
          <Button>Sign Up</Button>
          <Link href="/login">
            <Button className="mx-2">Log In</Button>
          </Link>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
export default NavBar;
