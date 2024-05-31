import { Typography } from "@mui/material"

export const TextError = (props) => {
  return (
    <Typography variant="body2" sx={{ color: 'error.main', fontSize:'10px', marginX: '16px' }} >{ props.children }</Typography>
  )
}
