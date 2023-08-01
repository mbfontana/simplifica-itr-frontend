import { Stack, Box, Typography, Link, useMediaQuery } from "@mui/material";

type TextSlicePros = {
  icon?: { url: string; alt: string };
  title: string;
  text: string;
  redirect: string;
};

export const TextSlice = ({ icon, title, text, redirect }: TextSlicePros) => {
  const xsBreakPoint = useMediaQuery("(min-width:601px)");
  return (
    <Stack spacing={2}>
      {icon ? (
        <Box component="img" src={icon.url} alt={icon.alt} width="15%" />
      ) : (
        <></>
      )}
      <Typography variant="h1" fontSize={xsBreakPoint ? "38px" : "24px"}>
        {title}
      </Typography>
      <Typography variant="body1" fontSize={xsBreakPoint ? "24px" : "18px"}>
        {text}
      </Typography>
      <Typography variant="h1" fontSize="16px">
        <Link href={redirect} sx={{ textDecoration: "none" }}>
          SAIBA MAIS →
        </Link>
      </Typography>
    </Stack>
  );
};
