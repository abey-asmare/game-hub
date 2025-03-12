import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

type Props = {
  sortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
};
function SortSelector({ sortOrder, onSelectSortOrder }: Props) {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const currentSortOrder = sortOrders.find((s) => s.value === sortOrder);
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          <BsChevronDown />
          Order by: {currentSortOrder?.label || "Relevance"}
        </Button>
      </MenuTrigger>
      <MenuContent width="fit-content" position="absolute" top="100%" left={0}>
        {sortOrders.map(({ value, label }) => (
          <MenuItem
            key={value}
            onClick={() => onSelectSortOrder(value)}
            value={value}
          >
            {label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
}

export default SortSelector;
