import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutOutlined from "@mui/icons-material/LogoutOutlined";

import { Avatar, Drawer } from "@mui/material";

import { NavListDrawer } from "./NavListDrawer";
import { Link } from "react-router-dom";

export const NavbarPrivate = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box component="header">
        <AppBar position="fixed" component="div">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
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
                <IconButton
                  component={Link}
                  to="/dashboard"
                  sx={{ p: 0, mr: 3 }}
                >
                  <Avatar alt="foto perfil" src="/assets/yo.png" />
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
      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <NavListDrawer setOpen={setOpen} />
      </Drawer>
    </>
  );
};
