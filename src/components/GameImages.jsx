import { Image, VStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Apiurls from '../Apiurls'


function GameImages({game}) {
    
    const [images, setImages] = useState([])
    useEffect(() => {
        
        let isUnmounted = false;
        if(game != undefined){
        axios.get(`${Apiurls.baseUrl}games/${game}/screenshots?${Apiurls.key}`)
          .then(res =>{
            if (!isUnmounted){
              setImages(res.data.results)
            }})
          .catch(err => console.log(err))
        }
        return () => {
            isUnmounted = true;
        }
    
    }, [game])


  return (
    <VStack bg='black' wrap='wrap' flexDirection='row' gap='5px' spacing='0px' justifyContent='center' alignItems='center'>
       {images.map(image => <Image src={image.image}  key={image.id} width='32%' />)}

    </VStack>
  )
  
}

export default GameImages