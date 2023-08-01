import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import {
  ControllerRenderProps,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form";

type FormSelectProps = {
  field: ControllerRenderProps;
  data: Array<string>;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  label: string;
};

export const FormSelect = ({ field, error, label, data }: FormSelectProps) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <>
      <InputLabel id="standard-label">{label}</InputLabel>
      <Select
        labelId="standard-label"
        id="label"
        value={value}
        onChange={handleChange}
        label={label}
        error={error !== undefined}
        variant="standard"
        {...field}
      >
        {data.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};
