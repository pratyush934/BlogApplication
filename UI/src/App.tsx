import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardComponent from "./components/Cards/CardComponent";
import Header from "./components/Headers/Header";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cards" element={<CardComponent />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
