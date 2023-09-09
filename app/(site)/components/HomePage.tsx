import activeTaskImage from "@/public/activeTask.jpg";
import calendarImage from "@/public/calendar.jpg";
import findTaskImage from "@/public/findTask.jpg";
import taskDetailImage from "@/public/taskDetail.jpg";
import Image from "next/image";
import { Sansita_Swashed } from "next/font/google";
import { useRouter } from "next/navigation";
import { ArrowBigRight } from "lucide-react";

const sansita = Sansita_Swashed({ subsets: ["latin"] });

const HomePage = () => {
  const router = useRouter();

  const HandleTry = () => {
    router.push("/register");
  };
  return (
    <div>
      <div className={"px-2 lg:px-12"}>
        <div className={"relative text-onMainBg h-[83vh] top-24 mx-auto w-fit"}>
          <div className={" bg-neutralBg w-full py-8 text-center"}>
            <div className={"mb-4 text-1xl"}>
              Sometimes you just need to focus on the
            </div>
            <div className={"text-green-500 font-bold text-4xl my-2"}>
              One Task
            </div>
            <div className={"my-4 text-1xl"}>In front of you</div>

            <button
              id={"TryNow"}
              aria-label={"Try out Focus Task now Button"}
              onClick={HandleTry}
              className={
                "bg-green-400 flex flex-row items-center text-white text-2xl mt-[10vh] px-12 py-4 rounded-lg"
              }
            >
              Get Started now
              <div className={"pl-2"}>
                <ArrowBigRight />
              </div>
            </button>
          </div>
        </div>

        <div className={"text-gray-500 font-bold text-2xl my-2 text-center"}>
          How it works
        </div>

        <div className={"text-gray-500 h-[70vh]"}>
          <div className={"relative bg-gray-100 w-full"}>
            <div className={"mt-8 py-8 pl-2 w-fit mx-auto"}>
              <div
                className={
                  "mb-4 mx-auto w-fit font-semibold text-2xl text-center"
                }
              >
                Find Task to do
              </div>
              <Image src={findTaskImage} alt={"Find Task Screenshot"} />
            </div>
          </div>
        </div>

        <div className={"text-gray-500 h-[85vh]"}>
          <div className={"relative bg-gray-100 w-full"}>
            <div className={"mt-8 py-8 pl-2 w-fit mx-auto"}>
              <div
                className={
                  "mb-4 mx-auto w-fit font-semibold text-2xl text-center"
                }
              >
                Add or pick existing task
              </div>
              <Image src={calendarImage} alt={"Task Calendar Screenshot"} />
            </div>
          </div>
        </div>

        <div className={"text-gray-500 h-[85vh]"}>
          <div className={"relative bg-gray-100 w-full"}>
            <div className={"mt-8 py-8 pl-2 w-fit mx-auto"}>
              <div
                className={
                  "mb-4 mx-auto w-fit font-semibold text-2xl text-center"
                }
              >
                Assign Task to yourself
              </div>
              <Image src={taskDetailImage} alt={"Task Details Screenshot"} />
            </div>
          </div>
        </div>

        <div className={"text-gray-500 h-[80vh]"}>
          <div className={"relative bg-gray-100 w-full"}>
            <div className={"mt-8 py-8 pl-2 w-fit mx-auto"}>
              <div
                className={
                  "mb-4 mx-auto w-fit font-semibold text-2xl text-center"
                }
              >
                Un-assign or complete as when you are done
              </div>
              <Image src={activeTaskImage} alt={"Active Task Screenshot"} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-main flex w-full justify-between items-center px-2 pt-2 mx-auto md:px-12">
        <div className={"md:mr-auto " + sansita.className}>
          <div className="text-onMainBg text-2xl pb-2">Focus Task</div>
        </div>
        <button
          id={"TryNow"}
          aria-label={"Try out Focus Task now Button"}
          onClick={HandleTry}
          className={
            "hover:bg-green-200 border-2 text-green-800 font-bold px-4 py-4 mb-2 rounded-lg"
          }
        >
          Get Started now
        </button>
      </div>
    </div>
  );
};

export default HomePage;
