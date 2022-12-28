import { Typography, Link } from "@mui/material";
import { theme } from "../global/theme";

type NavLinkProps = {
  url: string;
  text: string;
};

export const NavLink = ({ url, text }: NavLinkProps) => {
  return (
    <Link
      href={url}
      sx={{
        textDecoration: "none",
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="h3" textAlign="center">
        {text}
      </Typography>
    </Link>
  );
};
