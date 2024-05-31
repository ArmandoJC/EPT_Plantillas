import { IconButton, InputAdornment, TextField, OutlinedInput } from "@mui/material"
import { Search } from "@mui/icons-material"
// import { ErrorMessage, Field } from "formik"
// import { TextError } from "./TextError"

export const Input = ({ label, name, ...rest }) => {
    return (
        <>
            <OutlinedInput
                // as={TextField}
                fullWidth
                sx={{ marginY: '8px', backgroundColor: 'white', borderColor: 'white', borderRadius: '25px' }}
                // InputProps={{ style: { fontSize: "11px" } }}
                // InputLabelProps={{ style: { fontSize: "11px" } }}
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
                        // onClick={()=>{console.log("Hola presioné el botón de submit")}}
                        // color="secondary"
                        aria-label="toggle password visibility"
                        // onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                        <Search />
                      </IconButton>
                    </InputAdornment>
                  }
            />
            {/* <ErrorMessage component={TextError} name={name} /> */}
        </>
    )
}
