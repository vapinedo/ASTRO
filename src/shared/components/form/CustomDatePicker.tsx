import es from "date-fns/locale/es";
import { Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { registerLocale } from "react-datepicker";
import { ReactNode, InputHTMLAttributes, useState } from "react";

registerLocale("es", es);

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

export default function CustomDatePicker(props: InputProps): ReactNode {

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
    <article className="mb-3">
      <label className="form-label">{label}</label>
      <div className="form-control">
        <Controller
          name="datosPersonales.fechaNacimiento"
          control={control}
          defaultValue={date}
          render={() => (
            <DatePicker
              locale={"es"}
              selected={date}
              onChange={handleChange}
              dateFormat="yyyy/MM/dd"
              {...rest}
            />
          )}
        />
      </div>
      <small className="text-danger">{error}</small>
    </article>
  );
}