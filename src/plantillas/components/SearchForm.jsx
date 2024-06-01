import { Grid } from '@mui/material';
import { FormikControl } from './formik/FormikControl';

export const SearchForm = ({ formData, onSearch }) => {
    const { searchText, onInputChange } = formData;

    const onSearchSubmit = (event) => {
        event.preventDefault();
        onSearch(searchText);
    }

    return (
        <>
            <Grid
                container
                alignItems='center'
                justifyContent='center'
            >
                <Grid item textAlign='center' marginY={'0rem'} marginX='16rem' alignContent={'center'} flexGrow={1}>
                    <form
                        onSubmit={onSearchSubmit}
                    >
                        <Grid container spacing={0}>
                            <Grid item xs={12} sx={{ mt: 0 }}>
                                <FormikControl
                                    control='input'
                                    name='searchText'
                                    value={searchText}
                                    onChange={onInputChange}
                                />
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid >
        </>
    )
}