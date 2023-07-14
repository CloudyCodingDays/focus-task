import localFont from "next/font/local";
const calmFont = localFont({
  src: "./fonts/OddlyCalmingRegular-7B89V.ttf",
});

const WelcomeDisplay = () => {
  return (
    <div style={calmFont.style} className="text-7xl text-center">
      is this a nice font?
    </div>
  );
};

export default WelcomeDisplay;
