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
    staleTime: 1000 * 60 * 60 * 12,
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
        rounded-lg
        py-4
        px-4
        mx-4
        my-4"
        >
          <div className="text-center font-bold">
            Cat picture to brighten your day!
          </div>
          <div
            className="
          w-[600px]
          h-[400px] 
          drop-shadow-sm"
          >
            <Image src={cat.url} fill={true} alt="Cat Picture"></Image>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatPanel;
