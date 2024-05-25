import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";

function Home() {

    const navigate = useNavigate();

    function handleSubmit() {
        navigate("/");
    }

  return (
    <>
      <Button onClick={handleSubmit}>Home</Button>
    </>
  );
}

export default Home;
