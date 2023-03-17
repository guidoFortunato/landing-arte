import { Container } from "@mui/material";
import { Footer, NavbarPublic } from "./components";
import { AppRouter } from "./router/AppRouter";

export const LandingApp = () => {
  const user = true;

  return (
    <>
      <header>{user ? <NavbarPublic /> : <p>cargando...</p>}</header>
        <Container component="main">
          <AppRouter />
        </Container>
      <Footer />
    </>
  );
};
