import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';
import './SideBar.css';

import { data } from '../../constants';

export const SideBar = ({ drawerWidth = 240 }) => {
    return (
        <Box
            component='nav'
            // margin={0}
            position={'fixed'}
            sx={{ width: { sm: drawerWidth }, height: { sm: '215px' }, flexShrink: { sm: 0 }, overflow: 'hidden' }}
        >
            <Drawer
                variant='permanent' // temporary
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, height: '225px', top: 'calc(129px)', backgroundColor: 'white', overflow: 'hidden', borderTopRightRadius: '20px', borderBottomRightRadius: '20px' }
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div' textAlign={'center'} >
                        Menú
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        data.sideMenu.map(({ text, link }) => (
                            <Box key={text}>
                                <ListItem sx={{ padding: '0px' }}>
                                    <ListItemButton href={link} target='_blank' sx={{ paddingY: '2px' }} >
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