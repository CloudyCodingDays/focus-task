import dynamic from "next/dynamic";

export default function Home() {
  const WelcomeDisplay = dynamic(() => import("./components/WelcomeDisplay"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
  });
  const CurrentTaskDisplay = dynamic(
    () => import("./components/CurrentTaskDisplay"),
    {
      loading: () => <p>Loading...</p>,
    }
  );
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
