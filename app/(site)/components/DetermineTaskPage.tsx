import { useQuery, useQueryClient } from "react-query";
import ActiveTaskDisplay from "./ActiveTaskDisplay";
import { User } from "@supabase/supabase-js";
import GetActiveTaskByUserId from "@/components/task_queries/GetActiveTaskByUserId";
import { Task } from "@/types/Task";
import NoActiveTaskDisplay from "./NoActiveTaskDisplay";
import NoTaskDisplay from "./NoTaskDisplay";
import CurrentTaskDisplay from "./CurrentTaskDisplay";

const DetermineTaskPage = ({
  activeTaskExists,
  user,
}: {
  activeTaskExists: boolean;
  user: User | null;
}) => {
  return (
    <div>
      {user !== null && activeTaskExists ? (
        <CurrentTaskDisplay user={user} />
      ) : (
        <NoTaskDisplay user={user} />
      )}
    </div>
  );
};
export default DetermineTaskPage;
