import { Box, Grid, Stack, Typography } from "@mui/material";
import { NavBar } from "../../components/NavBar";
import useScrolPosition from "../../hooks/useScrollPosition";
import { useMediaQuery } from "@mui/material";
import { theme } from "../../global/theme";
import { Footer } from "../../components/Footer";
import { PlanDescriptionCard } from "./components/PlanDescriptionCard";
import { getAllSubscriptions } from "../../api/Subscription";
import { useQuery } from "react-query";

export const Subscriptions = () => {
  const scrollPosition = useScrolPosition();
  const mdBreakPoint = useMediaQuery("(min-width:1220px)");
  const smBreakPoint = useMediaQuery("(min-width:769px)");

  var margin;
  if (mdBreakPoint) margin = "0 auto";
  else if (smBreakPoint) margin = "0 40px";
  else margin = "0 20px";

  const queryPlansDetails = useQuery(["plansDetails"], getAllSubscriptions);
  const plansDetails = queryPlansDetails.data?.data;

  return plansDetails ? (
    <Box maxHeight="100vh" height="100vh">
      <Box
        position="fixed"
        top="0"
        width="100%"
        height="80px"
        zIndex={11}
        sx={{
          backgroundColor: theme.palette.background.default,
          boxShadow: scrollPosition > 30 ? "0 2px 10px 0 rgb(0 0 0 / 10%)" : "",
          transition: "all ease 0.5s",
        }}
      >
        <Box maxWidth="1220px" m={margin}>
          <NavBar />
        </Box>
      </Box>
      <Stack
        mt="80px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        paddingTop="64px"
        sx={{ backgroundColor: theme.palette.background.default }}
      >
        <Box maxWidth="1220px" m={margin} height="100%">
          <Typography
            fontSize={smBreakPoint ? "56px" : "36px"}
            fontWeight={500}
            textAlign="center"
          >
            Qual é o Simplifica ITR certo para mim?
          </Typography>
        </Box>
        <Box maxWidth="1220px" m={margin} marginTop="64px" height="100%">
          <Grid container direction="row" spacing={2}>
            {plansDetails.map((plan) => (
              <Grid item xs={12} md={4} key={plan.id}>
                <PlanDescriptionCard {...plan} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box maxWidth="1220px" width="100%" marginTop={20}>
          <Footer />
        </Box>
      </Stack>
    </Box>
  ) : (
    <></>
  );
};
