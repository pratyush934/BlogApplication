import BlogCard from "./BlogCard";
import "../style/CardStyling.css"
import { Flex } from "@chakra-ui/react";

function CardStyling() {
  return (
    <div className="card-styling">
      <Flex>
      <BlogCard />
      </Flex>
    </div>
  );
}

export default CardStyling;
