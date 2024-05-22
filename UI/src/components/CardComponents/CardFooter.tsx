import { Button, CardFooter, Flex } from "@chakra-ui/react";
import { BiChat, BiLike, BiShare } from "react-icons/bi";
import "../style/BlogCard.css";

function CardFooterComponent() {
  return (
    <div className="card-footer">
      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
        rounded={"10px"}
        marginTop={"10px"}
      >
        <div className="button-functions">
          <Button
            flex="1"
            variant="ghost"
            leftIcon={<BiLike />}
            _hover={{
              backgroundColor: "aqua",
              textColor: "black",
            }}
          >
            Like
          </Button>
        </div>

        <div
          className="button-functions"
          style={{
            width: "100px",
          }}
        >
          <Button
            flex="1"
            variant="ghost"
            leftIcon={<BiChat />}
            _hover={{
              backgroundColor: "aqua",
              textColor: "black",
            }}
          >
            Comment
          </Button>
        </div>
        <div className="button-functions">
          <Button
            flex="1"
            variant="ghost"
            leftIcon={<BiShare />}
            _hover={{
              backgroundColor: "aqua",
              textColor: "black",
            }}
          >
            Share
          </Button>
        </div>

        <Flex
          className="read-story"
          justify={"center"}
          alignItems={"center"}
          borderRadius={"50px"}
        >
          <Button
            size="md"
            height="50px"
            width="470px"
            backgroundColor={"red"}
            border={"12px"}
            borderColor={"yellow"}
            borderRadius={"12px"}
            marginBottom={"10px"}
            className="full-story-button"
          >
            Read the Full story
          </Button>
        </Flex>
      </CardFooter>
    </div>
  );
}

export default CardFooterComponent;
