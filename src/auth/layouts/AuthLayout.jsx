import { Avatar, Box, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export const AuthLayout = ({ children }) => {
  return (
    <Box className="altura-box">
      <Box
        sx={{
          mt: 4,
          mx: "auto",
          textAlign: "center",
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 2, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Bienvenido a Artiland !!
        </Typography>
        {children}
      </Box>
    </Box>
  );
};
