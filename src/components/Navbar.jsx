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

function Navbar() {
    return (
        <Stack alignItems='center' justifyContent='start' margin='20px' flexDirection='row' gap='10px' spacing='0' maxWidth='container.xl'>
            <Input placeholder='Search a videogame' bg='white' width='600px' />

            <Menu spacing='0px' margin='0px' >
                {({ isOpen }) => (
                    <>
                        <MenuButton isActive={isOpen} as={Button} colorScheme='translucent' rightIcon={<FaChevronDown/>}  >
                            {isOpen ? 'Category' : 'Category'}
                        </MenuButton>
                        <MenuList bg='black'  color='white' zIndex='1000'>
                            <MenuItem _hover = { {backgroundColor: "rgba(255,255,255,0.2)"} } >Download</MenuItem>
                            <MenuItem _hover = { {backgroundColor: "rgba(255,255,255,0.2)"} } onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem> 
                        </MenuList>
                    </>
                )}
            </Menu>

        </Stack>
    )
}

export default Navbar