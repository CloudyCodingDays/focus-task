import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <div className="bg-green-500 py-2 px-2">
      <div className="text-right px-12">
        <Button className="mr-2">Sign Up</Button>
        <Button className="ml-2">Log In</Button>
      </div>
      <div className="text-right"></div>
    </div>
  );
};
export default NavBar;
