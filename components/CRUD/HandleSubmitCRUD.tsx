import supabase from "@/lib/supabaseClient";

export const FormSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  submitType: string,
  userId?: string
) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);
  const taskId = formData.get("id") as string;
  const taskName = formData.get("name") as string;
  const taskDescription = formData.get("description") as string;

  if (submitType.trim() == "add") {
    AddTask(taskName, taskDescription);
  } else if (submitType.trim() == "edit") {
    EditTask(taskId, taskName, taskDescription);
  } else if (submitType.trim() == "delete") {
    DeleteTask(taskId);
  }

  if (submitType.trim() == "assign") {
    AssignTask(taskId, userId as string);
  } else if (submitType.trim() == "unassign") {
    UnassignTask(taskId, userId as string);
  } else if (submitType.trim() == "complete") {
    CompleteTask(taskId, taskName, taskDescription, userId as string);
  }
};

const AddTask = async (taskName: string, taskDescription: string) => {
  const { error: supabaseError } = await supabase.from("tasks").insert({
    name: taskName,
    description: taskDescription,
  });

  if (supabaseError) {
    throw new Error(supabaseError.message);
  }
};

const EditTask = async (
  taskId: string,
  taskName: string,
  taskDescription: string
) => {
  const { error: supabaseError } = await supabase
    .from("tasks")
    .update({ name: taskName, description: taskDescription })
    .eq("id", taskId);

  if (supabaseError) {
    throw new Error(supabaseError.message);
  }
  console.log(
    "edit sucesss - Name:" +
      taskName +
      "id: " +
      taskId +
      "Desc: " +
      taskDescription
  );
};

const DeleteTask = async (taskId: string) => {
  const { error: supabaseError } = await supabase
    .from("tasks")
    .delete()
    .eq("id", taskId);

  if (supabaseError) {
    throw new Error(supabaseError.message);
  }
};

const AssignTask = async (taskId: string, userId: string) => {
  const { error: supabaseError } = await supabase
    .from("user_current_task")
    .insert({
      user_id: userId,
      task_id: taskId,
    });

  if (supabaseError) {
    throw new Error(supabaseError.message);
  }
};

const UnassignTask = async (taskId: string, userId: string) => {
  const { error: supabaseError } = await supabase
    .from("user_current_task")
    .delete()
    .eq("user_id", userId);

  if (supabaseError) {
    throw new Error(supabaseError.message);
  }
};

const CompleteTask = async (
  taskId: string,
  taskName: string,
  taskDescription: string,
  userId: string
) => {
  const { error: currentTaskError } = await supabase
    .from("user_current_task")
    .delete()
    .eq("user_id", userId);

  if (currentTaskError) {
    throw new Error(currentTaskError.message);
  }
  const { error: completedTaskError } = await supabase
    .from("completed_tasks")
    .insert({
      task_id: taskId,
      name: taskName,
      description: taskDescription,
      completed_by_user_id: userId,
    });

  if (completedTaskError) {
    throw new Error(completedTaskError.message);
  }

  const { error: deleteTaskError } = await supabase
    .from("tasks")
    .delete()
    .eq("id", taskId);

  if (deleteTaskError) {
    throw new Error(deleteTaskError.message);
  }
};
