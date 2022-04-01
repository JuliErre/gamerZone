import { extendTheme} from "@chakra-ui/react";


export const theme = extendTheme({
    styles: {
      global: (props) => ({
        'html, body': {
        margin: 0,
        padding: 0,
          fontSize: 'sm',
          color: props.colorMode === 'dark' ? 'white' : 'gray.600',
         backgroundImage:('url(https://i.ibb.co/0BSmjyM/default-1920x1080-2.png)'),
         backgroundRepeat: 'no-repeat',
         backgroundAttachment: 'fixed',
         backgroundSize: 'cover',
        
        },
        a: {
          color: props.colorMode === 'dark' ? 'teal.300' : 'teal.500',
        },
      }),
    },
  });

