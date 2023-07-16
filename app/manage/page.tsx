import WelcomeDisplay from "./components/WelcomeDisplay";

export default function Home() {
  return (
    <div>
      <div className="px-4">
        <div>
          <WelcomeDisplay />
        </div>
        <div className="flex gap-x-6 border-2 border-black">
          <div>
            <div>Washing Dishes</div>
            <div>
              Mission Objective: Get atleast one side of the sink free of
              Dishes!
            </div>
            <div>Bonus Objective: Organize dishes in dish drainer!</div>
          </div>
          <div>
            Frequency: every week
            <div>Due: 2 days before deadline</div>
          </div>
          <div>
            <div>Notes: how to do task or any specific notes</div>
          </div>
        </div>
      </div>
    </div>
  );
}
