import GetAllTasksforUser from "@/components/GetAllTasksforUser";
import GetTaskDetailsByDesc from "@/components/GetTaskDetailsByDesc";
import GetTaskDetailsByName from "@/components/GetTaskDetailsByName";
import { Task } from "@/types/Task";

const FilterSearchResults = async (debouncedValue: string, userId: string) => {
  if (debouncedValue === "") {
    return await GetAllTasksforUser(userId);
  } else {
    let finalFilteredResults: Task[] = [];

    const filteredByName = await GetTaskDetailsByName(debouncedValue, userId);
    const filteredbyDesc = await GetTaskDetailsByDesc(debouncedValue, userId);

    if (filteredByName.length !== 0) {
      Array.prototype.push.apply(finalFilteredResults, filteredByName);
    }

    if (filteredbyDesc.length !== 0) {
      Array.prototype.push.apply(finalFilteredResults, filteredbyDesc);
    }

    finalFilteredResults = Array.from(
      new Map(finalFilteredResults.map((v) => [v.id, v])).values()
    );

    return finalFilteredResults;
  }
};

export default FilterSearchResults;
