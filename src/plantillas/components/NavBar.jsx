import { AppBar, Grid, Toolbar, Typography, Button } from '@mui/material';
import './NavBar.css';

export const NavBar = ({ drawerWidth = 240 }) => {
    return (
        <>
            <AppBar
                elevation={0}
                position='static'
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` }
                }}
            >
                <Toolbar>
                    <Grid container direction='row' justifyContent='right' alignItems='center' className='bar' marginX='4rem'>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Typography variant='h6' component='div'> INICIO </Typography>
                        </Button>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}