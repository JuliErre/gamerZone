import {
    Stack, Input, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Link,
    Flex,
    Icon,
    Box
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import { Link as ReachLink, useNavigate } from 'react-router-dom';
import Search from './Search';
import { BiMenu } from 'react-icons/bi';



function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    let navigate = useNavigate();

    const navigation = (genre) => {
        navigate(`/genre/${genre}`)
    }
    return (
        <Stack alignItems={{ base: 'start' , md:'center'   }}  width='90vw' justifyContent='start' mb='20px' flexDirection='column' gap='50px' spacing='0' maxWidth='container.xl' pt='20px' >

            <Box display={{ base: 'flex', md: 'none' }} justifyContent='flex-start' align='flex-start'> 

                <Icon as={BiMenu} color='white' cursor='pointer' fontSize='50px' onClick={() => setIsOpen(!isOpen)} />
            </Box>
        
            <Flex gap='50px' display={{ base: isOpen  ? 'flex' : 'none' , md:'flex'   }} flexDirection={{base: 'column-reverse' , md:'row'   }} alignSelf ='center' justifyContent='center' alignItems='center' >
             

                <Link as={ReachLink} to='/' fontSize='20' color='white' fontWeight='bold'> Home </Link>

            
                <Menu spacing='0px' margin='0px' >
                    {({ isOpen }) => (
                        <>
                            <MenuButton isActive={isOpen} as={Button} fontSize='18px' colorScheme='translucent' rightIcon={<FaChevronDown />}  >
                                {isOpen ? 'Category' : 'Category'}
                            </MenuButton>
                            <MenuList bg='gray.900' color='white' zIndex='1000'>
                                <MenuItem _hover={{ backgroundColor: "rgba(255,255,255,0.2)" }} onClick={() => navigation(4)} >  Action</MenuItem>
                                <MenuItem _hover={{ backgroundColor: "rgba(255,255,255,0.2)" }} onClick={() => navigation(3)}>Adventure</MenuItem>
                                <MenuItem _hover={{ backgroundColor: "rgba(255,255,255,0.2)" }} onClick={() => navigation(5)}>RPG</MenuItem>
                                <MenuItem _hover={{ backgroundColor: "rgba(255,255,255,0.2)" }} onClick={() => navigation(2)}>Shooter</MenuItem>
                                <MenuItem _hover={{ backgroundColor: "rgba(255,255,255,0.2)" }} onClick={() => navigation(14)}>Simulation</MenuItem>
                                <MenuItem _hover={{ backgroundColor: "rgba(255,255,255,0.2)" }} onClick={() => navigation(1)}>Racing</MenuItem>
                            </MenuList>
                        </>
                    )}
                </Menu>
                <Search />
            </Flex>

        </Stack>
    )
}

export default Navbar