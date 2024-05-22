import { Card, Flex } from "@chakra-ui/react";
import "../style/BlogCard.css";
import CardHeaderComponent from "./CardHeader";
import CardBodyComponent from "./CardBody";
import ImageComponent from "./Image";
import CardFooterComponent from "./CardFooter";

function BlogCard() {
  return (
    <div>
      <Flex>
        <Card className="card">
          <div>
            <CardHeaderComponent />
          </div>
          <div>
            <CardBodyComponent />
          </div>
          <div className="card-footer">
            <div>
              <ImageComponent />
            </div>
            <div>
              <CardFooterComponent />
            </div>
          </div>
        </Card>
      </Flex>
    </div>
  );
}

export default BlogCard;
