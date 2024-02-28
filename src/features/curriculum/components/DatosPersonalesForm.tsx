import dayjs from "dayjs";
import * as yup from "yup";
import { ReactNode } from "react";
import { Controller } from "react-hook-form";
import Box from "../../../shared/containers/Box/Box";
import { DatosPersonales } from "../../../models/Curriculum";
import { FormControl, InputLabel, Stack } from "@mui/material";
import InputField from "../../../shared/components/form/InputField";
import SelectField from "../../../shared/components/form/SelectField";
import DatePickerField from "../../../shared/components/form/DatePickerField";

const tipoIdentificacionOptions = [
    { key: "cc", value: "Cedula de ciudadanía" },
    { key: "ce", value: "Cedula de exntranjería" },
    { key: "pas", value: "Pasaporte" },
];
const sexoOptions = [
    { key: "f", value: "Femenino" },
    { key: "m", value: "Masculino" },
];
const nacionalidadOptions = [
    { key: "col", value: "Colombiano" },
    { key: "ext", value: "Extranjero" },
];
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
const tipoLibretaOptions = [
    { key: "primera", value: "Primera clase" },
    { key: "segunda", value: "Segunda clase" },
];

export const datosPersonalesDefaultValues: DatosPersonales = {
    primerApellido: "",
    segundoApellido: "",
    nombres: "",
    tipoIdentificacion: "",
    numeroIdentificacion: "",
    sexo: "",
    nacionalidad: "",
    pais: "",
    tipolibretaMilitar: "",
    numeroLibretaMilitar: "",
    distritoLibretaMilitar: "",
    fechaNacimiento: null,
    paisNacimiento: "",
    departamentoNacimiento: "",
    municipioNacimiento: "",
    direccionCorrespondencia: "",
    paisCorrespondencia: "",
    departamentoCorrespondencia: "",
    municipioCorrespondencia: "",
    email: "",
};

export const datosPersonalesSchema = yup.object().shape({
    primerApellido: yup
        .string()
        .min(3, "Mínimo 3 caracteres")
        .required("Primer apellido es requerido"),
    segundoApellido: yup
        .string()
        .min(3, "Mínimo 3 caracteres")
        .required("Segundo apellido es requerido"),
    nombres: yup
        .string()
        .min(3, "Mínimo 3 caracteres")
        .required("Nombres es requerido"),
    tipoIdentificacion: yup
        .string()
        .required("Tipo ocumento es requerido"),
    numeroIdentificacion: yup
        .string()
        .typeError("Solo ingrese números")
        .required("Número documento es requerido"),
    sexo: yup
        .string()
        .required("Sexo es requerido"),
    nacionalidad: yup
        .string()
        .required("Nacionalidad es requerido"),
    pais: yup
        .string()
        .when("nacionalidad", {
            is: "ext",
            then: (datosPersonalesSchema) => datosPersonalesSchema.required("País es requerido"),
        }),
    tipolibretaMilitar: yup
        .string()
        .when("sexo", {
            is: "m",
            then: (datosPersonalesSchema) => datosPersonalesSchema.required("Tipo libreta es requerido"),
        }),
    numeroLibretaMilitar: yup
        .string()
        .when("sexo", {
            is: "m",
            then: (datosPersonalesSchema) => datosPersonalesSchema.required("Número libreta es requerido")
        }),
    distritoLibretaMilitar: yup
        .string()
        .when("sexo", {
            is: "m",
            then: (datosPersonalesSchema) => datosPersonalesSchema.required("Distrito libreta es requerido")
        }),
    fechaNacimiento: yup
        .date()
        .required("Fecha es requerido"),
    paisNacimiento: yup
        .string()
        .required("País es requerido"),
    departamentoNacimiento: yup
        .string()
        .required("Departamento es requerido"),
    municipioNacimiento: yup
        .string()
        .required("Município es requerido"),
    direccionCorrespondencia: yup
        .string()
        .min(7, "Mínimo 7 caracteres")
        .required("Dirección requerido"),
    paisCorrespondencia: yup
        .string()
        .required("País es requerido"),
    departamentoCorrespondencia: yup
        .string()
        .required("Departamento es requerido"),
    municipioCorrespondencia: yup
        .string()
        .required("município es requerido"),
    email: yup
        .string()
        .email("Email es inválido")
        .required("Email es requerido"),
});

