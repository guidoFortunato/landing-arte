import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Footer, NavbarPublic } from "../../components";

export const LayoutLanding = () => {
  return (
    <>
      <NavbarPublic />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}