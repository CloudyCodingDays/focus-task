import { UserRegister } from "@/components/UserActions";
import { AddDefaultUserSettings } from "@/components/user_queries/AddDefaultUserSettings";
import { Task } from "@/types/Task";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

const defaultTask = {
  id: "",
  name: "",
  description: "",
  is_recurring: "",
  recurring_type: "",
  priority: "",
  due_date: new Date().toLocaleDateString(),
  created_at: new Date().toLocaleDateString(),
  created_by: "",
  updated_at: new Date().toLocaleDateString(),
  user_id: "",
} as Task;

const Register = () => {
  const router = useRouter();
  const { handleSubmit, register } = useForm<FormData>();
  const [showMessage, setShowMessage] = useState(false);

  const HandleRegister: SubmitHandler<FormData> = async (data) => {
    const res = await UserRegister(data.email, data.password);

    if (res.user) {
      await AddDefaultUserSettings(defaultTask, res.user?.id);
    }

    setShowMessage(true);
    router.refresh();
  };

  return (
    <div className="bg-mainBg text-onMainBg md:w-2/5 w-3/5 mx-auto mt-8 px-8 py-8">
      {showMessage ? (
        <div>Please check your email for a confirmation mail.</div>
      ) : (
        <div></div>
      )}
      <div className="font-semibold">Sign up for a new account</div>
      <form onSubmit={handleSubmit(HandleRegister)}>
        <div className="">
          <div className="flex flex-col pt-4">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              className="drop-shadow-md border-2 border-main"
              {...register("email", { required: true, minLength: 2 })}
            ></input>
          </div>

          <div className="flex flex-col pt-4">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <input
              className="drop-shadow-md border-2 border-main"
              {...register("password", { required: true, minLength: 2 })}
              type={"password"}
            ></input>
          </div>

          <div className="text-center">
            <button type="submit" className="w-1/3 ">
              <div
                className="              
                hover:bg-inverted
                hover:text-onInvertedBg 
                bg-main
                text-onMainBg  
                rounded-lg
                mt-8  
                drop-shadow-lg"
              >
                Register
              </div>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
