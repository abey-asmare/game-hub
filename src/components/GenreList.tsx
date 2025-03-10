import useGenre, { Genre } from "../hooks/useGenre";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

type Props = {
  onSelectedGenre: (genre: Genre) => void;
};
function GenreList({ onSelectedGenre }: Props) {
  const { data, isLoading, error } = useGenre();

  if (error) return;
  if (isLoading) return <Spinner></Spinner>;

  return (
    <List.Root listStyle="none">
      {data.map((genre) => {
        return (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                variant="plain"
                fontSize="lg"
                onClick={() => onSelectedGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        );
      })}
    </List.Root>
  );
}

export default GenreList;
