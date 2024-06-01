import { Grid, Typography } from "@mui/material"
import './Title.css';

export const Title = () => {
    return (
        <Grid
            container
            alignItems='center'
            justifyContent='center'>
            <Grid item textAlign='center' marginY={'1rem'} marginX='4rem' className="titulo" alignContent={'center'}>
                <Typography fontSize={64} fontWeight={'bold'}> Contasheets </Typography>
            </Grid>
        </Grid>
    )
}
