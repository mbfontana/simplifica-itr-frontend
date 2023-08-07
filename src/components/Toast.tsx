import { Alert, Snackbar } from "@mui/material";

type ToastProps = {
  message: string;
  event: "success" | "error";
  isOpen: boolean;
};

export const Toast = ({ message, event, isOpen }: ToastProps) => {
  return (
    <Snackbar open={isOpen} autoHideDuration={6000}>
      <Alert severity={event} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
