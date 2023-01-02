import { Stack, Typography, useMediaQuery } from "@mui/material";
import { theme } from "../../../global/theme";

export const SecondSection = () => {
  const mdBreakPoint = useMediaQuery("(min-width:1044px)");
  const smBreakPoint = useMediaQuery("(min-width:769px)");

  var padding;
  if (mdBreakPoint) padding = "100px 150px";
  else if (smBreakPoint) padding = "90px 40px";
  else padding = "50px 20px";

  return (
    <Stack
      padding={padding}
      spacing={6}
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <Typography
        variant="h2"
        align="center"
        color="#fff"
        fontSize="3rem"
        fontWeight={500}
      >
        Gerencie, Organize e Simplifique
      </Typography>
      <Typography variant="body1" align="center" color="#fff">
        A plataforma facilita a gestão de todo o sistema de clientes e
        propriedades. Com o Simplifica ITR é possível calcular de forma
        automática e personalizada o Imposto sobre a Propriedade Territorial
        Rural - ITR.
      </Typography>
    </Stack>
  );
};
