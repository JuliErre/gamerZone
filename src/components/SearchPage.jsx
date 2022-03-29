import { HStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import Apiurls from '../Apiurls';
import GameCard from './GameCard';

function SearchPage() {
    const [searchParams,setSearchParams] = useSearchParams();
    const [games,setGames] = useState([])

    
    

    useEffect(()=>  {
        let isUnmounted = false;

        axios.get(`${Apiurls.baseUrl}${Apiurls.games}&search=${searchParams.get('q')}&page_size=10`)
        .then(res => {
            if (!isUnmounted){
                setGames(res.data.results)
            }})
        .catch(err => console.log(err))
        return () => {
            isUnmounted = true;
        }
    },[searchParams])
    console.log(games)

  return (
    <HStack wrap='wrap' justify='center' align='center' spacing='0px' gap='50px' marginTop='30px'>
        {games.map(game => {if( game.background_image  ){
           return <GameCard game={game} key={game.id}/>
        }})}
        
    </HStack>
  )
}

export default SearchPage