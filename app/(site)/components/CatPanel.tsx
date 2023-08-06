"use client";
import Image from "next/image";
import { useQuery, useMutation, useQueryClient } from "react-query";

interface CatPictureData {
  id: string;
  url: string;
  width: number;
  height: number;
}

const CatPanel = () => {
  const queryClient = useQueryClient();

  const getCatData = () => {
    return fetch("https://api.thecatapi.com/v1/images/search").then((res) =>
      res.json()
    );
  };

  const query = useQuery<CatPictureData[], Error>("CatPicture", getCatData, {
    staleTime: 1000 * 60 * 5,
  });

  if (query.isLoading) return "Loading...";

  if (query.error) return "Error has occured : " + query.error.message;

  return (
    <div>
      {query.data?.map((cat) => (
        <div
          key={cat.id}
          className="
          bg-gray-100 
          w-[600px] 
          h-[425px] 
          flex
          flex-col
          items-center
          px-4 
          pt-4 
          mx-4 
          my-8"
        >
          <div className="pb-4">Cat picture to brighten your day!</div>
          <Image
            src={cat.url}
            width="600"
            height="425"
            alt="Cat Picture"
          ></Image>
        </div>
      ))}
    </div>
  );
};

export default CatPanel;
