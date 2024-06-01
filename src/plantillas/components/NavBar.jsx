import { AppBar, Grid, Toolbar, Typography, Button, Box } from '@mui/material';
import { images } from '../../constants'
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
                    <Grid container direction='row' justifyContent='space-between' alignItems='center' className='bar' marginX='4rem'>
                        <Box
                            component="img"
                            sx={{
                                height: '150px',
                                width: '150px',
                                maxHeight: { xs: '150px', md: '100px' },
                                maxWidth: { xs: '150px', md: '100px' },
                            }}
                            alt="contasheet logo"
                            src={images.contasheetLogo}
                        />
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