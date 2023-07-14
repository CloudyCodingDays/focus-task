import TimeDisplay from "@/components/TimeDisplay";
import WelcomeDisplay from "@/components/WelcomeDisplay";

import { useEffect } from "react";

export default function Home() {
  return (
    <div>
      <div>
        <WelcomeDisplay />
        <TimeDisplay />
      </div>
    </div>
  );
}
