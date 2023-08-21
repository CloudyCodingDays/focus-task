"use client";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserSignIn, UserSignOut, isUserLoggedIn } from "./UserActions";
import { useSessionContext } from "@supabase/auth-helpers-react";

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();
  const { session } = useSessionContext();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    //submit
    console.log(data);

    await UserSignIn(data.email, data.password);

    router.refresh();
  };
  const HandleSignUp = () => {
    router.push("/register");
  };
  const HandleLogOut = async () => {
    await UserSignOut();

    router.refresh();
  };

  return (
    <div className="bg-gray-100 ">
      {!session ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:w-2/5 w-3/5 mx-auto mt-8 px-8 py-8">
            <div className="flex flex-col pt-4">
              <label htmlFor="email" className="text-xs text-green-500">
                Email
              </label>
              <input
                className="drop-shadow-md"
                {...register("email", { required: true, minLength: 2 })}
              ></input>
            </div>

            <div className="flex flex-col pt-4">
              <label htmlFor="password" className="text-xs text-green-500">
                Password
              </label>
              <input
                {...register("password", { required: true, minLength: 2 })}
              ></input>
            </div>

            <button type="submit" className="w-full">
              <div className="text-center mt-8 bg-green-300 text-green-600">
                Login
              </div>
            </button>

            <div className="text-xs pt-4">
              Don&apos;t have have an account?{" "}
              <button type="button" onClick={HandleSignUp}>
                Sign up!{" "}
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="md:w-2/5 w-3/5 mx-auto mt-8 px-8 py-8">
          Logged in as {session?.user?.email}
          <button type="submit" className="w-full" onClick={HandleLogOut}>
            <div className="text-center mt-8 bg-green-300 text-green-600">
              Logout
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
