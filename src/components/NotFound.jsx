import { Box, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
    <Box>
      <Typography>NotFound</Typography>
      <Button variant="contained" component={Link} to='/'>Volver</Button>
    </Box>
  )
}