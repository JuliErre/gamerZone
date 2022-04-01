import { HStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import GameCard from './GameCard'
import ApiUrls from '../Apiurls'
import axios from 'axios'
import { useParams, useSearchParams } from 'react-router-dom'

function GenrePage() {
    const[games,setGames] = useState([])
    const[loading,setLoading] = useState(true)
    const[genre,setGenre] = useState('4')
    
    const [searchParams] = useSearchParams();

    const {genreId} = useParams();

   
    useEffect(()=>  {
        let isUnmounted = false;
        setLoading(true)
        axios.get(`${ApiUrls.baseUrl}${ApiUrls.games}&genres=${genreId}&page_size=10`)
        
        .then(res => {  if (!isUnmounted){
            setGames(res.data.results)
        }})
        .finally(() => setLoading(false))
        .catch(err => console.log(err))
        return () => {
            isUnmounted = true;
        }
    },[genreId])
  return (
    <HStack wrap='wrap' justify='center' align='center' spacing='0px' gap='50px' marginTop='30px' backgroundColor='rgba(0, 0, 0,0.3)' padding='50px' borderRadius='30px' minHeight='100vh' minWidth='80vw'>
        {games.map(game => <GameCard game={game} key={game.id}/>)}
    </HStack>
  )
}

export default GenrePage