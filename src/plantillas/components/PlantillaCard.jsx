import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"

export const PlantillaCard = ({ plantilla }) => {

    return (
        <Grid item marginX={1} marginY={1}>
            <Card
                sx={{
                    width: 345,
                    height: 345,
                    borderRadius: '25px'
                }}
                elevation={10}
            >
                <CardActionArea target='_blank' href={plantilla.link}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={plantilla.imageUrl}
                        alt="green iguana"
                        sx={{
                            borderStyle: "solid",
                            borderWidth: '15px',
                            borderColor: '#8FCCD9',
                            borderTopLeftRadius: '25px',
                            borderTopRightRadius: '25px',
                        }}
                    />
                    <CardContent

                        sx={{
                            height: '145px',
                            backgroundColor: '#EAC0CA'
                        }}
                    >
                        <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                            {plantilla.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" textAlign={'center'}>
                            {plantilla.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}
