"use client";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserSignIn, UserSignOut, isUserLoggedIn } from "./UserActions";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { Dispatch, SetStateAction } from "react";

type FormData = {
  email: string;
  password: string;
};

interface LoginProps {
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ setOpen }) => {
  const router = useRouter();
  const { session } = useSessionContext();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await UserSignIn(data.email, data.password);
    if (setOpen !== undefined) setOpen(false);
    router.refresh();
  };
  const HandleSignUp = () => {
    if (setOpen !== undefined) setOpen(false);
    router.push("/register");
  };
  const HandleLogOut = async () => {
    await UserSignOut();
    if (setOpen !== undefined) setOpen(false);
    router.push("/");
  };

  return (
    <div className="bg-gray-100 py-8 px-2">
      {!session ? (
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <div
              className="text-center mt-8           
              hover:bg-green-200
          hover:text-green-500 
          bg-green-500 
          text-green-100"
            >
              Login
            </div>
          </button>

          <div className="text-xs pt-4">
            Don&apos;t have have an account?{" "}
            <button type="button" onClick={HandleSignUp}>
              Sign up!
            </button>
          </div>
        </form>
      ) : (
        <div>
          Logged in as {session?.user?.email}
          <button type="submit" className="w-full" onClick={HandleLogOut}>
            <div
              className="text-center 
              mt-8           
              hover:bg-green-200
          hover:text-green-500 
          bg-green-500 
          text-green-100"
            >
              Logout
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
