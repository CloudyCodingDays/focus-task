const NavBar = () => {
  return (
    <div className="bg-neutral-400 py-2 grid grid-cols-2">
      <div>Nav Bar</div>
      <div className="text-right">
        <button className="mr-4">Sign Up</button>
        <button className="mr-4">Log In</button>
      </div>
      <div className="text-right"></div>
    </div>
  );
};
export default NavBar;
