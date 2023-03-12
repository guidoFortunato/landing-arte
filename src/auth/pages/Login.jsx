import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layouts";

import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#1976d2',
  },
  
  '& .MuiOutlinedInput-root': {
    
    '&:hover fieldset': {
      borderColor: '#1976d2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1976d2',
    },
  },
});

export const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click iniciar sesion");
  };

  return (
    <>
      <AuthLayout>
        <Box component="form" sx={{ mt: 1 }}  onSubmit={ handleSubmit } >
          <CssTextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            // autoFocus
          />
          <CssTextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Iniciar Sesión
          </Button>
          <Grid container>
            <Grid item>
              <Typography component={Link} to="/auth/register" variant="p">
                ¿Todavía no tenes una cuenta?
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </AuthLayout>
    </>
  );
};
