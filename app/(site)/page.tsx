import WelcomeDisplay from "./components/WelcomeDisplay";
import CurrentTaskDisplay from "./components/CurrentTaskDisplay";
import CatPanel from "./components/CatPanel";

export default function Home() {
  return (
    <div>
      <div className="px-24">Hi Peter!</div>
      <div className="md:flex md:flex-row md:justify-center">
        <div>
          <WelcomeDisplay />
          <CurrentTaskDisplay />
        </div>
        <div>
          <CatPanel />
        </div>
      </div>
    </div>
  );
}
