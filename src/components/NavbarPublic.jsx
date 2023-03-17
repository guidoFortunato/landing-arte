import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { Drawer } from "@mui/material";
import { NavListDrawer } from "./NavListDrawer";
import { Link } from "react-router-dom";

export const NavbarPublic = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box component="header">
        <AppBar position="static" component="div">
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
            <Box sx={{ marginLeft: "auto" }} component="nav">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                component={Link}
                to="/auth/login"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
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
