import "./Form.css";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ReactNode, InputHTMLAttributes, useState } from "react";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  control?: any;
  setValue?: any;
  register?: any;
  label?: string;
  value: any;
  onChange: any;
  error?: string;
  className?: string;
  wrapperClass?: string;
}

export default function DatePickerField(props: InputProps): ReactNode {

  const {
    error,
    label,
    value,
    register,
    onChange,
    control,
    setValue,
    wrapperClass,
    ...rest
  } = props;

  return (
    // <DatePicker
    //   value={value}
    //   label={label}
    //   format="D/M/YYYY"
    //   onChange={onChange}
    //   sx={{ width: "100%" }}
    // />
    <DatePicker
      onChange={onChange}
      value={value}
      sx={{ width: "100%" }}
      label={label}
      // slotProps={{ textField: { error: !!error, helperText: error?.message } }}
  />
  );
}