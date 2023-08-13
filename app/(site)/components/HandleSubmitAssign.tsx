import AssignTaskQuery from "@/app/manage/list/components/task_queries/AssignTaskQuery";
import UnassignTaskQuery from "@/app/manage/list/components/task_queries/UnassignTaskQuery";

export const AssignFormSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  submitType: string,
  userId?: string
) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);
  const id = formData.get("id") as string;

  if (submitType.trim() == "assign" && userId) {
    AssignTaskQuery(id, userId);
  } else if (submitType.trim() == "unassign" && userId) {
    UnassignTaskQuery(userId);
  } else if (submitType.trim() == "complete" && userId) {
    //CompleteTaskQuery([] as Task, userId);
  }
};
