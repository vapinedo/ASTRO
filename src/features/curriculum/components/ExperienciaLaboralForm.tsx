import * as yup from "yup";
import "./FormComponents.css";
import { ReactNode } from "react";
import { FormControl, InputLabel, Stack } from "@mui/material";
import { Controller, useFieldArray } from "react-hook-form";
import Box from "../../../shared/containers/Box/Box";
import { ExperienciaLaboral } from "../../../models/Curriculum";
import InputField from "../../../shared/components/form/InputField";
import SelectField from "../../../shared/components/form/SelectField";
import DatePickerField from "../../../shared/components/form/DatePickerField";
import dayjs from "dayjs";

const paisOptions = [
    { key: "Colombia", value: "Colombia" },
    { key: "Venezuela", value: "Venezuela" },
];
const departamentoOptions = [
    { key: "La Guajira", value: "La Guajira" },
    { key: "Atlantico", value: "Atlantico" },
];
const municipioOptions = [
    { key: "Uribia", value: "Uribia" },
    { key: "Manure", value: "Manaure" },
    { key: "Soledad", value: "Soledad" },
];
const tipoEmpresaOptions = [
    { key: "publica", value: "Pública" },
    { key: "privada", value: "Privada" },
];

interface InputProps {
    errors: any;
    control: any;
    setValue: any;
    register: any;
}

const MAXIMUM_INSTANCES = 4;

export const experienciaLaboralDefaultValues: ExperienciaLaboral = {
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
};

export const experienciaLaboralSchema = yup.object().shape({
    empresa: yup
        .string()
        .min(3, "Mínimo 3 caracteres")
        .required("Empresa es requerido"),
    tipoEmpresa: yup
        .string()
        .required("Tipo empresa es requerido"),
    pais: yup
        .string()
        .required("País es requerido"),
    departamento: yup
        .string()
        .required("Departamento es requerido"),
    municipio: yup
        .string()
        .required("Municipio es requerido"),
    email: yup
        .string()
        .required("Email es requerido"),
    telefono: yup
        .string()
        .required("Teléfono es requerido"),
    fechaIngreso: yup
        .date()
        .required("Fecha ingreso es requerido"),
    fechaRetiro: yup
        .date()
        .required("Fecha retiro es requerido"),
    cargo: yup
        .string()
        .min(6, "Mínimo 6 caracteres")
        .required("Cargo es requerido"),
    dependencia: yup
        .string()
        .min(4, "Mínimo 4 caracteres")
        .required("Dependencia es requerido"),
    direccion: yup
        .string()
        .min(4, "Mínimo 4 caracteres")
        .required("Dirección es requerido"),
});

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