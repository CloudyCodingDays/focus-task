"use client";
import SearchForm from "@/app/manage/components/SearchForm";
import dynamic from "next/dynamic";
import { useState } from "react";

const ManageTaskList = () => {
  const [debouncedValue, setDebouncedValue] = useState("");
  const [groupBy, setGroupBy] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const ManageTaskItemDisplay = dynamic(
    () => import("./ManageTaskItemDisplay"),
    {
      loading: () => <p>Loading..</p>,
    }
  );

  return (
    <div className="lg:w-1/2 lg:mx-auto">
      <SearchForm
        setDebouncedValue={setDebouncedValue}
        setGroupBy={setGroupBy}
        setSortBy={setSortBy}
        setSortOrder={setSortOrder}
      />

      <div className="mx-auto pb-4 mt-2">
        <ManageTaskItemDisplay
          debouncedValue={debouncedValue}
          groupBy={groupBy}
          sortBy={sortBy}
          sortOrder={sortOrder}
        />
      </div>
    </div>
  );
};

export default ManageTaskList;
