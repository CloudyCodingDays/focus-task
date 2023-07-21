"use client";
import Image from "next/image";
import uniqid from "uniqid";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import pic from "@/dishes.jpg";
import { error } from "console";
import { Database } from "@/types/supabase";

const HandleAddTask = () => {};

const TaskListDisplay = () => {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();
  const HandleAddTask = async (taskName: string, description: string) => {
    const { error: supabaseError } = await supabase.from("tasks").insert({
      id: "6bde71ff-5616-49d2-b1a3-45bb5ee2c1c6",
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
      <div className="text-sm font-light mt-8">All Tasks</div>
      <div className="flex">
        <div className="bg-gray-300 w-[30em] rounded-lg">
          <div>
            <div className="flex flex-row ml-4 mt-4 items-start">
              <div className="mr-4">
                <Image
                  src={pic}
                  width="75"
                  height="75"
                  alt="Hamburger Menu Icon"
                ></Image>
              </div>
              <div className="flex-grow">
                <div>Washing Dishes</div>
                <div>Tags</div>
              </div>
              <div>
                <button className="border-2 border-green-100 rounded-lg mr-4 text-sm px-4 py-4">
                  View Task
                </button>
              </div>
            </div>
            <div className="mt-4 ml-4">
              Wash all the dishes in one or both sides of sink
            </div>
            <div className="flex justify-around">
              <div>
                <button className="bg-red-300 rounded-lg py-4 my-4 px-4">
                  Delete Task
                </button>
              </div>
              <div>
                <button className="bg-green-300 rounded-lg py-4 my-4 px-4">
                  Edit Task
                </button>
              </div>
            </div>
          </div>
          <div className="self-center"></div>
        </div>
      </div>
    </div>
  );
};

export default TaskListDisplay;
