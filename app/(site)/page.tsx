import WelcomeDisplay from "./components/WelcomeDisplay";
import TimeDisplay from "./components/TimeDisplay";
import CurrentTaskDisplay from "./components/CurrentTaskDisplay";

export default function Home() {
  return (
    <div>
      <div>
        <div>
          <WelcomeDisplay />
        </div>
        <div>
          <TimeDisplay />
        </div>
        <div>
          <CurrentTaskDisplay />
        </div>
      </div>
    </div>
  );
}
