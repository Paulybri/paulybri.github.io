import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
      fontFamily: `'Quicksand', sans-serif`,
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          draggable: false
        }
      }
    },
    palette: {
      background: {
        paper: 'rgb(255 248 231)',
      },
      primary: {
        main: 'rgb(255 220 132)'
      },
      secondary: {
        main: 'rgb(240 204 255)'
      }
    }
  })