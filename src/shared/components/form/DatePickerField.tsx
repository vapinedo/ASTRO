import "./Form.css";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ReactNode, InputHTMLAttributes, useState } from "react";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control?: any;
  setValue?: any;
  register?: any;
  label?: string;
  error?: string;
  className?: string;
  wrapperClass?: string;
}

export default function DatePickerField(props: InputProps): ReactNode {

  const {
    name,
    error,
    label,
    register,
    control,
    setValue,
    wrapperClass,
    ...rest
  } = props;

  const [date, setDate] = useState(new Date(Date.now()));

  function handleChange(dateChange: Date) {
    setValue(name, dateChange, {
      shouldDirty: true
    });
    setDate(dateChange);
  };

  return (
    <DatePicker
      {...rest}
      label={label}
      format="D/M/YYYY"
      {...register(name)}
      sx={{ width: "100%" }}
      onChange={handleChange}
    />
  );
}