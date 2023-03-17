import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

const dataLinksUserFalse = [
  {
    title: "Home",
    path: "/home",
    icon: <InboxIcon />,
  },
  {
    title: "Login",
    path: "/auth/login",
    icon: <DraftsIcon />,
  },
  {
    title: "Register",
    path: "/auth/register",
    icon: <MenuIcon />,
  },
];
const dataLinksUserTrue = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <InboxIcon />,
  },
];

export const NavListDrawer = ({ setOpen }) => {
  const user = false;

  return (
    <Box
      sx={{
        width: 240,
      }}
      component="nav"
    >
        <List>
          {user 
             ? dataLinksUserTrue.map((item) => (
              <ListItem disablePadding key={item.title}>
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  onClick={() => setOpen(false)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.title}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))
            : dataLinksUserFalse.map((item) => (
              <ListItem disablePadding key={item.title}>
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  onClick={() => setOpen(false)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.title}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))
            
            }
        </List>
    </Box>
  );
};
