import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"

export const PlantillaCard = () => {
    return (
        <Grid item>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea target='_blank' href='https://www.canva.com/design/DAGET4VzHdc/knz-W__SQZmf5KbwQ4am6g/edit'>
                    <CardMedia
                        component="img"
                        height="200"
                        image="/assets/image1.png"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                            PLANILLA DE REMUNERACIONES
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Cute Aesthetic Presentation
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}
