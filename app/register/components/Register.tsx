import { UserRegister } from "@/app/login/components/UserActions";
import { AddNameForUser } from "@/components/user_queries/AddNameForUser";
import { AddUserSettings } from "@/components/user_queries/AddUserSettings";
import { Task } from "@/types/Task";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

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
  const { session } = useSessionContext();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const HandleRegister: SubmitHandler<FormData> = async (data) => {
    const res = await UserRegister(data.email, data.password);

    if (res.user) {
      await AddUserSettings(defaultTask, res.user?.id);

      await AddNameForUser(data.firstName, data.lastName);
    }

    router.push("/");
  };

  return (
    <div className="bg-mainBg text-onMainBg md:w-2/5 w-3/5 mx-auto mt-8 px-8 py-8">
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
            ></input>
          </div>

          <div className="flex flex-col pt-4">
            <label htmlFor="firstName" className="text-sm">
              First Name
            </label>
            <input
              className="drop-shadow-md border-2 border-main"
              {...register("firstName", { required: true, minLength: 2 })}
            ></input>
          </div>

          <div className="flex flex-col pt-4">
            <label htmlFor="lastName" className="text-sm">
              Last Name
            </label>
            <input
              className="drop-shadow-md border-2 border-main"
              {...register("lastName", { required: true, minLength: 2 })}
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
