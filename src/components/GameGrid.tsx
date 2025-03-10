import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

function GameGrid() {
  const { games, error } = useGames();
  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid
columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
      >
        {games.map((game) => (
          <GameCard game={game} ></GameCard>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default GameGrid;
