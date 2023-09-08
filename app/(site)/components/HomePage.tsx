import activeTaskImage from "@/public/activeTask.jpg";
import calendarImage from "@/public/calendar.jpg";
import findTaskImage from "@/public/findTask.jpg";
import taskDetailImage from "@/public/taskDetail.jpg";
import Image from "next/image";
import { Sansita_Swashed } from "next/font/google";

const sansita = Sansita_Swashed({ subsets: ["latin"] });
const HomePage = () => {
  return (
    <div className={"bg-mainBg"}>
      <div className={"px-2 lg:px-12"}>
        <div className={"text-onMainBg h-1/2 text-center mb-16"}>
          <div className={"relative bg-neutralBg top-8 w-full py-8"}>
            <div className={"mb-4 text-1xl"}>
              Sometimes you just need to focus on the
            </div>
            <div className={"text-green-500 font-bold text-6xl my-2"}>
              One Task
            </div>
            <div className={"my-4 text-1xl"}>In front of you</div>

            <button
              id={"TryNow"}
              aria-label={"Try out Focus Task now Button"}
              className={
                "hover:bg-green-200 bg-green-400 text-green-800 font-bold mt-4 px-4 py-4 rounded-lg"
              }
            >
              Try it out!
            </button>
          </div>
        </div>

        <div className={"text-gray-500 h-1/2"}>
          <div className={"relative bg-neutralBg w-full py-4"}>
            <div className={" w-fit mx-auto"}>
              <div
                className={"mx-auto w-fit font-semibold text-2xl text-center"}
              >
                How it works
              </div>
            </div>
          </div>
        </div>

        <div className={"text-gray-500 h-1/2"}>
          <div className={"relative bg-neutralBg  w-full"}>
            <div className={"mt-8 py-8 pl-2 w-fit mx-auto"}>
              <div
                className={
                  "mb-4 mx-auto w-fit font-semibold text-2xl text-center"
                }
              >
                Find a Task!
              </div>
              <Image src={findTaskImage} alt={"Find Task Screenshot"} />
            </div>
          </div>
        </div>

        <div className={"text-gray-500 h-1/2"}>
          <div className={"relative bg-neutralBg  w-full"}>
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

        <div className={"text-gray-500 h-1/2"}>
          <div className={"relative bg-neutralBg  w-full"}>
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

        <div className={"text-gray-500 h-1/2"}>
          <div className={"relative bg-neutralBg  w-full"}>
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
          className={
            "hover:bg-green-200 border-2 text-green-800 font-bold px-4 py-4 mb-2 rounded-lg"
          }
        >
          Try it out!
        </button>
      </div>
    </div>
  );
};

export default HomePage;
