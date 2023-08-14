import AssignTaskQuery from "@/components/task_queries/AssignTaskQuery";
import UnassignTaskQuery from "@/components/task_queries/UnassignTaskQuery";

export const AssignFormSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  submitType: string,
  userId?: string
) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);
  const id = formData.get("id") as string;

  if (submitType.trim() == "assign" && userId) {
    await AssignTaskQuery(id, userId);
  } else if (submitType.trim() == "unassign" && userId) {
    await UnassignTaskQuery(userId);
  } else if (submitType.trim() == "complete" && userId) {
    //CompleteTaskQuery([] as Task, userId);
  }
};
