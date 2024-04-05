import dayjs from "dayjs";
import { ReactNode } from "react";
import Box from "@shared/containers/Box/Box";
import "@features/curriculum/styles/formComponents.css";
import { Controller, useFieldArray } from "react-hook-form";
import InputField from "@shared/components/form/InputField";
import SelectField from "@shared/components/form/SelectField";
import { FormControl, InputLabel, Stack } from "@mui/material";
import DatePickerField from "@shared/components/form/DatePickerField";
import { InputProps } from "@features/curriculum/interfaces/InputProps";
import { SiNoOptions, modalidadAcademicaOptions } from "../constants/general";

const MAXIMUM_INSTANCES = 5;

export default function FormacionSuperiorForm(props: InputProps): ReactNode {
  const { errors, control, register } = props;

  const { fields, append, remove } = useFieldArray({
    name: "formacionSuperior",
    control,
  });

  function handleAppend(event: any) {
    event.preventDefault();

    if (fields.length === MAXIMUM_INSTANCES) return;

    append({
      modalidadAcademica: "",
      numeroSemestresAprobados: "",
      graduado: "",
      tituloObtenido: "",
      fechaTerminacion: null,
      numeroTarjetaProfesional: "",
    });
  }

  return (
    <Box>
      <header className="section-header">
        <h4>Formación Superior</h4>
        {fields.length < MAXIMUM_INSTANCES && (
          <button onClick={handleAppend} className="btn btn-sm btn-success">
            Agregar
          </button>
        )}
      </header>

      {fields.map((field, index) => (
        <div key={field.id} className={index > 0 ? "dynamic-fields" : ""}>
          <div className="inner">
            <Stack direction="row" spacing={4}>
              <FormControl sx={{ m: 1, width: "100%" }}>
                <InputLabel>Modalidad académica</InputLabel>
                <Controller
                  defaultValue=""
                  control={control}
                  name={`formacionSuperior.${index}.modalidadAcademica`}
                  render={({ field: { onChange, value } }) => (
                    <SelectField
                      value={value}
                      onChange={onChange}
                      label="Modalidad académica"
                      options={modalidadAcademicaOptions}
                      error={
                        errors.formacionSuperior?.modalidadAcademica?.message
                      }
                    />
                  )}
                />
              </FormControl>
              <FormControl sx={{ m: 1, width: "100%" }}>
                <InputLabel>Graduado</InputLabel>
                <Controller
                  defaultValue=""
                  control={control}
                  name={`formacionSuperior.${index}.graduado`}
                  render={({ field: { onChange, value } }) => (
                    <SelectField
                      value={value}
                      onChange={onChange}
                      label="Graduado"
                      options={SiNoOptions}
                      error={errors.formacionSuperior?.graduado?.message}
                    />
                  )}
                />
              </FormControl>
              <InputField
                type="text"
                register={register}
                label="Número semestres aprobados"
                name={`formacionSuperior.${index}.numeroSemestresAprobados`}
                error={
                  errors.formacionSuperior &&
                  errors.formacionSuperior[index]?.numeroSemestresAprobados
                    ?.message
                }
              />
            </Stack>

            <Stack direction="row" spacing={4} mt={4}>
              <InputField
                type="text"
                register={register}
                label="Título obtenido"
                name={`formacionSuperior.${index}.tituloObtenido`}
                error={
                  errors.formacionSuperior &&
                  errors.formacionSuperior[index]?.tituloObtenido?.message
                }
              />
              <Controller
                control={control}
                name={`formacionSuperior.${index}.fechaTerminacion`}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <DatePickerField
                    value={dayjs(value)}
                    onChange={onChange}
                    label="Fecha de terminación"
                  />
                )}
              />
              <InputField
                type="text"
                register={register}
                label="Número tarjeta profesional"
                name={`formacionSuperior.${index}.numeroTarjetaProfesional`}
                error={
                  errors.formacionSuperior &&
                  errors.formacionSuperior[index]?.numeroTarjetaProfesional
                    ?.message
                }
              />
            </Stack>
          </div>

          {index > 0 && (
            <i
              onClick={() => remove(index)}
              className="icon bx bx-trash-alt"
              title="Eliminar"
            ></i>
          )}
        </div>
      ))}
    </Box>
  );
}
