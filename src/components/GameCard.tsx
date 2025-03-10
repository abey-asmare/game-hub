import { Card, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/useGames";

type Props = {
  game: Game;
};
function GameCard({ game }: Props) {
  return (
    <Card.Root borderRadius={10} margin={3} overflow={"hidden"}>
      <div >
        <Image src={game.background_image} width={"100%"} height={"220px"} ></Image>
      </div>
      <Card.Body>
        <Heading size="xl">{game.name}</Heading>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
