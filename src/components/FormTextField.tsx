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
  label?: string;
  type?: string;
  disabled?: boolean;
};

export const FormTextField = ({
  field,
  error,
  label,
  type,
  disabled,
}: FormTextFieldProps) => {
  return (
    <TextField
      fullWidth
      label={label || ""}
      type={type ? type : "text"}
      error={error !== undefined}
      helperText={error?.message.toString()}
      disabled={disabled}
      {...field}
    />
  );
};
