import { HStack, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Apiurls from "../Apiurls";
import GameCard from "./GameCard";
import Loading from "../Loading.svg";
function SearchPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isUnmounted = false;
        setLoading(true);
        axios.get(
                `${Apiurls.baseUrl}${Apiurls.games}&search=${searchParams.get(
                    "q"
                )}&page_size=10`
            )
            .then((res) => {
                if (!isUnmounted) {
                    setGames(res.data.results);
                }
            })
            .finally(() => setLoading(false))
            .catch((err) => console.log(err));
        return () => {
            isUnmounted = true;
        };
    }, [searchParams]);

    return (
        <>
            {loading ? (
                <Image width="200px" src={Loading} alt="Loading" />
            ) : (
                <HStack
                    wrap="wrap"
                    justify="center"
                    align="center"
                    spacing="0px"
                    gap="50px"
                    marginTop="30px"
                    backgroundColor='rgba(0, 0, 0,0.3)' padding='50px' borderRadius='30px' minHeight='100vh' minWidth='80vw'
                >
                    {games.map((game) => {
                        if (game.background_image) {
                            return <GameCard game={game} key={game.id} />;
                        }
                    })}
                </HStack>
            )}
        </>
    );
}

export default SearchPage;
