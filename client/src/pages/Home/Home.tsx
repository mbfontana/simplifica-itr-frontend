import Box from "@mui/material/Box";
import { theme } from "../../global/theme";
import { NavBar } from "./components/NavBar";
import useScrolPosition from "../../hooks/useScrollPosition";
import { useMediaQuery } from "@mui/material";
import { IntroSection } from "./components/IntroSection";
import { SecondSection } from "./components/SecondSection";

export const Home = () => {
  const scrollPosition = useScrolPosition();
  const mdBreakPoint = useMediaQuery("(min-width:1220px)");
  const smBreakPoint = useMediaQuery("(min-width:769px)");

  var margin;
  if (mdBreakPoint) margin = "0 auto";
  else if (smBreakPoint) margin = "0 40px";
  else margin = "0 20px";

  return (
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
      <Box
        mt="80px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: "#F6F8FA" }}
      >
        <Box maxWidth="1220px" m={margin} height="100%">
          <IntroSection />
        </Box>
        <Box width="100%" padding="60px 0 0 0">
          <SecondSection />
        </Box>
        <Box width="100%" padding="60px 0" sx={{ backgroundColor: "white" }}>
          Section 3
        </Box>
      </Box>
    </Box>
  );
};
