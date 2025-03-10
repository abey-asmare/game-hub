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
    <Card.Root borderRadius={10} margin={3} overflow={"hidden"}>
      <div>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
      </div>
      <Card.Body>
        <Heading size="xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
