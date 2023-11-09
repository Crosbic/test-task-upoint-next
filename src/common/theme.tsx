import { ruRU } from '@mui/material/locale'
import { createTheme } from '@mui/material/styles'

export const theme = createTheme(
  {
    palette: {
      mode: 'dark',
      primary: {
        main: '#8de3fe',
      },
      secondary: {
        main: '#ffffff',
      },
    },
    typography: {
      fontFamily: 'GothamPro Medium',
      fontSize: 14,
    },
  },
  ruRU
)
