import { useEffect, useRef, useState } from "react";

const useDebounceSearch = (value: string, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
      console.log("clear timeout");
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounceSearch;
