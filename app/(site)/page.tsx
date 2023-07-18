import WelcomeDisplay from "./components/WelcomeDisplay";
import TimeDisplay from "./components/TimeDisplay";
import CurrentTaskDisplay from "./components/CurrentTaskDisplay";

export default function Home() {
  return (
    <div>
      <div className="h-screen">
        <div>
          <WelcomeDisplay />
        </div>
        <div>
          <CurrentTaskDisplay />
        </div>
      </div>
      <div>Footer</div>
    </div>
  );
}
