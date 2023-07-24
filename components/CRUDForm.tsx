import supabase from "@/lib/supabaseClient";

export const FormSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  submitType: string
) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);
  const taskName = formData.get("name") as string;
  const description = formData.get("description") as string;

  if (submitType.trim() == "add") {
    if (
      taskName !== null &&
      taskName !== "" &&
      description !== null &&
      description !== ""
    ) {
      AddTask(taskName, description);
    } else throw new Error("Form is missing data");
  }
};

const AddTask = async (taskName: string, description: string) => {
  const { error: supabaseError } = await supabase.from("tasks").insert({
    name: taskName,
    description: description,
  });
  console.log("Inserted");
  if (supabaseError) {
    throw new Error(supabaseError.message);
  }
};
