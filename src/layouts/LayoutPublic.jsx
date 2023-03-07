import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { NavbarPublic, Footer } from "../components"
export const LayoutPublic = () => {
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