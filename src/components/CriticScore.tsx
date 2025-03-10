import { Badge } from "@chakra-ui/react";

type Props = {
  score: number;
};

function CriticScore({ score }: Props) {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      colorPalette={color}
      paddingX={2}
      fontSize={"14px"}
      borderRadius={"4px"}
    >
      {score}
    </Badge>
  );
}

export default CriticScore;
