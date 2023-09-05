"use client";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserSignIn, UserSignOut } from "@/components/UserActions";
import { useUserInfo } from "@/hooks/useUserInfo";

type FormData = {
  email: string;
  password: string;
};

interface LoginProps {
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ setOpen }) => {
  const router = useRouter();
  const { user } = useUserInfo();
  const { handleSubmit, register } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await UserSignIn(data.email, data.password);
    HandleLoginClose();
    router.refresh();
  };
  const HandleSignUp = () => {
    if (setOpen !== undefined) setOpen(false);
    router.push("/register");
  };
  const HandleLogOut = async () => {
    await UserSignOut();
    HandleLoginClose();
    router.replace("/");
  };

  const HandleLoginClose = () => {
    if (setOpen !== undefined) setOpen(false);
  };

  return (
    <div className="py-2 px-2">
      {user?.id !== undefined ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col pt-4">
            <label htmlFor="email" className="text-md text-onMainBg">
              Email
            </label>
            <input
              className="drop-shadow-lg"
              {...register("email", { required: true, minLength: 2 })}
            ></input>
          </div>

          <div className="flex flex-col pt-4">
            <label htmlFor="password" className="text-md text-onMainBg">
              Password
            </label>
            <input
              className="drop-shadow-lg"
              {...register("password", { required: true, minLength: 2 })}
              type={"password"}
            ></input>
          </div>

          <div className="text-center">
            <button type="submit" className="w-1/3">
              <div
                className="
                hover:bg-inverted
                hover:text-onInvertedBg 
                bg-main
                text-onMainBg 
                rounded-lg
                text-center 
                mt-8"
              >
                Login
              </div>
            </button>
          </div>

          <div className="text-sm pt-4 text-onMainBg">
            Don&apos;t have have an account?{" "}
            <button
              type="button"
              onClick={HandleSignUp}
              className="font-semibold"
            >
              Sign up!
            </button>
          </div>
        </form>
      ) : (
        <div>
          <div className="text-sm">Logged in as {user?.email}</div>
          <div className="text-center ">
            <button type="submit" className="w-1/3" onClick={HandleLogOut}>
              <div
                className="text-center 
              mt-8           
              hover:bg-green-200
          hover:text-green-500 
          bg-green-400
          text-green-100"
              >
                Logout
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
