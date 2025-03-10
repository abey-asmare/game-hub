import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

function GameCardContainer({ children }: { children: ReactNode }) {
  return (
    <Box width="290px" borderRadius={10} margin={3} overflow={"hidden"}>
      {children}
    </Box>
  );
}

export default GameCardContainer;
