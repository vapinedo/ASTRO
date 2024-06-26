import { ReactNode } from "react";
import Box from "@shared/containers/Box/Box";
import "@features/cv/styles/formComponents.css";
import { Controller, useFieldArray } from "react-hook-form";
import InputField from "@shared/components/form/InputField";
import SelectField from "@shared/components/form/SelectField";
import { FormControl, InputLabel, Stack } from "@mui/material";
import { idiomaOptions } from "@features/cv/constants/general";
import { InputProps } from "@features/cv/interfaces/InputProps";

const MAXIMUM_INSTANCES = 2;

export default function IdiomaForm(props: InputProps): ReactNode {
  const { errors, control, register } = props;

  const { fields, append, remove } = useFieldArray({
    name: "idiomas",
    control,
  });

  function handleAppend(event: any) {
    event.preventDefault();

    if (fields.length === MAXIMUM_INSTANCES) return;

    append({
      idioma: "",
      loHabla: "",
      loLee: "",
      loEscribe: "",
    });
  }

  return (
    <Box>
      <header className="section-header">
        <h4>Idiomas</h4>
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
              <InputField
                type="text"
                register={register}
                label="Idioma"
                name={`idiomas.${index}.idioma`}
                error={
                  errors.idiomas && errors.idiomas[index]?.loHabla?.message
                }
              />
              <FormControl sx={{ m: 1, width: "100%" }}>
                <InputLabel>Lo habla</InputLabel>
                <Controller
                  defaultValue=""
                  control={control}
                  name={`idiomas.${index}.loHabla`}
                  render={({ field: { onChange, value } }) => (
                    <SelectField
                      value={value}
                      onChange={onChange}
                      label="Lo habla"
                      options={idiomaOptions}
                      error={errors.idiomas?.loHabla?.message}
                    />
                  )}
                />
              </FormControl>
              <FormControl sx={{ m: 1, width: "100%" }}>
                <InputLabel>Lo lee</InputLabel>
                <Controller
                  defaultValue=""
                  control={control}
                  name={`idiomas.${index}.loLee`}
                  render={({ field: { onChange, value } }) => (
                    <SelectField
                      value={value}
                      onChange={onChange}
                      label="Lo lee"
                      options={idiomaOptions}
                      error={errors.idiomas?.loLee?.message}
                    />
                  )}
                />
              </FormControl>
              <FormControl sx={{ m: 1, width: "100%" }}>
                <InputLabel>Lo escribe</InputLabel>
                <Controller
                  defaultValue=""
                  control={control}
                  name={`idiomas.${index}.loEscribe`}
                  render={({ field: { onChange, value } }) => (
                    <SelectField
                      value={value}
                      onChange={onChange}
                      label="Lo escribe"
                      options={idiomaOptions}
                      error={errors.idiomas?.loEscribe?.message}
                    />
                  )}
                />
              </FormControl>
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
