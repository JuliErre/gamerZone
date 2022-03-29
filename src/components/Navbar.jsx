import { Stack, Input,   Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
Button} from '@chakra-ui/react'
import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Search from './Search';



function Navbar() {
    let navigate = useNavigate();

const navigation = (genre) => {
    navigate(`/genre/${genre}`)
}
    return (
        <Stack alignItems='center' justifyContent='start' margin='20px' flexDirection='row' gap='10px' spacing='0' maxWidth='container.xl'>
          <Search/>

            <Menu spacing='0px' margin='0px' >
                {({ isOpen }) => (
                    <>
                        <MenuButton isActive={isOpen} as={Button} colorScheme='translucent' rightIcon={<FaChevronDown/>}  >
                            {isOpen ? 'Category' : 'Category'}
                        </MenuButton>
                        <MenuList bg='black'  color='white' zIndex='1000'>
                            <MenuItem _hover = { {backgroundColor: "rgba(255,255,255,0.2)"} } onClick={()=>navigation(4)} >  Action</MenuItem>
                            <MenuItem _hover = { {backgroundColor: "rgba(255,255,255,0.2)"} } onClick={() => navigation(3)}>Adventure</MenuItem> 
                            <MenuItem _hover = { {backgroundColor: "rgba(255,255,255,0.2)"} } onClick={() => navigation(5)}>RPG</MenuItem> 
                            <MenuItem _hover = { {backgroundColor: "rgba(255,255,255,0.2)"} } onClick={() => navigation(2)}>Shooter</MenuItem> 
                            <MenuItem _hover = { {backgroundColor: "rgba(255,255,255,0.2)"} } onClick={() => navigation(14)}>Simulation</MenuItem> 
                            <MenuItem _hover = { {backgroundColor: "rgba(255,255,255,0.2)"} } onClick={() => navigation(1)}>Racing</MenuItem> 
                        </MenuList>
                    </>
                )}
            </Menu>

        </Stack>
    )
}

export default Navbar