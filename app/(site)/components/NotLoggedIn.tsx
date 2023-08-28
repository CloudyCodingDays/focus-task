"use client";

const NotLoggedIn = () => {
  return (
    <div className="w-[30em] bg-gray-200 rounded-lg mx-4 text-md mt-8 drop-shadow-lg py-8 text-center text-gray-500">
      <div className=" text-sm">
        Sign in using the user Icon in the top right.
      </div>
      <div className="text-sm">
        You are currently a guest and will have limited access.
      </div>
    </div>
  );
};

export default NotLoggedIn;
