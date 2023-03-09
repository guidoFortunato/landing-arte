// import { Footer, NavbarPublic } from "./components";
import { AppRouter } from "./router/AppRouter";

export const LandingApp = () => {
  const user = true;

  return (
    <>
      {/* {user ? <NavbarPublic /> : <p>cargando...</p>} */}

      <AppRouter />
      {/* <Footer /> */}
    </>
  );
};
