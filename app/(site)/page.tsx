import WelcomeDisplay from "./components/WelcomeDisplay";
import CurrentTaskDisplay from "./components/CurrentTaskDisplay";
import CatPanel from "./components/CatPanel";

export default function Home() {
  return (
    <div>
      <div className="md:flex md:flex-row md:justify-center">
        <div>
          <WelcomeDisplay />
          <CurrentTaskDisplay />
        </div>
        <div>{/*<CatPanel /> turn off api call while testing */}</div>
      </div>
    </div>
  );
}
