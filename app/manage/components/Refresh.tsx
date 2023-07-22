"use client";
import { useRouter } from "next/navigation";
const Refresh = () => {
  const router = useRouter();
  const HandleRefresh = () => {
    router.refresh();
  };

  return (
    <div>
      <button onClick={HandleRefresh}>Refresh</button>
    </div>
  );
};

export default Refresh;