interface InputProps {
    watch: any;
    errors: any;
    control: any;
    setValue: any;
    register: any;
}

export default function DatosPersonalesForm(props: InputProps): ReactNode {
    const { errors, control, setValue, register, watch } = props;

    function testDate(date) {
        if (date instanceof Date) {
            console.log("Si");
            return dayjs(date);
        } else {
            console.log("No");
            console.log(date?.$d);
            return date?.$d;
        }
    }

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
                <FormControl sx={{ m: 1, width: '100%' }}>
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
                                options={tipoIdentificacionOptions}
                                error={errors.datosPersonales?.tipoIdentificacion?.message}
                            />
                        )}
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '100%' }}>
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
                                options={sexoOptions}
                                error={errors.datosPersonales?.sexo?.message}
                            />
                        )}
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '100%' }}>
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
                                options={nacionalidadOptions}
                                error={errors.datosPersonales?.nacionalidad?.message}
                            />
                        )}
                    />
                </FormControl>
                {(watch("datosPersonales.nacionalidad") === "ext") && (
                    <FormControl sx={{ m: 1, width: '100%' }}>
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
                                    options={paisOptions}
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
                    render={({
                        field: { onChange, value },
                        fieldState: { error }
                    }) => (
                        <DatePickerField 
                            // value={testDate(value)}
                            value={dayjs(value)}
                            onChange={onChange}
                            label="Fecha de nacimiento"
                        />
                    )}
                />
                <FormControl sx={{ m: 1, width: '100%' }}>
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
                                options={paisOptions}
                                error={errors.datosPersonales?.paisNacimiento?.message}
                            />
                        )}
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '100%' }}>
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
                                options={departamentoOptions}
                                error={errors.datosPersonales?.departamentoNacimiento?.message}
                            />
                        )}
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '100%' }}>
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
                                options={municipioOptions}
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
                <FormControl sx={{ m: 1, width: '100%' }}>
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
                                options={paisOptions}
                                error={errors.datosPersonales?.paisCorrespondencia?.message}
                            />
                        )}
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '100%' }}>
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
                                options={departamentoOptions}
                                error={errors.datosPersonales?.departamentoCorrespondencia?.message}
                            />
                        )}
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '100%' }}>
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
                                options={municipioOptions}
                                error={errors.datosPersonales?.municipioCorrespondencia?.message}
                            />
                        )}
                    />
                </FormControl>
            </Stack>

            <Stack direction="row" spacing={4} mt={4}>
                {(watch("datosPersonales.sexo") === "m") && (
                    <FormControl sx={{ m: 1, width: '100%' }}>
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
                                    options={tipoLibretaOptions}
                                    error={errors.datosPersonales?.tipolibretaMilitar?.message}
                                />
                            )}
                        />
                    </FormControl>
                )}
                {(watch("datosPersonales.sexo") === "m") && (<InputField
                    type="text"
                    register={register}
                    label="Número libreta militar"
                    name="datosPersonales.numeroLibretaMilitar"
                    error={errors.datosPersonales?.numeroLibretaMilitar?.message}
                />)}
                {(watch("datosPersonales.sexo") === "m") && (<InputField
                    type="text"
                    register={register}
                    label="Distrito libreta militar"
                    name="datosPersonales.distritoLibretaMilitar"
                    error={errors.datosPersonales?.distritoLibretaMilitar?.message}
                />)}
            </Stack>
        </Box>
    )
}