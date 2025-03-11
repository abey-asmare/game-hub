import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

function SortSelector() {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          <BsChevronDown />
          Order by: Relevance
        </Button>
      </MenuTrigger>
      <MenuContent width="fit-content" position="absolute">
        <MenuItem value="Relevance">Relevance</MenuItem>
        <MenuItem value="Date Added">Date Added</MenuItem>
        <MenuItem value="Name">Name</MenuItem>
        <MenuItem value="Release Date">Release Date</MenuItem>
        <MenuItem value="Popularity">Popularity</MenuItem>
        <MenuItem value="Average Rating">Average Rating</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
}

export default SortSelector;
