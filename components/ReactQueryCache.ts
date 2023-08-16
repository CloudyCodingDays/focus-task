import { QueryClient } from "react-query";

export const ReactQueryCache = (
  queryClient: QueryClient,
  queryKeys: string[]
) => {
  if (queryClient.getQueryData(queryKeys))
    return queryClient.getQueryData(queryKeys);

  return undefined;
};
