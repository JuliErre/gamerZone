import {  Stack, Text, Box, HStack, Icon } from "@chakra-ui/react";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "./Image"
import { FaChevronDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function GameCard({ game }) {
    const [loading, setLoading] = useState(true);
    let navigate = useNavigate();

    return (

        <Stack
            bg="black"
            align="center"
            w=""
            h=""
            borderRadius="30px"
            pb="20"
            overflow="hidden"
            gap="20px"
            boxShadow="dark-lg"
            position="relative"
            transitionDuration='600ms'
            transitionProperty="all"
            cursor="pointer"
            onClick={() => navigate(`/detail/${game.id}`)}

            

            _hover = { { transform: "scale(1.2)"} }
            
        >   

        
        
            <Image src={game.background_image}/>   
            <Box width='100%' height='100%' position='absolute'  bottom='0px'  zIndex='40' style={{ backgroundColor : "rgba(0,0,0,0.4)",
            backdropFilter :"blur(0px)",
            boxShadow: "1px 1px 30px black" }}>
            
        </Box>     
        
        
            <Text fontSize="2xl" fontWeight="bold" color="gray.100" position='absolute' bottom='60px' zIndex='50'>
                {game.name}{" "}
            </Text>
            <Icon as={FaChevronDown} zIndex='50' width='100px' height='50px' position='absolute' bottom='10px' color='white'/>
        </Stack>
    );
}

export default GameCard;
