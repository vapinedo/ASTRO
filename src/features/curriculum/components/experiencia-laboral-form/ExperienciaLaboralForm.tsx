import "../FormComponents.css";
import { ReactNode } from "react";
import { FormControl, InputLabel, Stack } from "@mui/material";
import { Controller, useFieldArray } from "react-hook-form";
import Box from "../../../../shared/containers/Box/Box";
import InputField from "../../../../shared/components/form/InputField";
import SelectField from "../../../../shared/components/form/SelectField";
import DatePickerField from "../../../../shared/components/form/DatePickerField";
import dayjs from "dayjs";
import { InputProps } from "../../interfaces/InputProps";

const MAXIMUM_INSTANCES = 4;

export default function experienciaLaboralForm(props: InputProps): ReactNode {

    const { errors, control, setValue, register } = props;

    const { fields, append, remove } = useFieldArray({
        name: "experienciaLaboral",
        control
    });

    function handleAppend(event: any) {
        event.preventDefault();

        if (fields.length === MAXIMUM_INSTANCES) return;

        append({
            empresa: "",
            tipoEmpresa: "",
            pais: "",
            departamento: "",
            municipio: "",
            email: "",
            telefono: "",
            fechaIngreso: null,
            fechaRetiro: null,
            cargo: "",
            dependencia: "",
            direccion: "",
        });
    }

    return (
        <Box>
            <header className="section-header">
                <h4>Experiencia Laboral</h4>
                {(fields.length < MAXIMUM_INSTANCES) && <button onClick={handleAppend} className="btn btn-sm btn-success">Agregar</button>}
            </header>

            {fields.map((field, index) => (
                <div key={field.id} className={index > 0 ? "dynamic-fields" : ""}>
                    <div className="inner">
                        <Stack direction="row" spacing={4}>
                            <InputField
                                type="text"
                                register={register}
                                label="Nombre de la empresa"
                                name={`experienciaLaboral.${index}.empresa`}
                                error={errors.experienciaLaboral && errors.experienciaLaboral[index]?.empresa?.message}
                            />
                            <FormControl sx={{ m: 1, width: '100%' }}>
                                <InputLabel>Tipo empresa</InputLabel>
                                <Controller
                                    defaultValue=""
                                    control={control}
                                    name={`experienciaLaboral.${index}.tipoEmpresa`}
                                    render={({ field: { onChange, value } }) => (
                                        <SelectField
                                            value={value}
                                            onChange={onChange}
                                            label="Tipo empresa"
                                            options={tipoEmpresaOptions}
                                            error={errors.experienciaLaboral?.tipoEmpresa?.message}
                                        />
                                    )}
                                />
                            </FormControl>
                            <InputField
                                type="text"
                                register={register}
                                label="Cargo"
                                name={`experienciaLaboral.${index}.cargo`}
                                error={errors.experienciaLaboral && errors.experienciaLaboral[index]?.cargo?.message}
                            />
                            <InputField
                                type="text"
                                register={register}
                                label="Dependencia"
                                name={`experienciaLaboral.${index}.dependencia`}
                                error={errors.experienciaLaboral && errors.experienciaLaboral[index]?.dependencia?.message}
                            />
                        </Stack>

                        <Stack direction="row" spacing={4} mt={4}>
                            <FormControl sx={{ m: 1, width: '100%' }}>
                                <InputLabel>País</InputLabel>
                                <Controller
                                    defaultValue=""
                                    control={control}
                                    name={`experienciaLaboral.${index}.pais`}
                                    render={({ field: { onChange, value } }) => (
                                        <SelectField
                                            value={value}
                                            onChange={onChange}
                                            label="País"
                                            options={paisOptions}
                                            error={errors.experienciaLaboral?.pais?.message}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '100%' }}>
                                <InputLabel>Departamento</InputLabel>
                                <Controller
                                    defaultValue=""
                                    control={control}
                                    name={`experienciaLaboral.${index}.departamento`}
                                    render={({ field: { onChange, value } }) => (
                                        <SelectField
                                            value={value}
                                            onChange={onChange}
                                            label="Departamento"
                                            options={departamentoOptions}
                                            error={errors.experienciaLaboral?.departamento?.message}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '100%' }}>
                                <InputLabel>Municipio</InputLabel>
                                <Controller
                                    defaultValue=""
                                    control={control}
                                    name={`experienciaLaboral.${index}.municipio`}
                                    render={({ field: { onChange, value } }) => (
                                        <SelectField
                                            value={value}
                                            onChange={onChange}
                                            label="Municipio"
                                            options={municipioOptions}
                                            error={errors.experienciaLaboral?.municipio?.message}
                                        />
                                    )}
                                />
                            </FormControl>
                            <InputField
                                type="text"
                                register={register}
                                label="Dirección"
                                name={`experienciaLaboral.${index}.direccion`}
                                error={errors.experienciaLaboral && errors.experienciaLaboral[index]?.direccion?.message}
                            />
                        </Stack>

                        <Stack direction="row" spacing={4} mt={4}>
                            <InputField
                                type="text"
                                register={register}
                                label="Email de la empresa"
                                name={`experienciaLaboral.${index}.email`}
                                error={errors.experienciaLaboral && errors.experienciaLaboral[index]?.email?.message}
                            />
                            <InputField
                                type="text"
                                register={register}
                                label="Teléfono de la empresa"
                                name={`experienciaLaboral.${index}.telefono`}
                                error={errors.experienciaLaboral && errors.experienciaLaboral[index]?.telefono?.message}
                            />
                            <Controller
                                control={control}
                                name={`experienciaLaboral.${index}.fechaIngreso`}
                                render={({
                                    field: { onChange, value },
                                    fieldState: { error }
                                }) => (
                                    <DatePickerField
                                        value={dayjs(value)}
                                        onChange={onChange}
                                        label="Fecha ingreso"
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name={`experienciaLaboral.${index}.fechaRetiro`}
                                render={({
                                    field: { onChange, value },
                                    fieldState: { error }
                                }) => (
                                    <DatePickerField
                                        value={dayjs(value)}
                                        onChange={onChange}
                                        label="Fecha retiro"
                                    />
                                )}
                            />
                        </Stack>
                    </div>
                    {index > 0 && <i onClick={() => remove(index)} className="icon bx bx-trash-alt" title="Eliminar"></i>}
                </div>
            ))}
        </Box>
    )
}