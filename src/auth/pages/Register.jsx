import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layouts";

export const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click crear cuenta");
  };

  return (
    <AuthLayout>
      <Box component="form" sx={{ mt: 1 }} onSubmit={ handleSubmit } >
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Nombre"
        name="text"
        autoComplete="name"
        // autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="lastname"
        label="Apellido"
        name="text"
        autoComplete="lastname"
        // autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        // autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Contraseña"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="confirmPassword"
        label="Confirmar contraseña"
        type="password"
        id="confirmPassword"
        autoComplete="current-password"
      />

      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Crear cuenta
      </Button>
      <Grid container>
        <Grid item>
          <Typography component={Link} to="/auth/login">
            ¿Ya tienes una cuenta?
          </Typography>
        </Grid>
      </Grid>
      </Box>
    </AuthLayout>
  );
};
