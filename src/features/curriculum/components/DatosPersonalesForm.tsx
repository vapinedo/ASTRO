import * as yup from "yup";
import { ReactNode } from "react";
import Box from "../../../shared/containers/Box/Box";
import Input from "../../../shared/components/form/Input";
import Select from "../../../shared/components/form/Select";
import { DatosPersonales } from "../../../models/CurriculumNuevoInterface";
import CustomDatePicker from "../../../shared/components/form/CustomDatePicker";

const tipoIdentificacionOptions = [
    { key: "cc", value: "Cedula de ciudadanía" },
    { key: "ce", value: "Cedula de exntranjería" },
    { key: "pas", value: "Pasaporte" },
];
const sexoOptions = [
    { key: "m", value: "Hombre" },
    { key: "f", value: "Mujer" },
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
    TipolibretaMilitar: "",
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
        .required("Primer apellido es requerido"),
    segundoApellido: yup
        .string()
        .required("Segundo apellido es requerido"),
    nombres: yup
        .string()
        .required("Nombres es requerido"),
    tipoIdentificacion: yup
        .string()
        .required("Documento de identificacion es requerido"),
    numeroIdentificacion: yup
        .string()
        .required("Número de identificacion es requerido"),
    sexo: yup
        .string()
        .required("Sexo es requerido"),
    nacionalidad: yup
        .string()
        .required("Nacionalidad es requerido"),
    pais: yup
        .string()
        .required("País es requerido"),
    TipolibretaMilitar: yup
        .string()
        .required("Tipo libreta militar es requerido"),
    numeroLibretaMilitar: yup
        .string()
        .required("Número libreta militar es requerido"),
    distritoLibretaMilitar: yup
        .string()
        .required("Distrito libreta militar es requerido"),
    fechaNacimiento: yup
        .string()
        .required("Fecha nacimiento es requerido"),
    paisNacimiento: yup
        .string()
        .required("País nacimiento es requerido"),
    departamentoNacimiento: yup
        .string()
        .required("Departamento nacimiento es requerido"),
    municipioNacimiento: yup
        .string()
        .required("Município nacimiento es requerido"),
    direccionCorrespondencia: yup
        .string()
        .required("Dirección correspondencia es requerido"),
    paisCorrespondencia: yup
        .string()
        .required("País correspondencia es requerido"),
    departamentoCorrespondencia: yup
        .string()
        .required("Departamento correspondencia es requerido"),
    municipioCorrespondencia: yup
        .string()
        .required("município correspondencia es requerido"),
    email: yup
        .string()
        .email("Email es inválido")
        .required("Email es requerido"),       
});

