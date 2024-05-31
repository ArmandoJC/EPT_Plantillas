import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"

export const PlantillaCard = ({ plantilla }) => {

    return (
        <Grid item marginX={1} marginY={1}>
            <Card sx={{ maxWidth: 345, maxHeight: 350 }} >
                <CardActionArea target='_blank' href={ plantilla.link }>
                    <CardMedia
                        component="img"
                        height="200"
                        image={plantilla.imageUrl}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                            { plantilla.title }
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            { plantilla.description }
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}
