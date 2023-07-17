import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <div className="bg-green-500 flex flex-row justify-between items-center">
      <div>Taking It Easy</div>
      <div className="py-2">
        <Button>Sign Up</Button>
        <Button className="mx-2">Log In</Button>
      </div>
    </div>
  );
};
export default NavBar;
