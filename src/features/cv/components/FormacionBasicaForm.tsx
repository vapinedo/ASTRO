import dayjs from "dayjs";
import { ReactNode } from "react";
import { Controller } from "react-hook-form";
import Box from "@shared/containers/Box/Box";
import { InputProps } from "../interfaces/InputProps";
import InputField from "@shared/components/form/InputField";
import SelectField from "@shared/components/form/SelectField";
import * as cvConstants from "@features/cv/constants/general";
import { FormControl, InputLabel, Stack } from "@mui/material";
import DatePickerField from "@shared/components/form/DatePickerField";

export default function FormacionBasicaForm(props: InputProps): ReactNode {
  const { errors, control, register } = props;

  return (
    <Box>
      <header className="section-header">
        <h4>Formación Básica</h4>
      </header>

      <Stack direction="row" spacing={4}>
        <FormControl sx={{ m: 1, width: "100%" }}>
          <InputLabel>Educación básica</InputLabel>
          <Controller
            defaultValue=""
            control={control}
            name="formacionBasica.educacionBasica"
            render={({ field: { onChange, value } }) => (
              <SelectField
                value={value}
                onChange={onChange}
                label="Nacionalidad"
                options={cvConstants.educacionBasicaOptions}
                error={errors.datosPersonales?.educacionBasica?.message}
              />
            )}
          />
        </FormControl>
        <InputField
          type="text"
          register={register}
          label="Título obtenido"
          name="formacionBasica.tituloObtenido"
          error={errors.formacionBasica?.tituloObtenido?.message}
        />
        <Controller
          control={control}
          name="formacionBasica.fechaGraduacion"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <DatePickerField
              value={dayjs(value)}
              onChange={onChange}
              label="Fecha de graduación"
            />
          )}
        />
      </Stack>
    </Box>
  );
}
