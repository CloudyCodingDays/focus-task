import Link from "next/link";

const NoActiveTaskExists = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center py-4">
        <div className="bg-mainBg text-onMainBg lg:w-[50em] w-full rounded-lg pb-8 mx-4 text-center drop-shadow-lg">
          <div className="my-8 text-2xl">What would you like to do today?</div>
          <Link
            href="/assign"
            className="hover:bg-inverted hover:text-onInvertedBg bg-main text-onMainBg my-4 mt-12 mr-8 rounded-lg py-4 px-4 font-semibold self-center"
          >
            Find Task
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoActiveTaskExists;
