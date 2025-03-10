import React from "react";
import useGenre from "../hooks/useGenre";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

function GenreList() {
  const { data } = useGenre();
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
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        );
      })}
    </List.Root>
  );
}

export default GenreList;
