import { CardBody, Flex, Text } from "@chakra-ui/react";
import "../style/BlogCard.css";

function CardBodyComponent() {
  return (
    <div className="card-body">
      <div className="card-body-inner">
      <CardBody>
        <Flex direction={"column"} align={"center"} justify={"center"}>
          <Text fontFamily={"sans-serif"} className="text">
            With Chakra UI, I wanted to sync the speed of development with the
            speed of design. I wanted the developer to be just as excited as the
            designer to create a screen.
          </Text>
        </Flex>
      </CardBody>
      </div>
    </div>
  );
}

export default CardBodyComponent;
