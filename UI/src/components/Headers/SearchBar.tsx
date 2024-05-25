import { SearchIcon } from "@chakra-ui/icons";
import {
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
} from "@chakra-ui/react";

function SearchBar() {
  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <SearchIcon marginRight={"10px"} marginTop={"1px"} />
      <Editable
        defaultValue="Search"
        backgroundColor={"white"}
        width={"350px"}
        height={"35px"}
        rounded={"12px"}
      >
        <EditablePreview marginLeft={"15px"} marginTop={"1px"} />
        <EditableInput border={"2px"} borderColor={"white"} />
      </Editable>
    </Flex>
  );
}

export default SearchBar;
