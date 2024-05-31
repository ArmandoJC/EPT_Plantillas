import { SaveOutlined } from '@mui/icons-material';
import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery, PlantillaCard } from '../components'
import { Link } from 'react-router-dom';
import { data } from '../../constants';

const onCardClick = () => {
    console.log("Navegando a otro lado")
}

const plantillas = data.plantillas;


export const CardsView = () => {
    return (
        <Grid container direction='row' justifyContent='space-evenly' alignItems='center' sx={{ mb: 1 }}>
            {
                plantillas.map( plantilla => (
                    <PlantillaCard plantilla={plantilla} key={plantilla.link}/>
                ))
            }
        </Grid>
    )
}