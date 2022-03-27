import { Stack,HStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Apiurls from '../Apiurls'
import GameCard from './GameCard'

function Api() {

    const[games, setGames] = useState([])

    useEffect(()=>  {
        axios.get(`${Apiurls.baseUrl}${Apiurls.games}`)
        .then(res => setGames(res.data.results) )
        .catch(err => console.log(err))

    },[])

    

    console.log(games)

  return (
        <HStack wrap='wrap' justify='center' align='center' spacing='0px' gap='50px' marginTop='30px'>
         {games.map(game => <GameCard game={game} key={game.id}/>)}
        </HStack>
      
  )
}

export default Api