import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";

function SearchBar() {
  return (
    <div>
      <Editable defaultValue="Take some chakra">
        <EditablePreview />
        <EditableInput />
      </Editable>
    </div>
  );
}

export default SearchBar;
