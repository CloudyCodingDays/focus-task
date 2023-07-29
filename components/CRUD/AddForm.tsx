"use client";
import { useRouter } from "next/navigation";
import { FormSubmit } from "@/components/CRUD/HandleSubmitCRUD";
import { useState } from "react";
import Link from "next/link";

const AddForm = () => {
  const router = useRouter();

  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    FormSubmit(e, "add");
    router.push("/manage/list");
  };
  return (
    <div>
      <div className="my-8">
        <Link href="/manage/list" className="bg-green-400 rounded-lg py-4 px-4">
          Back to Manage Tasks
        </Link>
      </div>

      <form method="post" onSubmit={HandleSubmit}>
        <div>Name</div>
        <input name="name" className="border-2" required></input>
        <div>Description</div>
        <input name="description" className="border-2" required></input>
        <div>
          <button
            type="submit"
            className="bg-green-400 rounded-lg my-4 mx-4 py-4 px-4"
          >
            Add New Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
