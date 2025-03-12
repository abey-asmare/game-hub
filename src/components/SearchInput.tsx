import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

type Props = {
  onSearch: (search: string) => void;
};
function SearchInput({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup justifySelf="stretch" startElement={<BsSearch />}>
        <Input
          borderRadius={20}
          placeholder="search games "
          variant="outline"
          ref={ref}
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
