import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const GreenButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "white",
  textTransform: "none",
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));
