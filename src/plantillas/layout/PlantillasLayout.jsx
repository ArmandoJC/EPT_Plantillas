import { Box } from '@mui/system'
import { NavBar, SearchForm, SideBar, Title } from '../components';

const drawerWidth = 0;

export const PlantillasLayout = ({ children, formData, onSearch }) => {
  return (
    <Box sx={{ backgroundColor: '#887BB0' }} minHeight={'100vh'}>
      <Box>
        <NavBar drawerWidth={drawerWidth} />
      </Box>
      <Title />
      <SearchForm formData={formData} onSearch={onSearch} />
      <Box marginX='6rem' sx={{ display: 'flex', backgroundColor: '#887BB0' }}>
        <SideBar drawerWidth={150} />
        <Box
          component='main'
          sx={{ flexGrow: 1, p: 2 }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}