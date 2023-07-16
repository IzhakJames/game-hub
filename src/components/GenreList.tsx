import useGenre from "../hooks/useGenre";
import { Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data, error } = useGenre();
  return (
    <>
      {error && <Text>{error}</Text>}
      {data.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </>
  );
};

export default GenreList;
