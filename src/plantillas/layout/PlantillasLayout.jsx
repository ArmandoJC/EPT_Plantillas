import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import { NavBar, SideBar, Title } from '../components';


const drawerWidth = 0;

export const PlantillasLayout = ({ children }) => {
  return (
    <Box sx={{ backgroundColor: '#887BB0' }}>
      <Box>
        <NavBar drawerWidth={drawerWidth} />
      </Box>
      <Title />
      <Box sx={{ display: 'flex', backgroundColor: '#887BB0' }}>


        {/* <SideBar drawerWidth={ drawerWidth } /> */}

        <Box
          component='main'
          sx={{ flexGrow: 1, p: 3 }}
        >
          <Toolbar />

          {children}

        </Box>
      </Box>
    </Box>
  )
}