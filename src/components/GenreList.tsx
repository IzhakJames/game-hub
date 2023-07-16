import useGenre, { Genre } from "../hooks/useGenre";
import { RiSignalWifiErrorFill } from "react-icons/ri";
import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";

interface Props {
  onSelectedGenre(genre: Genre): void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
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
              <Button
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectedGenre(genre)}
                variant="link">
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
