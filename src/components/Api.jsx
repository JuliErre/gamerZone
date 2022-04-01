import { Stack,HStack, Button, Box, Flex, VStack,Image, Heading } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Apiurls from '../Apiurls'
import GameCard from './GameCard'
import Loading from '../Loading.svg'




function Api() {

    const[games, setGames] = useState([]);
    const[page, setPage] = useState(1);
    const[loading, setLoading] = useState(true);

    useEffect(()=>  {
        let isUnmounted = false;
        setLoading(true);
        
        axios.get(`${Apiurls.baseUrl}${Apiurls.games}&page=${page}`)
        .then(res => {
          if (!isUnmounted){
            setGames(res.data.results) 
        }})
        .finally(() => setLoading(false))
        .catch(err => console.log(err))
        return () => {
            isUnmounted = true;
        }
    },[page])
    

  return (
    <VStack gap='30px' mt='30px' spacing='0px'>
      <Heading fontSize={{base: '4.5rem', md:'6rem'}} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontWeight='extrabold'> Gamerzone</Heading>
      <Flex gap='10px' direction='row' justify='center' align='center '  >
          <Button fontSize='18px' colorScheme='teal'      variant='outline' isDisabled={page === 1 ? true : false} onClick={() => setPage(page => page-1)}>Prev</Button>
          <Button fontSize='18px' colorScheme='teal' variant='outline' onClick={() => setPage(page => page+1)}>Next</Button>
          </Flex>

        <HStack wrap='wrap' justify='center' align='center' minWidth='80vw' minHeight='100vh' spacing='0px' gap='50px' marginTop='30px' backgroundColor='rgba(0, 0, 0,0.3)' padding='20px' py='100px' borderRadius='30px' maxWidth='95vw' >
          
          { loading ? <Image src={Loading} alt='loading' width='200px'/> : games.map(game => <GameCard key={game.id} game={game}/>)}
        
        </HStack>
    </VStack>
      
  )
}

export default Api