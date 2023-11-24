import { Box, CircularProgress } from "@mui/material";

type LoadingSpinnerProps = {
  size?: number;
};

export const LoadingSpinner = ({ size }: LoadingSpinnerProps) => {
  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress color="inherit" size={size || 40} />
    </Box>
  );
};
