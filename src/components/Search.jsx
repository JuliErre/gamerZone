import { Input } from '@chakra-ui/react'
import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

function Search() {
    const [searchParams,setSearchParams] = useSearchParams();
    let navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.value) {
            navigate(`/search?q=${e.target.value}`)
           
        }
        
        if(e.target.value === ''){
            searchParams.delete('q')
            setSearchParams(searchParams)
            navigate('/')
            }
        } 
        
        console.log(searchParams.get('q'))
  return (
    <Input placeholder='Search a videogame' bg='white' width='600px' onChange={handleChange} />
    
  )

}

export default Search