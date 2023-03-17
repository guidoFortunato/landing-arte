import { Box, Container, Grid } from "@mui/material";
import { CardList, NavbarPrivate, NavbarPublic } from "../../components";
import { AuthorsSelect } from "../../components/AuthorsSelect";

export const Home = () => {
  const user = false;
  return (
    <>
      {user ? <NavbarPrivate  /> : <NavbarPublic />}
      <Box className="img-home"></Box>
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <AuthorsSelect />
        </Box>

        <Grid container spacing={7}>
          <CardList />
          <CardList />
          <CardList />
          <CardList />
          <CardList />
        </Grid>
      </Container>
    </>
  );
};
