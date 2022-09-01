import { Button, Slide, Stack } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, useState } from "react";
import { RegisterStepper } from "./RegisterStepper";

type RegisterDialogProps = {
  open: boolean;
};

export const RegisterDialog = ({ open }: RegisterDialogProps) => {
  const [openDial, setOpenDial] = useState(open);

  const handleClose = () => {
    setOpenDial(false);
  };

  return (
    <Dialog
      open={openDial}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <Stack sx={{ pl: 4, pr: 4, pt: 2, pb: 2 }}>
        <RegisterStepper />
      </Stack>
    </Dialog>
  );
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
