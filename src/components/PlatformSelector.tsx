import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

function PlatformSelector() {
  const { data: platforms, error } = usePlatforms();
  if (error) return;
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          <BsChevronDown />
          Platforms
        </Button>
      </MenuTrigger>
      <MenuContent width="fit-content">
        {platforms.map((platform) => (
          <MenuItem key={platform.id} value={platform.name}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
}

export default PlatformSelector;
