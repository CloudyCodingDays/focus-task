import ActiveTaskDisplay from "./ActiveTaskDisplay";
import NoTaskDisplay from "./NoTaskDisplay";

const CurrentTaskDisplay = () => {
  // get user info to determine if there is an active task to show the correct panel
  const activeTask = true;
  return (
    <div className="px-6 py-12">
      {activeTask ? <ActiveTaskDisplay /> : <NoTaskDisplay />}
    </div>
  );
};

export default CurrentTaskDisplay;
