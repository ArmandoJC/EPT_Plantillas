import { Button, Grid, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormikControl } from './formik/FormikControl';
// import queryString from 'query-string'

// import { useForm } from '../../hooks/useForm';
// import { HeroCard } from '../components';
// import { getHeroesByName } from '../helpers';

export const SearchForm = () => {

    //   const navigate = useNavigate();
    //   const location = useLocation();

    //   const { q = '' } = queryString.parse( location.search );
    //   const heroes = getHeroesByName(q);

    //   const showSearch = (q.length === 0);
    //   const showError  = (q.length > 0) && heroes.length === 0;


    //   const { searchText, onInputChange } = useForm({
    //     searchText: q
    //   });



    //   const onSearchSubmit = (event) =>{
    //     event.preventDefault();
    //     // if ( searchText.trim().length <= 1 ) return;

    //     navigate(`?q=${ searchText }`);
    //   }


    return (
        <>
            <Grid
                container
                alignItems='center'
                justifyContent='center'
                
                >

                <Grid item textAlign='center' marginY={'1rem'} marginX='32rem' alignContent={'center'} flexGrow={1}>
                    {/* <Typography fontSize={64} fontWeight={'bold'}> Contasheets </Typography> */}
                    <form
                    // onSubmit={ onSearchSubmit }
                    >
                        {/* <input
                            type="text"
                            placeholder="Plantillas"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                        // value={ searchText }
                        // onChange={ onInputChange }
                        /> */}

                        {/* <button className="btn btn-outline-primary mt-1">
                            Search
                        </button> */}
                        <Grid container spacing={1}>
                            <Grid item xs={12} sx={{ mt: 0 }}>
                                <FormikControl
                                    control='input'
                                    // disabled
                                    name='installationPath'
                                    // error={touched.installationPath && !!errors.installationPath}
                                />
                            </Grid>
                        </Grid>
                        {/* <Grid container spacing={1} justifyContent={'flex-end'}> */}
                            {/* <Button
                                // disabled={isInstallerBusy}
                                sx={{ marginY: '0.5rem', marginX: '0', color: 'white' }}
                                variant="contained"
                                color={"primary"}
                                size='small'
                                onClick={async () => {
                                    const rutas = await window.MY_APP_NAMESPACE.openDirectoryDialog();
                                    setFieldValue('installationPath', rutas[0])
                                }}
                            >
                                Seleccionar
                            </Button> */}
                        {/* </Grid> */}
                    </form>
                </Grid>

            </Grid >

            {/* <div className="col-7">
            <h4>Results</h4>
            <hr /> */}

            {/* {
              ( q === '' )
                ? <div className="alert alert-primary">Search a hero</div>
                : ( heroes.length === 0 ) 
                  && <div className="alert alert-danger">No hero with <b>{ q }</b></div>
            } */}

            {/* <div className="alert alert-primary animate__animated animate__fadeIn" 
                style={{ display: showSearch ? '' : 'none' }}>
              Search a hero
            </div>

            <div className="alert alert-danger animate__animated animate__fadeIn" 
                style={{ display: showError ? '' : 'none' }}>
              No hero with <b>{ q }</b>
            </div> */}

            {/* 
            {
              heroes.map( hero => (
                <HeroCard key={ hero.id } {...hero } />
              ))
            } */}

            {/* </div> */}


        </>
    )
}