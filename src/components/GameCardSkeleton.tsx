import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card.Root>
      <Skeleton height="200px"></Skeleton>
      <Card.Body>
        <SkeletonText></SkeletonText>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCardSkeleton;
