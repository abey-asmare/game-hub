import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

type Props = {
  game: Game;
};
function GameCard({ game }: Props) {
  return (
    <Card.Root>
      <div>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
      </div>
      <Card.Body>
        <HStack justifyContent="space-between" marginBottom={2}>
          <PlatformIconList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading size="xl">{game.name}</Heading>
        {/* <Emoji rating={game.rating_top}></Emoji> */}
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
