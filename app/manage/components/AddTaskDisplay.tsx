"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import supabase from "@/components/supabaseClient";
import { useRouter } from "next/navigation";
import { Database } from "@/types/supabase";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AddTaskDisplay = () => {
  const router = useRouter();

  const HandleAddTask = async (taskName: string, description: string) => {
    const { error: supabaseError } = await supabase.from("tasks").insert({
      name: taskName,
      description: description,
    });

    if (supabaseError) {
      console.log(supabaseError.message);
    }
    router.refresh();
  };

  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
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
    } else {
      throw new Error("Form is missing data");
    }
  };

  return (
    <div>
      <div className="bg-gray-300 rounded-lg text-right">
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
                <input name="name" className="border-2"></input>
                <div>Description</div>
                <input name="description" className="border-2"></input>
                <button
                  type="submit"
                  className="bg-green-400 rounded-lg my-4 mx-4 py-4 px-4"
                >
                  New Task
                </button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default AddTaskDisplay;
