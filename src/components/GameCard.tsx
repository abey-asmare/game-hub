import { Card, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

type Props = {
  game: Game;
};
function GameCard({ game }: Props) {
  return (
    <Card.Root borderRadius={10} margin={3} overflow={"hidden"}>
      <div>
        <Image
          src={game.background_image}
          width={"100%"}
          height={"220px"}
        ></Image>
      </div>
      <Card.Body>
        <Heading size="xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map(({ platform }) => platform)}
        ></PlatformIconList>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
