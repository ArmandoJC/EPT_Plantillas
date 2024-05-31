import { SaveOutlined } from '@mui/icons-material';
import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery, PlantillaCard } from '../components'
import { Link } from 'react-router-dom';

const onCardClick = () => {
    console.log("Navegando a otro lado")
}

export const CardsView = () => {
    return (
        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
            <PlantillaCard />
        </Grid>
    )
}