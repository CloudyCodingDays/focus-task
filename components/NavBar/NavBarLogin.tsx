import Link from "next/link";
import { Button } from "@/components/ui/button";
const NavBarLogin = () => {
  return (
    <div className="py-2">
      <Button>Sign Up</Button>
      <Link href="/login">
        <Button className="mx-2">Log In</Button>
      </Link>
    </div>
  );
};

export default NavBarLogin;
