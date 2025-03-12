import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

type Props = {
  onSearch: (search: string) => void;
};
function NavBar({ onSearch }: Props) {
  return (
    <HStack justifyContent="space-between" padding={"16px"}>
      <Image src={logo} boxSize={"60px"} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
}

export default NavBar;
