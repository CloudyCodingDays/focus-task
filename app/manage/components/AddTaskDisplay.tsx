"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import supabase from "@/lib/supabaseClient";

const AddTaskDisplay = () => {
  const router = useRouter();

  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const taskName = formData.get("name") as string;
    const description = formData.get("description") as string;

    if (
      taskName !== null &&
      taskName !== "" &&
      description !== null &&
      description !== ""
    ) {
      HandleAddTask(taskName, description);
    } else throw new Error("Form is missing data");
  };

  const HandleAddTask = async (taskName: string, description: string) => {
    const { error: supabaseError } = await supabase.from("tasks").insert({
      name: taskName,
      description: description,
    });

    if (supabaseError) {
      throw new Error(supabaseError.message);
    }
    router.refresh();
  };

  return (
    <div>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-green-400 rounded-lg my-4 mx-4 py-4 px-4">
              New Task
            </button>
          </DialogTrigger>
          <DialogContent className="h-full flex flex-col">
            <form method="post" onSubmit={HandleSubmit}>
              <div>Name</div>
              <input name="name" className="border-2" required></input>
              <div>Description</div>
              <input name="description" className="border-2" required></input>
              <button
                type="submit"
                className="bg-green-400 rounded-lg my-4 mx-4 py-4 px-4"
              >
                Add New Task
              </button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AddTaskDisplay;
