import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Container, Stack } from "@chakra-ui/react";
import HomeScreen from "./components/HomeScreen";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Container
        maxW="container.xl"
        bg=""
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path ="/detail/:id"  element={<Detail/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
