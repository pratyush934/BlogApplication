import { ChakraProvider } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CardComponent from "./components/Cards/CardComponent";
import Header from "./components/Headers/Header";
import MainPage from "./components/MainPage/MainPage";
import Contact from "./components/Contacts/Contact";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cards" element={<CardComponent />} />
          <Route path="/contacts" element={<Contact/>}/>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
