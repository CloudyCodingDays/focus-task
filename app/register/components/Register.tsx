import { UserRegister } from "@/app/login/components/UserActions";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

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
    await UserRegister(
      data.email,
      data.password,
      data.firstName,
      data.lastName
    );

    router.push("/");
  };

  return (
    <div className="bg-gray-100 md:w-2/5 w-3/5 mx-auto mt-8 px-8 py-8">
      <div className="font-semibold text-gray-500">
        Sign up for a new account
      </div>
      <form onSubmit={handleSubmit(HandleRegister)}>
        <div className="">
          <div className="flex flex-col pt-4">
            <label htmlFor="email" className="text-sm text-green-600">
              Email
            </label>
            <input
              className="drop-shadow-md border-2 border-green-200"
              {...register("email", { required: true, minLength: 2 })}
            ></input>
          </div>

          <div className="flex flex-col pt-4">
            <label htmlFor="password" className="text-sm text-green-600">
              Password
            </label>
            <input
              className="drop-shadow-md border-2 border-green-200"
              {...register("password", { required: true, minLength: 2 })}
            ></input>
          </div>

          <div className="flex flex-col pt-4">
            <label htmlFor="firstName" className="text-sm text-green-600">
              First Name
            </label>
            <input
              className="drop-shadow-md border-2 border-green-200"
              {...register("firstName", { required: true, minLength: 2 })}
            ></input>
          </div>

          <div className="flex flex-col pt-4">
            <label htmlFor="lastName" className="text-sm text-green-600">
              Last Name
            </label>
            <input
              className="drop-shadow-md border-2 border-green-200"
              {...register("lastName", { required: true, minLength: 2 })}
            ></input>
          </div>

          <button type="submit" className="w-full">
            <div className="hover:bg-green-400 text-center mt-8 bg-green-200 text-green-600 drop-shadow-lg">
              Register
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