export default function DatosPersonalesForm(props: InputProps): ReactNode {

    const { errors, control, setValue, register } = props;

    return (
        <Box  wrapperClass="row">
            <h4 className="mb-4">Datos Personales</h4>

            <Input
                autoFocus
                type="text"
                register={register}
                label="Primer apellido"
                wrapperClass="mb-3 col-md-3"
                name="datosPersonales.primerApellido"
                error={errors.datosPersonales?.primerApellido?.message}
            />
            <Input
                type="text"
                register={register}
                label="Segundo apellido"
                wrapperClass="mb-3 col-md-3"
                name="datosPersonales.segundoApellido"
                error={errors.datosPersonales?.segundoApellido?.message}
            />
            <Input
                type="text"
                label="Nombres"
                register={register}
                wrapperClass="mb-3 col-md-3"
                name="datosPersonales.nombres"
                error={errors.datosPersonales?.nombres?.message}
            />
            <Select
                register={register}
                wrapperClass="mb-3 col-md-3"
                label="Tipo de identificación"
                options={tipoIdentificacionOptions}
                name="datosPersonales.tipoIdentificacion"
                error={errors.datosPersonales?.tipoIdentificacion?.message}
            />
            <Input
                type="text"
                register={register}
                wrapperClass="mb-3 col-md-3"
                label="Número de identificación"
                name="datosPersonales.numeroIdentificacion"
                error={errors.datosPersonales?.numeroIdentificacion?.message}
            />
            <Select
                label="Sexo"
                register={register}
                options={sexoOptions}
                name="datosPersonales.sexo"
                wrapperClass="mb-3 col-md-3"
                error={errors.datosPersonales?.sexo?.message}
            />
            <Select
                register={register}
                label="Nacionalidad"
                wrapperClass="mb-3 col-md-3"
                options={nacionalidadOptions}
                name="datosPersonales.nacionalidad"
                error={errors.datosPersonales?.nacionalidad?.message}
            />
            <Select
                label="País"
                register={register}
                options={paisOptions}
                name="datosPersonales.pais"
                wrapperClass="mb-3 col-md-3"
                error={errors.datosPersonales?.pais?.message}
            />
            <Select
                register={register}
                label="Tipo libreta militar"
                wrapperClass="mb-3 col-md-3"
                options={tipoLibretaOptions}
                name="datosPersonales.TipolibretaMilitar"
                error={errors.datosPersonales?.TipolibretaMilitar?.message}
            />
            <Input
                type="text"
                register={register}
                wrapperClass="mb-3 col-md-3"
                label="Número libreta militar"
                name="datosPersonales.numeroLibretaMilitar"
                error={errors.datosPersonales?.numeroLibretaMilitar?.message}
            />
            <Input
                type="text"
                register={register}
                wrapperClass="mb-3 col-md-3"
                label="Distrito libreta militar"
                name="datosPersonales.distritoLibretaMilitar"
                error={errors.datosPersonales?.distritoLibretaMilitar?.message}
            />
            <CustomDatePicker
                control={control}
                register={register}
                wrapperClass="mb-3 col-md-3"
                setValue={setValue}
                label="Fecha de nacimiento"
                name="datosPersonales.fechaNacimiento"
                error={errors.datosPersonales?.fechaNacimiento?.message}
            />
            <Select
                register={register}
                options={paisOptions}
                label="País de nacimiento"
                wrapperClass="mb-3 col-md-3"
                name="datosPersonales.paisNacimiento"
                error={errors.datosPersonales?.paisNacimiento?.message}
            />
            <Select
                register={register}
                wrapperClass="mb-3 col-md-3"
                options={departamentoOptions}
                label="Departamento de nacimiento"
                name="datosPersonales.departamentoNacimiento"
                error={errors.datosPersonales?.departamentoNacimiento?.message}
            />
            <Select
                register={register}
                options={municipioOptions}
                wrapperClass="mb-3 col-md-3"
                label="Municipio de nacimiento"
                name="datosPersonales.municipioNacimiento"
                error={errors.datosPersonales?.municipioNacimiento?.message}
            />
            <Input
                type="text"
                register={register}
                wrapperClass="mb-3 col-md-3"
                label="Dirección de correspondencia"
                name="datosPersonales.direccionCorrespondencia"
                error={errors.datosPersonales?.direccionCorrespondencia?.message}
            />
            <Select
                register={register}
                options={paisOptions}
                label="País de nacimiento"
                wrapperClass="mb-3 col-md-3"
                name="datosPersonales.paisCorrespondencia"
                error={errors.datosPersonales?.paisCorrespondencia?.message}
            />
            <Select
                register={register}
                wrapperClass="mb-3 col-md-3"
                options={departamentoOptions}
                label="Departamento de nacimiento"
                name="datosPersonales.departamentoCorrespondencia"
                error={errors.datosPersonales?.departamentoCorrespondencia?.message}
            />
            <Select
                register={register}
                options={municipioOptions}
                wrapperClass="mb-3 col-md-3"
                label="Municipio de nacimiento"
                name="datosPersonales.municipioCorrespondencia"
                error={errors.datosPersonales?.municipioCorrespondencia?.message}
            />
            <Input
                type="email"
                label="Email"
                register={register}
                name="datosPersonales.email"
                wrapperClass="mb-3 col-md-3"
                error={errors.datosPersonales?.email?.message}
            />
        </Box>
    )
}