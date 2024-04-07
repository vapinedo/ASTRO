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

export default function DatosPersonalesForm(props: InputProps): ReactNode {
  const { errors, control, register, watch } = props;

  return (
    <Box>
      <header className="section-header">
        <h4>Datos Personales</h4>
      </header>

      <Stack direction="row" spacing={4}>
        <InputField
          autoFocus
          type="text"
          register={register}
          label="Primer apellido"
          name="datosPersonales.primerApellido"
          error={errors.datosPersonales?.primerApellido?.message}
        />
        <InputField
          type="text"
          register={register}
          label="Segundo apellido"
          name="datosPersonales.segundoApellido"
          error={errors.datosPersonales?.segundoApellido?.message}
        />
        <InputField
          type="text"
          label="Nombres"
          register={register}
          name="datosPersonales.nombres"
          error={errors.datosPersonales?.nombres?.message}
        />
        <InputField
          type="email"
          label="Email"
          register={register}
          name="datosPersonales.email"
          error={errors.datosPersonales?.email?.message}
        />
      </Stack>

      <Stack direction="row" spacing={4} mt={4}>
        <FormControl sx={{ m: 1, width: "100%" }}>
          <InputLabel>Tipo de identifiación</InputLabel>
          <Controller
            defaultValue=""
            control={control}
            name="datosPersonales.tipoIdentificacion"
            render={({ field: { onChange, value } }) => (
              <SelectField
                value={value}
                onChange={onChange}
                label="Tipo de identificación"
                options={cvConstants.tipoIdentificacionOptions}
                error={errors.datosPersonales?.tipoIdentificacion?.message}
              />
            )}
          />
        </FormControl>
        <InputField
          type="text"
          label="Número de identificación"
          register={register}
          name="datosPersonales.numeroIdentificacion"
          error={errors.datosPersonales?.numeroIdentificacion?.message}
        />
        <FormControl sx={{ m: 1, width: "100%" }}>
          <InputLabel>Sexo</InputLabel>
          <Controller
            defaultValue=""
            control={control}
            name="datosPersonales.sexo"
            render={({ field: { onChange, value } }) => (
              <SelectField
                value={value}
                onChange={onChange}
                label="Sexo"
                options={cvConstants.sexoOptions}
                error={errors.cvConstants.datosPersonales?.sexo?.message}
              />
            )}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "100%" }}>
          <InputLabel>Nacionalidad</InputLabel>
          <Controller
            defaultValue=""
            control={control}
            name="datosPersonales.nacionalidad"
            render={({ field: { onChange, value } }) => (
              <SelectField
                value={value}
                onChange={onChange}
                label="Nacionalidad"
                options={cvConstants.nacionalidadOptions}
                error={
                  errors.cvConstants.datosPersonales?.nacionalidad?.message
                }
              />
            )}
          />
        </FormControl>
        {watch("datosPersonales.nacionalidad") === "ext" && (
          <FormControl sx={{ m: 1, width: "100%" }}>
            <InputLabel>País</InputLabel>
            <Controller
              defaultValue=""
              control={control}
              name="datosPersonales.pais"
              render={({ field: { onChange, value } }) => (
                <SelectField
                  value={value}
                  onChange={onChange}
                  label="País"
                  options={cvConstants.paisOptions}
                  error={errors.datosPersonales?.pais?.message}
                />
              )}
            />
          </FormControl>
        )}
      </Stack>

      <Stack direction="row" spacing={4} mt={4}>
        <Controller
          control={control}
          name="datosPersonales.fechaNacimiento"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <DatePickerField
              value={dayjs(value)}
              onChange={onChange}
              label="Fecha de nacimiento"
            />
          )}
        />
        <FormControl sx={{ m: 1, width: "100%" }}>
          <InputLabel>País de nacimiento</InputLabel>
          <Controller
            defaultValue=""
            control={control}
            name="datosPersonales.paisNacimiento"
            render={({ field: { onChange, value } }) => (
              <SelectField
                value={value}
                onChange={onChange}
                label="País de nacimiento"
                options={cvConstants.paisOptions}
                error={errors.datosPersonales?.paisNacimiento?.message}
              />
            )}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "100%" }}>
          <InputLabel>Departamento de nacimiento</InputLabel>
          <Controller
            defaultValue=""
            control={control}
            name="datosPersonales.departamentoNacimiento"
            render={({ field: { onChange, value } }) => (
              <SelectField
                value={value}
                onChange={onChange}
                label="Departamento de nacimiento"
                options={cvConstants.departamentoOptions}
                error={errors.datosPersonales?.departamentoNacimiento?.message}
              />
            )}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "100%" }}>
          <InputLabel>Municipio de nacimiento</InputLabel>
          <Controller
            defaultValue=""
            control={control}
            name="datosPersonales.municipioNacimiento"
            render={({ field: { onChange, value } }) => (
              <SelectField
                value={value}
                onChange={onChange}
                label="Municipio de nacimiento"
                options={cvConstants.municipioOptions}
                error={errors.datosPersonales?.municipioNacimiento?.message}
              />
            )}
          />
        </FormControl>
      </Stack>

      <Stack direction="row" spacing={4} mt={4}>
        <InputField
          type="text"
          register={register}
          label="Dirección de correspondencia"
          name="datosPersonales.direccionCorrespondencia"
          error={errors.datosPersonales?.direccionCorrespondencia?.message}
        />
        <FormControl sx={{ m: 1, width: "100%" }}>
          <InputLabel>País de correspondencia</InputLabel>
          <Controller
            defaultValue=""
            control={control}
            name="datosPersonales.paisCorrespondencia"
            render={({ field: { onChange, value } }) => (
              <SelectField
                value={value}
                onChange={onChange}
                label="País de correspondencia"
                options={cvConstants.paisOptions}
                error={errors.datosPersonales?.paisCorrespondencia?.message}
              />
            )}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "100%" }}>
          <InputLabel>Departamento de correspondencia</InputLabel>
          <Controller
            defaultValue=""
            control={control}
            name="datosPersonales.departamentoCorrespondencia"
            render={({ field: { onChange, value } }) => (
              <SelectField
                value={value}
                onChange={onChange}
                label="Departamento de correspondencia"
                options={cvConstants.departamentoOptions}
                error={
                  errors.datosPersonales?.departamentoCorrespondencia?.message
                }
              />
            )}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "100%" }}>
          <InputLabel>Municipio de correspondencia</InputLabel>
          <Controller
            defaultValue=""
            control={control}
            name="datosPersonales.municipioCorrespondencia"
            render={({ field: { onChange, value } }) => (
              <SelectField
                value={value}
                onChange={onChange}
                label="Municipio de correspondencia"
                options={cvConstants.municipioOptions}
                error={
                  errors.datosPersonales?.municipioCorrespondencia?.message
                }
              />
            )}
          />
        </FormControl>
      </Stack>

      <Stack direction="row" spacing={4} mt={4}>
        {watch("datosPersonales.sexo") === "m" && (
          <FormControl sx={{ m: 1, width: "100%" }}>
            <InputLabel>Tipo libreta militar</InputLabel>
            <Controller
              defaultValue=""
              control={control}
              name="datosPersonales.tipolibretaMilitar"
              render={({ field: { onChange, value } }) => (
                <SelectField
                  value={value}
                  onChange={onChange}
                  label="Tipo libreta militar"
                  options={cvConstants.tipoLibretaOptions}
                  error={errors.datosPersonales?.tipolibretaMilitar?.message}
                />
              )}
            />
          </FormControl>
        )}
        {watch("datosPersonales.sexo") === "m" && (
          <InputField
            type="text"
            register={register}
            label="Número libreta militar"
            name="datosPersonales.numeroLibretaMilitar"
            error={errors.datosPersonales?.numeroLibretaMilitar?.message}
          />
        )}
        {watch("datosPersonales.sexo") === "m" && (
          <InputField
            type="text"
            register={register}
            label="Distrito libreta militar"
            name="datosPersonales.distritoLibretaMilitar"
            error={errors.datosPersonales?.distritoLibretaMilitar?.message}
          />
        )}
      </Stack>
    </Box>
  );
}
