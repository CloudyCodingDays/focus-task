"use client";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserSignIn, UserSignOut } from "@/components/UserActions";
import { useSessionContext } from "@supabase/auth-helpers-react";

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
      {!session ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col pt-4">
            <label htmlFor="email" className="text-md text-onMainBg">
              Email
            </label>
            <input
              className="drop-shadow-lg"
              id={"email"}
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              })}
            ></input>
          </div>

          <div className="flex flex-col pt-4">
            <label htmlFor="password" className="text-md text-onMainBg">
              Password
            </label>
            <input
              id={"password"}
              className="drop-shadow-lg"
              {...register("password", { required: true, minLength: 2 })}
              type={"password"}
            ></input>
          </div>

          <div className="text-center">
            <button
              id={"loginButton"}
              aria-label="Login Submit Form Button"
              type="submit"
              className="w-1/3"
            >
              <div className="hover:bg-inverted hover:text-onInvertedBg bg-main text-onMainBg rounded-lg text-center mt-8">
                Login
              </div>
            </button>
          </div>

          <div className="text-sm pt-4 text-onMainBg">
            Don&apos;t have have an account?{" "}
            <button
              id={"Signup"}
              aria-label="Sign up form Button"
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
          <div className="text-sm">Logged in as {session?.user?.email}</div>
          <div className="text-center ">
            <button
              id={"Logout"}
              aria-label="Logout form Button"
              type="submit"
              className="w-1/3"
              onClick={HandleLogOut}
            >
              <div className="text-center mt-8 hover:bg-inverted hover:text-onInvertedBg bg-main text-onMainBg rounded-lg">
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
