import { NavbarDashboard, SideBar } from "../../components";

const drawerWidth = 240

export const Dashboard = () => {
  return (
    <>
      <NavbarDashboard drawerWidth={ drawerWidth }/>
      <SideBar drawerWidth={ drawerWidth }/>
    </>
  );
};
