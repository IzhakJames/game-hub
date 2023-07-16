import useGenre from "../hooks/useGenre";
import { HStack, List, ListItem, Text, Image } from "@chakra-ui/react";

const GenreList = () => {
  const { data, error } = useGenre();
  return (
    <>
      {error && <Text>{error}</Text>}
      <List>
        {data.map((genre) => (
          <ListItem paddingY={2} key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={genre.image_background}></Image>
              <Text>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
