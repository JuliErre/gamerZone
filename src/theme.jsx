import { extendTheme} from "@chakra-ui/react";


export const theme = extendTheme({
    styles: {
      global: (props) => ({
        'html, body': {
        margin: 0,
        padding: 0,
          fontSize: 'sm',
          color: props.colorMode === 'dark' ? 'white' : 'gray.600',
         backgroundColor: 'gray.800'
        },
        a: {
          color: props.colorMode === 'dark' ? 'teal.300' : 'teal.500',
        },
      }),
    },
  });

