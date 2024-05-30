import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const pinkTheme = createTheme({
    palette: {
        primary: {
            main: '#887BB0'
        },
        secondary: {
            main: '#51D1F6'
        },
        error: {
            main: red.A400
        }
    }
})