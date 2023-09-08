"use client";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui_components/skeleton";
import { useSessionContext } from "@supabase/auth-helpers-react";
import HomePage from "@/app/(site)/components/HomePage";

const LandingPage = () => {
  const { session } = useSessionContext();

  const TimeDateDisplay = dynamic(
    () => import("@/app/(site)/components/TimeDateDisplay"),
    {
      ssr: false,
      loading: () => (
        <div>
          <div className="w-full flex flex-col items-center">
            <div className="flex flex-col lg:w-[50em] w-full h-[9.3em] bg-green-100 rounded-lg mt-4 mx-4 text-center drop-shadow-lg">
              <Skeleton className="mx-auto w-[400px] h-[30px] mt-4" />
              <Skeleton className="mx-auto w-[350px] h-[40px] mt-12" />
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="flex flex-col items-center py-4">
              <div className="bg-mainBg text-onMainBg lg:w-[50em] w-full rounded-lg pb-8 text-center drop-shadow-lg">
                <div className="my-8 text-2xl">
                  <Skeleton className="mx-auto w-[400px] h-[20px] mt-4" />
                </div>
                <Skeleton className="mx-auto w-[200px] h-[40px] mt-4" />
              </div>
              <div className="drop-shadow-lg mt-4">
                <Skeleton className="mx-auto w-[800px] h-[350px] mt-4" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  );
  const DetermineTaskDisplay = dynamic(
    () => import("@/app/(site)/components/DetermineTaskDisplay"),
    {
      loading: () => <Skeleton className="mx-auto w-[400px] h-[30px] mt-4" />,
    },
  );

  return (
    <div>
      {session ? (
        <div>
          <TimeDateDisplay />
          <DetermineTaskDisplay />
        </div>
      ) : (
        <div>
          <HomePage />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
