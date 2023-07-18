import ActiveTaskDisplay from "./ActiveTaskDisplay";
import NoTaskDisplay from "./NoTaskDisplay";

const CurrentTaskDisplay = () => {
  // get user info to determine if there is an active task to show the correct panel
  const activeTask = false;
  return (
    <div className="">
      {activeTask ? <ActiveTaskDisplay /> : <NoTaskDisplay />}
    </div>
  );
};

export default CurrentTaskDisplay;
