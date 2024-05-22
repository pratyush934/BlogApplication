import { Avatar, Box, CardHeader, Flex, Heading, Text } from "@chakra-ui/react";

import "../style/BlogCard.css";

function CardHeaderComponent() {
  return (
    <div>
      <CardHeader className="card-header">
        <Flex>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar
              name="Princess"
              src="https://image.tensorartassets.com/cdn-cgi/image/anim=true,w=2560,f=jpeg,q=85/posts/images/623785158964760544/7dc86662-eba7-4967-a23f-9e441dcd259d.jpg"
              className="avtar"
              size="2xl"
              rounded={"full"}
            />
            <Box>
              <Heading size="sm" as={"b"}>
                Princess
              </Heading>
              <br />
              <Text as={"i"}>Princess of Japan</Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
    </div>
  );
}
// https://bit.ly/sage-adebayo
export default CardHeaderComponent;
