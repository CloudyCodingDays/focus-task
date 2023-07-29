import supabase from "@/lib/supabaseClient";

export const FormSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  submitType: string
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
