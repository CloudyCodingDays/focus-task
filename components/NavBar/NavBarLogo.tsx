import localFont from "next/font/local";
const calmFont = localFont({
  src: "./fonts/NatureBeautyPersonalUse-9Y2DK.ttf",
});
const NavBarLogo = () => {
  return (
    <div>
      <div style={calmFont.style} className="text-3xl text-green-500">
        Take It Easy
      </div>
    </div>
  );
};

export default NavBarLogo;
