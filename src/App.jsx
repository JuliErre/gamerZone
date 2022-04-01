import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Container, Stack } from "@chakra-ui/react";
import HomeScreen from "./components/HomeScreen";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import SearchPage from "./components/SearchPage";
import GenrePage from "./components/GenrePage";


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Container
        maxW="80vw"
        bg=""
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        height='100%'
        
      >
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path ="/detail/:id"  element={<Detail/>}/>
          <Route exact path ="/search"  element={<SearchPage/>}/>
          <Route exact path ="/genre/:genreId"  element={<GenrePage/>}/>
          
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
