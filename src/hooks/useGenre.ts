import { useQuery } from "@tanstack/react-query";
import genre from "../data/genre";
import useData, { FetchResponse } from "./useData";
import apiClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// adding static data to reduce API call as the genre does not change
const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genre.length, results: genre },
  });

// Using React Query

// const useGenre = () => useData<Genre>("/genres");

export default useGenre;
