import {
    Box,
    Image,
    Stack,
    Text,
    VStack,
    Heading,
    HStack,
    Icon,
    LinkBox,
    Link,
    LinkOverlay,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import Apiurls from "../Apiurls";
import GameImages from "./GameImages";
import { FaStar, FaReddit } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import Loading from "../Loading.svg"

function Detail() {
    let { id } = useParams();
    const [game, setGame] = useState({});
    const [platforms, setPlatforms] = useState([]);
    const [requirements, setRequirements] = useState({});
    const [publishers, setPublishers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isUnmounted = false;
        
            
            axios.get(`${Apiurls.baseUrl}games/${id}?${Apiurls.key}`)
                .then((res) => {
                    if (!isUnmounted) {
                    setGame(res.data);
                    setPlatforms(res.data.platforms);
                    setRequirements(
                        res.data.platforms.find(
                            (platform) => platform.platform.name.toLowerCase() === "pc"
                        )
                    );
                    setPublishers(res.data.publishers);
                }})
                .then(() => {
                    setRequirements((r) => {
                        if (r) {
                            return r.requirements;
                        }
                    });
                })
                .finally(() => {
                    setLoading(false);
                })

                .catch((err) => console.log(err));
        

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
                        maxWidth="99vw"
                        width="5xl"
                        borderRadius="20px"
                        overflow="hidden"
                        spacing="40px"
                        pb="20px"
                        margin="20px"
                        boxShadow="1px 1px 40px black"
                        maxWidth="90vw"
                    >
                        <Image
                            src={game.background_image_additional ? game.background_image_additional : game.background_image}
                            alt=""
                            maxWidth="99vw"
                            maxHeight="60vh"
                            minWidth="60vw"
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
                            <Text fontSize={{ base: 'md', md: 'lg' }}>{game.description_raw}</Text>
                        </Box>
                    </VStack>
                </Stack>
            </Stack>
            <GameImages game={game.slug} />
            <HStack
                bgColor="black"
                justify="center"
                alignItems="flex-start"
                py="50px"
                minWidth="99vw"
                minHeight="65vh"
            >
                <HStack
                    width="80%"
                    alignItems="flex-start"
                    justifyContent="space-between"
                    padding="50px"
                    wrap="wrap"
                    spacing="0px"
                    gap="20px"
                >
                    <Box display="flex" flexDirection="column" gap="3px">
                        <Heading fontSize="3xl" fontWeight="bold" color="white">
                            {" "}
                            Available Platforms{" "}
                        </Heading>
                        {platforms.map((platform) => (
                            <Text fontSize="lg" key={Math.random()}>
                                {" "}
                                {platform.platform.name}
                            </Text>
                        ))}
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="flex-Start"
                    >
                        <LinkBox
                            maxW="sm"
                            p=""
                            rounded="md"
                            justifyContent="flex-start"
                            alignItems="flex-center"
                            display="flex"
                            gap="5px"
                        >
                            <Icon as={BiWorld} width="50" fontSize="4xl" color="blue.600" />
                            <LinkOverlay
                                color="White"
                                fontSize="2xl"
                                fontWeight="bold"
                                href={game.website}
                                isExternal
                            >
                                {" "}
                                Official Website
                            </LinkOverlay>
                        </LinkBox>

                        <Text fontSize="lg">
                            {" "}
                            {publishers.map((p) => (
                                <span key={Math.random()}> @{p.name} </span>
                            ))}{" "}
                        </Text>
                        <Text fontSize="lg"> Released: {game.released} </Text>
                    </Box>
                    <Box>
                        <LinkBox
                            maxW="sm"
                            p=""
                            rounded="md"
                            justifyContent="flex-start"
                            alignItems="flex-center"
                            display="flex"
                            gap="5px"
                        >
                            <Icon as={FaReddit} width="50" fontSize="4xl" color="red.500" />
                            <LinkOverlay
                                color="White"
                                fontSize="2xl"
                                fontWeight="bold"
                                href={game.reddit_url}
                                isExternal
                            >
                                {" "}
                                {game.name}{" "}
                            </LinkOverlay>
                        </LinkBox>
                    </Box>
                    <Box>
                        <Heading fontSize="3xl" fontWeight="bold" color="white">
                            {" "}
                            Score{" "}
                        </Heading>
                        <Text fontSize="2xl" color="yellow.300">
                            {" "}
                            <Icon as={FaStar} /> Metacritic: {game.metacritic}{" "}
                        </Text>
                        <Text fontSize="2xl" color="yellow.400">
                            {" "}
                            <Icon as={FaStar} /> Rating: {game.rating}/5{" "}
                        </Text>
                    </Box>

                    <Box gap="10px" display="flex" flexDirection="column" margin="10px">
                        <Heading fontSize="3xl" fontWeight="bold" color="white">
                            {" "}
                            Requirements{" "}
                        </Heading>

                        {requirements && (
                            <>
                                <Text> {requirements.minimum} </Text>
                                <Text> {requirements.recommended} </Text>
                            </>
                        )}
                    </Box>
                </HStack>
            </HStack>
        </VStack>
    );
}

export default Detail;
