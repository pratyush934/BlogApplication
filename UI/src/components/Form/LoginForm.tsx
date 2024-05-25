import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import "./../Headers/Header.css";
import { useNavigate } from "react-router";

function LoginForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/cards");
    onClose();
  }

  return (
    <div className="outer-div-header">
      <div className="inner-div-header">
        <Button onClick={onOpen}>Login</Button>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login to Your Account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input placeholder="Email id" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input placeholder="Password" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                Login
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}

export default LoginForm;
