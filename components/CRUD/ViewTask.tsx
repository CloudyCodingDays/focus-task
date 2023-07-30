"use client";
import Link from "next/link";
import { useState } from "react";

interface ViewTaskProps {
  data: string;
}

const ViewTask: React.FC<ViewTaskProps> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const item = JSON.parse(data);
  return (
    <div>
      <div className="my-8">
        <Link href="/manage/list" className="bg-green-400 rounded-lg py-4 px-4">
          Back to Manage Tasks
        </Link>
      </div>
      <div>ID: {item.id}</div>
      <div>Name: {item.name}</div>
      <div>Description: {item.description}</div>
    </div>
  );
};

export default ViewTask;
