import { IconButton, InputAdornment, TextField, OutlinedInput } from "@mui/material"
import { Search } from "@mui/icons-material"

export const Input = ({ label, name, ...rest }) => {
    return (
        <>
            <OutlinedInput
                fullWidth
                sx={{ marginY: '0px', backgroundColor: 'white', borderColor: 'white', borderRadius: '25px' }}
                placeholder="Buscar plantillas..."
                size="small"
                id={name}
                name={name}
                label={label}
                {...rest}
                endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        type="submit"
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        <Search />
                      </IconButton>
                    </InputAdornment>
                  }
            />
        </>
    )
}
