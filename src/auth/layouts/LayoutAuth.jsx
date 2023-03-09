import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export const LayoutAuth = () => {
  return (
    <>
      <Container>
        Auth
        <Outlet />
      </Container>
    </>
  )
}