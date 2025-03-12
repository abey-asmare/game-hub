import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

type Props = {
  gameQuery: GameQuery;
};
function GameHeading({ gameQuery }: Props) {
  const heading = ` ${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading marginBottom={5} fontSize={"3xl"}>
      {heading}
    </Heading>
  );
}

export default GameHeading;
