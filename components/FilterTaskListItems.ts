import { Task } from "@/types/Task";

const FilterSearchResults = (taskList: Task[], debouncedValue: string) => {
  if (debouncedValue === "") return taskList;

  let finalFilteredResults: Task[] = [];

  const filteredByName = taskList.filter((task) => {
    task.name.toLocaleLowerCase().includes(debouncedValue);
  });
  const filteredbyDesc = taskList.filter((task) => {
    task.description.toLocaleLowerCase().includes(debouncedValue);
  });

  if (filteredByName.length !== 0) {
    Array.prototype.push.apply(finalFilteredResults, filteredByName);
  }

  if (filteredbyDesc.length !== 0) {
    Array.prototype.push.apply(finalFilteredResults, filteredbyDesc);
  }

  finalFilteredResults = Array.from(
    new Map(finalFilteredResults.map((v) => [v.id, v])).values()
  );

  taskList = finalFilteredResults;
};

export default FilterSearchResults;
