import { Task } from "@/types/Task";

const FilterSearchResults = (
  e: React.FormEvent<HTMLFormElement>,
  tasks: Task[]
) => {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);
  const searchTerm = formData.get("SearchTerm") as string;
  const nameFilter = formData.get("NameFilter");
  const descriptionFilter = formData.get("DescriptionFilter");

  let finalFilteredResults: Task[] = [];
  let filteredByName;
  let filteredbyDesc;

  if (nameFilter !== null) {
    filteredByName = tasks?.filter((task) => {
      return task.name.includes(searchTerm);
    });
    if (filteredByName.length !== 0) {
      Array.prototype.push.apply(finalFilteredResults, filteredByName);
    }
  }

  if (descriptionFilter !== null) {
    filteredbyDesc = tasks?.filter((task) => {
      return task.description.includes(searchTerm);
    });
    if (filteredbyDesc.length !== 0) {
      Array.prototype.push.apply(finalFilteredResults, filteredbyDesc);
    }
  }

  finalFilteredResults = Array.from(
    new Map(finalFilteredResults.map((v) => [v.id, v])).values()
  );

  return finalFilteredResults;
};

export default FilterSearchResults;
