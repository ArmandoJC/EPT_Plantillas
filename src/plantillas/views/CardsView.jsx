import { Grid } from '@mui/material';
import { PlantillaCard } from '../components'

export const CardsView = ({ plantillasFiltered }) => {

    return (
        <Grid container direction='row' justifyContent='space-evenly' alignItems='center' sx={{ mb: 1, marginLeft: 4 }}>
            {
                plantillasFiltered.map(plantilla => (
                    <PlantillaCard plantilla={plantilla} key={plantilla.link} />
                ))
            }
        </Grid>
    )
}