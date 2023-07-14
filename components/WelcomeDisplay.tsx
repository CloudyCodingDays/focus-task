import localFont from "next/font/local";
const calmFont = localFont({
  src: "./fonts/OddlyCalmingRegular-7B89V.ttf",
});

const WelcomeDisplay = () => {
  return (
    <div
      style={calmFont.style}
      className="text-center text-3xl md:text-left md:text-5xl py-6 px-8 font-light"
    >
      Hello Shadow
    </div>
  );
};

export default WelcomeDisplay;
