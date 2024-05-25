import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router"

function Contact() {


    const navigate = useNavigate();

    function handleSubmit() {
        navigate("/contacts")
    }

  return (
    <Button marginLeft={"30px"} onClick={handleSubmit}>Contact</Button>
  )
}

export default Contact