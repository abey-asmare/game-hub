import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

type Props = {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform | null) => void;
};

function PlatformSelector({ selectedPlatform, onSelectPlatform }: Props) {
  const { data: platforms, error } = usePlatforms();
  if (error) return;
  return (
      <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          <BsChevronDown />
          {selectedPlatform?.name || "Platforms"}
        </Button>
      </MenuTrigger>
      <MenuContent width="fit-content" position="absolute" top="100%">
        {platforms.map((platform) => (
          <MenuItem
            key={platform.id}
            value={platform.name}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
);
}

export default PlatformSelector;
