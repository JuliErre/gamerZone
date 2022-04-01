
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
  Flex,
  Icon

} from '@chakra-ui/react'

import { FaSearch } from 'react-icons/fa';



function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [text, setText] = useState('');
  let navigate = useNavigate();

  const handleChange = () => {
    if (text) {
      navigate(`/search?q=${text}`)

    }

    if (text === '') {
      searchParams.delete('q')
      setSearchParams(searchParams)
      navigate('/')
    }
  }

 
  return (

    <Flex direction="row" gap='10px'  >
      
      <Input  autoFocus outline='0px' placeholder='Search a videogame'  color='white' bg='gray.900' width={{ base: '300px' , md:'400px'   }}  onChange={e => setText(e.target.value)} required />
      <Button  variant='outline' colorScheme='gray' leftIcon={<Icon as={FaSearch} />} onClick={handleChange}>
        Search
      </Button>
    </Flex>


  )

}

export default Search