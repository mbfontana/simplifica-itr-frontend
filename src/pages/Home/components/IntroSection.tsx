import { Stack, Grid, Typography, Box, useMediaQuery } from "@mui/material";
import { GreenButton } from "../../../components/GreenButton";
import { SideCarousel } from "./SideCarousel";
import { BottomCarousel } from "./BottomCarousel";
import { Navigate, useNavigate } from "react-router-dom";

const texts = [
  {
    title: "TRABALHE ONDE QUISER",
    text: "Jogue fora a papelada e tenha tudo na palma da sua mão.",
  },
  {
    title: "RAPIDEZ E PRATICIDADE",
    text: "Encontre o que você precisa com apenas alguns cliques.",
  },
  {
    title: "TRABALHE ONDE QUISER",
    text: "Jogue fora a papelada e tenha tudo na palma da sua mão.",
  },
  {
    title: "RAPIDEZ E PRATICIDADE",
    text: "Encontre o que você precisa com apenas alguns cliques.",
  },
];

export const IntroSection = () => {
  const navigate = useNavigate();
  const smBreakPoint = useMediaQuery("(min-width:769px)");

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={6}
      padding="60px 0"
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={6}
      >
        <Typography variant="h1" align="center">
          Economize o seu tempo, salve o seu dinheiro
        </Typography>
        <Typography variant="body1" align="center">
          Semanas de trabalho finalizadas em poucas horas. Automatize seus
          processos e cresça seu escritório.
        </Typography>
        <GreenButton
          variant="contained"
          onClick={() => navigate("register")}
          sx={{
            color: "white",
            height: "60px",
            width: "200px",
          }}
        >
          Assine Agora
        </GreenButton>
      </Stack>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={smBreakPoint ? 8 : 12}>
          <Box
            component="img"
            src="images/home_mock_up.png"
            alt="Logo"
            width="100%"
          />
        </Grid>
        <Grid
          item
          width="100%"
          xs={smBreakPoint ? 4 : 12}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {smBreakPoint ? (
            <SideCarousel texts={texts} />
          ) : (
            <BottomCarousel texts={texts} />
          )}
        </Grid>
      </Grid>
    </Stack>
  );
};
