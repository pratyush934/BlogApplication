import { Image } from "@chakra-ui/react";
import "../style/BlogCard.css";

function ImageComponent() {
  return (
    <div className="image">
      <Image
        objectFit="cover"
        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Chakra UI"
        rounded={"10px"}
      />
    </div>
  );
}

export default ImageComponent;
