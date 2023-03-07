import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

const dataLinks = [
  {
    title: "Home",
    path: "/",
    icon: <InboxIcon />,
  },
  {
    title: "Login",
    path: "/login",
    icon: <DraftsIcon />,
  },
  {
    title: "Register",
    path: "/register",
    icon: <MenuIcon />,
  },
];

export const NavListDrawer = ({ setOpen }) => {
  return (
    <Box
      sx={{
        width: 250,
      }}
    >
      <nav>
      <List>
        {dataLinks.map((item) => (
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
        ))}
      </List>
      </nav>
    </Box>
  );
};
