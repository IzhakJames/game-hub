import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: [
      "games",
      gameQuery.genre?.id,
      gameQuery.platform?.id,
      gameQuery.order,
      gameQuery.searchText,
    ],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.order,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
    staleTime: 60_000,
  });

// const useGames = (gameQuery: GameQuery) =>
//   useData<Game>(
//     "/games",
//     {
//       params: {
//         genres: gameQuery.genre?.id,
//         parent_platforms: gameQuery.platform?.id,
//         ordering: gameQuery.order,
//         search: gameQuery.searchText,
//       },
//     },
//     [gameQuery]
//   );

export default useGames;
