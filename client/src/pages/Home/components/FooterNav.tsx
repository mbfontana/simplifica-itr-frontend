import { useMediaQuery, Link, Stack, Typography, Grid } from "@mui/material";

type NavLinksObject = {
  text: string;
  url: string;
};

type FooterNavProps = {
  title: string;
  links: NavLinksObject[];
};

export const FooterNav = ({ title, links }: FooterNavProps) => {
  const smBreakPoint = useMediaQuery("(min-width:601px)");
  return (
    <Grid item xs={smBreakPoint ? 12 / 5 : 12} mb={4}>
      <Stack
        display="flex"
        direction="column"
        alignItems="flex-start"
        justifyContent="space-between"
        spacing={2}
      >
        <Typography variant="h1" fontSize="14px">
          {title.toLocaleUpperCase()}
        </Typography>
        {links.map((e, i) => {
          return (
            <Typography
              variant="body2"
              fontSize="14px"
              fontWeight={100}
              key={i}
            >
              <Link
                href={e.url}
                sx={{ textDecoration: "none", color: "#000" }}
                key={i}
              >
                {e.text}
              </Link>
            </Typography>
          );
        })}
      </Stack>
    </Grid>
  );
};
