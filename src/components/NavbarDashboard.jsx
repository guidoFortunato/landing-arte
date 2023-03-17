import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutOutlined from "@mui/icons-material/LogoutOutlined";

import { Avatar } from "@mui/material";

import { Link } from "react-router-dom";

export const NavbarDashboard = ({ drawerWidth }) => {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <Box component="header">
        <AppBar
          position="fixed"
          component="div"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: ` ${drawerWidth}px ` },
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "flex", sm: "none" } }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
              <Typography
                variant="h5"
                component={Link}
                to="/"
                sx={{
                  // flexGrow: 1,
                  textDecoration: "none",
                  color: "inherit",
                  // textAlign: "center",
                }}
              >
                ARTE
              </Typography>
              {/* <Box sx={{ marginLeft: "auto" }} component="nav"> */}
              <Box>
                <IconButton component={Link} to="/dashboard" sx={{ p: 0, mr: 3 }}>
                  <Avatar alt="foto perfil" src="" />
                </IconButton>
                <IconButton color="error">
                  <LogoutOutlined />
                </IconButton>
              </Box>

              {/* </Box> */}
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      
    </>
  );
};
