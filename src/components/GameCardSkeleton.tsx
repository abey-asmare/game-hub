import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

function GameCardSkeleton() {
  return (
    <Card.Root width="290px" borderRadius={10} margin={3} overflow={"hidden"}>
      <Skeleton height="200px"></Skeleton>
      <Card.Body>
        <SkeletonText></SkeletonText>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCardSkeleton;
