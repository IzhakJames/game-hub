import genre from "../data/genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// adding static data to reduce API call as the genre does not change
const useGenre = () => ({ data: genre, isLoading: false, error: null });

//const useGenre = () => useData<Genre>("/genres");

export default useGenre;
