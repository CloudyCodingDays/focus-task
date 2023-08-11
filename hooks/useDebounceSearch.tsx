import { useEffect, useRef, useState } from "react";

const useDebounceSearch = (value: string, delay: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(timerRef.current as NodeJS.Timeout);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounceSearch;
