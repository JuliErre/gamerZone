import { Box, Image, Stack, Text, VStack, Heading, HStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import Apiurls from "../Apiurls";
import "./Detail.css";
import GameImages from "./GameImages";

function Detail() {
    let { id } = useParams();
    const [game, setGame] = useState({});

    useEffect(() => {
        let isUnmounted = false;
        if (!isUnmounted) {
            axios
                .get(`${Apiurls.baseUrl}games/${id}?${Apiurls.key}`)
                .then((res) => setGame(res.data))
                .then(() => console.log(game))
                .catch((err) => console.log(err));
        }

        return () => {
            isUnmounted = true;
        };
    }, []);

    return (
        <VStack spacing="0px" width="99vw">
            <Stack
                bgImage={`url(${game.background_image})`}
                bgColor="black"
                position="relative"
                width="99vw"
                minHeight="100vh"
                backgroundSize="cover"
                backgroundPosition="center"
                margin="0"
            >
                <Stack
                    background="rgba(0,0,0,0.6)"
                    width="99vw"
                    minHeight="100vh"
                    justifyContent="center"
                    align="center"
                >
                    <VStack
                        bg="rgba(0,0,0,0.8)"
                        maxWidth="100vw"
                        width="5xl"
                        borderRadius="20px"
                        overflow="hidden"
                        spacing="40px"
                        pb="20px"
                        margin="20px"
                        boxShadow="1px 1px 40px black"
                    >
                        <Image
                            src={game.background_image_additional}
                            alt=""
                            maxWidth="100vw"
                            loading="lazy"
                        />
                        <Box
                            width="80%"
                            display="flex"
                            flexDirection="column"
                            justify="center"
                            alignItems="Left"
                            gap="20px"
                        >
                            <Heading fontSize="4xl" fontWeight="bold" color="white">
                                {" "}
                                {game.name}{" "}
                            </Heading>
                            <Text fontSize="lg">{game.description_raw}</Text>
                        </Box>
                    </VStack>
                </Stack>
            </Stack>
            <GameImages game={game.slug} />
            <HStack>
                
            </HStack>
        </VStack>
    );
}

export default Detail;
