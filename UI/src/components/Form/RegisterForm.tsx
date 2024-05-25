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
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router";
import Home from "../Headers/Home";
import Contact from "../Headers/Contact";
import SearchBar from "../Headers/SearchBar";

function RegisterForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const navigate = useNavigate();

  function handleClick() {
    navigate("/cards");
    onClose();
  }
  return (
    <div className="outer-div-header">
      <div className="inner-div-header">
        <Button onClick={onOpen}>Register</Button>
        <LoginForm />
        <Home />
        <Contact />

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input ref={initialRef} placeholder="First name" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder="Last name" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input placeholder="Email id" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Address</FormLabel>
                <Input placeholder="Address" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Descriptipn</FormLabel>
                <Input placeholder="Description" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleClick}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <div className="search-bar">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
