import AssignTaskQuery from "@/components/CRUD_queries/AssignTaskQuery";
import CompleteRecurringTaskQuery from "@/components/CRUD_queries/CompleteRecurringTaskQuery";
import CompleteTaskQuery from "@/components/CRUD_queries/CompleteTaskQuery";
import UnassignTaskQuery from "@/components/CRUD_queries/UnassignTaskQuery";

export const AssignFormSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  submitType: string,
  userId?: string
) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);
  const taskJSON = formData.get("task") as string;
  const taskData = JSON.parse(taskJSON);

  if (submitType.trim() === "assign" && userId) {
    return await AssignTaskQuery(taskData.id, userId);
  } else if (submitType.trim() === "unassign" && userId) {
    return await UnassignTaskQuery(taskData.id, userId);
  } else if (submitType.trim() === "complete" && userId) {
    if (taskData.is_recurring) {
      return await CompleteRecurringTaskQuery(taskData, userId);
    } else {
      return await CompleteTaskQuery(taskData, userId);
    }
  }
};
