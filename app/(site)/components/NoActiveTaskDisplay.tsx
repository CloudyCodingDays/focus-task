import useTaskContext from "@/hooks/useTaskContext";
import { useUserInfo } from "@/hooks/useUserInfo";
import { CatPictureData } from "@/types/CatPictureData";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { UseQueryResult, useQuery, useQueryClient } from "react-query";

interface NoActiveTaskDisplayProps {
  catQuery: UseQueryResult<CatPictureData[], Error>;
}

const NoActiveTaskDisplay: React.FC<NoActiveTaskDisplayProps> = ({
  catQuery,
}) => {
  const [addOpen, setAddOpen] = useState<boolean>(false);
  const { user } = useUserInfo();
  const { taskCompleted, setTaskCompleted } = useTaskContext();

  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center py-4">
          <div className="bg-mainBg text-onMainBg lg:w-[50em] w-full rounded-lg pb-8 text-center drop-shadow-lg">
            <div className="my-8 text-2xl">
              What would you like to do today?
            </div>
            <Link
              href="/assign"
              className="
              hover:bg-inverted
              hover:text-onInvertedBg 
              bg-main
              text-onMainBg 
          my-4
          mt-12
          mr-8
          rounded-lg
          py-4
          px-4
        font-semibold
        self-center"
            >
              Find Task
            </Link>
          </div>
          <div className="drop-shadow-lg mt-4">
            {!taskCompleted ? (
              <Image
                src="/sarah-dorweiler-unsplash-compressed.png"
                width="800"
                height="351"
                priority
                alt="What would you like to do today?"
              />
            ) : (
              catQuery.data?.map((cat) => (
                <div key={cat.id} className="flex flex-col justify-center">
                  <div className="text-center font-bold">
                    Congrats on completing the Task! Here is a random cat!
                  </div>
                  <div className="">
                    <Image
                      src={cat.url}
                      width={cat.width}
                      height={cat.height}
                      alt="Cat Picture"
                    ></Image>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoActiveTaskDisplay;
