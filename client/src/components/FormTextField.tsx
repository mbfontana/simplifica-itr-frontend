import { TextField } from "@mui/material";
import {
  ControllerRenderProps,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form";

type FormTextFieldProps = {
  field: ControllerRenderProps;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  label: string;
};

export const FormTextField = ({ field, error, label }: FormTextFieldProps) => {
  return (
    <TextField
      fullWidth
      label={label}
      type="text"
      error={error !== undefined}
      helperText={error?.message.toString()}
      {...field}
    />
  );
};
