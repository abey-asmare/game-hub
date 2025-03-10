import { HStack, Switch } from "@chakra-ui/react";
import React from "react";
import { useColorMode } from "./ui/color-mode";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack colorScheme="green">
      <Switch.Root checked={colorMode === "dark"} onChange={toggleColorMode}>
        <Switch.HiddenInput />
        <Switch.Control />
      </Switch.Root>
    </HStack>
  );
}

export default ColorModeSwitch;
