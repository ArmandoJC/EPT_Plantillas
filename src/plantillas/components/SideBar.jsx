import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';
import './SideBar.css';

export const SideBar = ({ drawerWidth = 240 }) => {
    return (
        <Box
            component='nav'
            // margin={0}
            position={'fixed'}
            sx={{ width: { sm: drawerWidth }, height: { sm: '275px' }, flexShrink: { sm: 0 }, overflow: 'hidden' }}
        >
            <Drawer
                variant='permanent' // temporary
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, height: '275px', top: '300px', backgroundColor: 'white', overflow: 'hidden', borderTopRightRadius: '20px', borderBottomRightRadius: '20px' }
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        Menú
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        ['PCGE', 'AFP', 'ESSALUD', 'SCRT'].map(text => (
                            <Box key={text}>
                                <ListItem sx={{ padding: '0px' }}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <TurnedInNot />
                                        </ListItemIcon>
                                        <Grid container>
                                            <ListItemText primary={text} />
                                            {/* <ListItemText secondary={'Exercitation cillum irure elit consectetur.'} /> */}
                                        </Grid>
                                    </ListItemButton>
                                </ListItem>
                                <div className="hl"></div>
                                {/* <Divider /> */}
                            </Box>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}