import WelcomeDisplay from "./components/WelcomeDisplay";
import CurrentTaskDisplay from "./components/CurrentTaskDisplay";
import CatPanel from "./components/CatPanel";

export default function Home() {
  return (
    <div>
      <div className="flex flex-row justify-evenly">
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
