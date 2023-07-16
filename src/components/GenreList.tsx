import useGenre from "../hooks/useGenre";
import { Text } from "@chakra-ui/react";

const GenreList = () => {
  const { genres, error } = useGenre();
  return (
    <>
      {error && <Text>{error}</Text>}
      {genres.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </>
  );
};

export default GenreList;
