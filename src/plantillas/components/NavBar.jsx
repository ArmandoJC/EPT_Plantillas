import { AppBar, Grid, IconButton, Toolbar, Typography, InputBase, Button } from '@mui/material';
import { LogoutOutlined, MenuOutlined, Search as SearchIcon } from '@mui/icons-material';

import './NavBar.css';

import { styled, alpha } from '@mui/material/styles';
import { Title } from './Title';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '24ch',
            '&:focus': {
                width: '40ch',
            },
        },
    },
}));

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
                            // key={page}
                            // onClick={handleCloseNavMenu}
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