import dynamic from "next/dynamic";

export default function Home() {
  const TimeDateDisplay = dynamic(
    () => import("./components/TimeDateDisplay"),
    {
      ssr: false,
      loading: () => (
        <div>
          <div className="w-full flex flex-col items-center">
            <div className="w-[30em] h-[9.3em] bg-gray-200 rounded-lg mt-4 mx-4 text-center drop-shadow-lg"></div>
          </div>
        </div>
      ),
    }
  );
  const InitialTaskDisplay = dynamic(
    () => import("./components/InitialTaskDisplay"),
    {
      loading: () => <p>Loading...</p>,
    }
  );

  return (
    <div>
      <TimeDateDisplay />
      <InitialTaskDisplay />
      <div>{/*<CatPanel /> turn off api call while testing */}</div>
    </div>
  );
}
