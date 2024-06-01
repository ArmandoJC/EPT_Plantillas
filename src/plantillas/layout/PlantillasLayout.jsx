import { Box } from '@mui/system'
import { NavBar, SearchForm, Title } from '../components';

const drawerWidth = 0;

export const PlantillasLayout = ({ children, formData, onSearch }) => {
  console.log({formData})
  return (
    <Box sx={{ backgroundColor: '#887BB0' }} minHeight={'100vh'}>
      <Box>
        <NavBar drawerWidth={drawerWidth} />
      </Box>
      <Title />
      <SearchForm formData={formData} onSearch={onSearch}/>
      <Box  marginX='4rem' sx={{ display: 'flex', backgroundColor: '#887BB0' }}>
        {/* <SideBar drawerWidth={ drawerWidth } /> */}
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