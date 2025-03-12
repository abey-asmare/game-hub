import useGenre, { Genre } from "../hooks/useGenre";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

type Props = {
  selectedGenre: Genre | null;
  onSelectedGenre: (genre: Genre) => void;
};
function GenreList({ selectedGenre, onSelectedGenre }: Props) {
  const { data, isLoading, error } = useGenre();

  if (error) return;
  if (isLoading) return <Spinner></Spinner>;

  return (
    <List.Root listStyle="none">
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      {data.map((genre) => {
        return (
          <>
            <ListItem key={genre.id} paddingY={"5px"}>
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                  src={getCroppedImageUrl(genre.image_background)}
                ></Image>
                <Button
                  variant="plain"
                  fontSize="lg"
                  paddingRight="auto"
                  textWrap="normal"
                  textAlign="left"
                  fontWeight={
                    selectedGenre?.id === genre.id ? "bold" : "normal"
                  }
                  onClick={() => onSelectedGenre(genre)}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          </>
        );
      })}
    </List.Root>
  );
}

export default GenreList;
