import useGenre from "../hooks/useGenre";
import { RiSignalWifiErrorFill } from "react-icons/ri";
import { HStack, List, ListItem, Text, Image, Spinner } from "@chakra-ui/react";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();

  if (isLoading) return <Spinner></Spinner>;

  return (
    <>
      {error && <RiSignalWifiErrorFill />}
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
