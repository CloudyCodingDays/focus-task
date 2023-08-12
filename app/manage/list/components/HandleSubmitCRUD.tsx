import { Task } from "@/types/Task";
import ExtractFormData from "./ExtractFormData";
import AddTaskQuery from "./task_queries/AddTaskQuery";
import EditTaskQuery from "./task_queries/EditTaskQuery";
import DeleteTaskQuery from "./task_queries/DeleteTaskQuery";
import AssignTaskQuery from "./task_queries/AssignTaskQuery";
import UnassignTaskQuery from "./task_queries/UnassignTaskQuery";
import CompleteTaskQuery from "./task_queries/CompleteTaskQuery";

export const FormSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  submitType: string,
  userId?: string
) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const taskData: Task = ExtractFormData(formData);

  if (submitType.trim() == "add" && userId) {
    AddTaskQuery(taskData, userId);
  } else if (submitType.trim() == "edit") {
    EditTaskQuery(taskData);
  } else if (submitType.trim() == "delete") {
    DeleteTaskQuery(taskData.id);
  }

  if (submitType.trim() == "assign" && userId) {
    AssignTaskQuery(taskData.id, userId);
  } else if (submitType.trim() == "unassign" && userId) {
    UnassignTaskQuery(userId);
  } else if (submitType.trim() == "complete" && userId) {
    CompleteTaskQuery(taskData, userId);
  }
};
