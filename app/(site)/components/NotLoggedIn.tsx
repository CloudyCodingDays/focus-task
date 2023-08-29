"use client";

import Login from "@/app/login/components/login";

const NotLoggedIn = () => {
  return (
    <div className="lg:w-[50em] w-full lg:mx-auto bg-gray-200 rounded-lg text-md mt-8 drop-shadow-lg py-8 text-gray-500">
      <div className="text-md text-center">Sign in to get complete access</div>
      <div className="lg:px-12">
        <Login />
      </div>
    </div>
  );
};

export default NotLoggedIn;
