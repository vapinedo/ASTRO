import * as yup from "yup";
import { ReactNode } from "react";
import { Stack } from "@mui/material";
import Box from "../../../shared/containers/Box/Box";
import {DatosPersonales } from "../../../models/Curriculum";
import InputField from "../../../shared/components/form/InputField";
import SelectField from "../../../shared/components/form/SelectField";
import CustomDatePicker from "../../../shared/components/form/DatePickerField";

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

interface InputProps {
    watch: any;
    errors: any;
    control: any;
    setValue: any;
    register: any;
}

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
    fechaNacimiento: new Date(),
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
            is: "h",
            then: (datosPersonalesSchema) => datosPersonalesSchema.required("Tipo libreta es requerido"),
        }),
    numeroLibretaMilitar: yup
        .string()
        .when("sexo", {
            is: "h",
            then: (datosPersonalesSchema) => datosPersonalesSchema.required("Número libreta es requerido")
        }),
    distritoLibretaMilitar: yup
        .string()
        .when("sexo", {
            is: "h",
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

export default function DatosPersonalesForm(props: InputProps): ReactNode {

    const { errors, control, setValue, register, watch } = props;

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
                <SelectField
                    register={register}
                    label="Tipo de identificación"
                    options={tipoIdentificacionOptions}
                    name="datosPersonales.tipoIdentificacion"
                    error={errors.datosPersonales?.tipoIdentificacion?.message}
                />
                <InputField
                    type="text"
                    register={register}
                    label="Número de identificación"
                    name="datosPersonales.numeroIdentificacion"
                    error={errors.datosPersonales?.numeroIdentificacion?.message}
                />
                <SelectField
                    label="Sexo"
                    register={register}
                    options={sexoOptions}
                    name="datosPersonales.sexo"
                    error={errors.datosPersonales?.sexo?.message}
                />
                <SelectField
                    register={register}
                    label="Nacionalidad"
                    options={nacionalidadOptions}
                    name="datosPersonales.nacionalidad"
                    error={errors.datosPersonales?.nacionalidad?.message}
                />
                {(watch("datosPersonales.nacionalidad") === "ext") && (<SelectField
                    label="País"
                    register={register}
                    options={paisOptions}
                    name="datosPersonales.pais"
                    error={errors.datosPersonales?.pais?.message}
                />)}
            </Stack>

            <Stack direction="row" spacing={4} mt={4}>
                <CustomDatePicker
                    control={control}
                    register={register}
                    setValue={setValue}
                    label="Fecha de nacimiento"
                    name="datosPersonales.fechaNacimiento"
                    error={errors.datosPersonales?.fechaNacimiento?.message}
                />
                <SelectField
                    register={register}
                    options={paisOptions}
                    label="País de nacimiento"
                    name="datosPersonales.paisNacimiento"
                    error={errors.datosPersonales?.paisNacimiento?.message}
                />
                <SelectField
                    register={register}
                    options={departamentoOptions}
                    label="Departamento de nacimiento"
                    name="datosPersonales.departamentoNacimiento"
                    error={errors.datosPersonales?.departamentoNacimiento?.message}
                />
                <SelectField
                    register={register}
                    options={municipioOptions}
                    label="Municipio de nacimiento"
                    name="datosPersonales.municipioNacimiento"
                    error={errors.datosPersonales?.municipioNacimiento?.message}
                />
            </Stack>

            <Stack direction="row" spacing={4} mt={4}>
                <InputField
                    type="text"
                    register={register}
                    label="Dirección de correspondencia"
                    name="datosPersonales.direccionCorrespondencia"
                    error={errors.datosPersonales?.direccionCorrespondencia?.message}
                />
                <SelectField
                    register={register}
                    options={paisOptions}
                    label="País de correspondencia"
                    name="datosPersonales.paisCorrespondencia"
                    error={errors.datosPersonales?.paisCorrespondencia?.message}
                />
                <SelectField
                    register={register}
                    options={departamentoOptions}
                    label="Departamento de correspondencia"
                    name="datosPersonales.departamentoCorrespondencia"
                    error={errors.datosPersonales?.departamentoCorrespondencia?.message}
                />
                <SelectField
                    register={register}
                    options={municipioOptions}
                    label="Municipio de correspondencia"
                    name="datosPersonales.municipioCorrespondencia"
                    error={errors.datosPersonales?.municipioCorrespondencia?.message}
                />
            </Stack>

            <Stack direction="row" spacing={4} mt={4}>
                {(watch("datosPersonales.sexo") === "h") && (<SelectField
                    register={register}
                    label="Tipo libreta militar"
                    options={tipoLibretaOptions}
                    name="datosPersonales.tipolibretaMilitar"
                    error={errors.datosPersonales?.tipolibretaMilitar?.message}
                />)}
                {(watch("datosPersonales.sexo") === "h") && (<InputField
                    type="text"
                    register={register}
                    label="Número libreta militar"
                    name="datosPersonales.numeroLibretaMilitar"
                    error={errors.datosPersonales?.numeroLibretaMilitar?.message}
                />)}
                {(watch("datosPersonales.sexo") === "h") && (<InputField
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