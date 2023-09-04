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
  type?: string;
};

export const FormTextField = ({
  field,
  error,
  label,
  type,
}: FormTextFieldProps) => {
  return (
    <TextField
      fullWidth
      label={label}
      type={type ? type : "text"}
      error={error !== undefined}
      helperText={error?.message.toString()}
      {...field}
    />
  );
};