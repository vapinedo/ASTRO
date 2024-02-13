import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Box from "../../../../shared/containers/Box/Box";
import Form from "../../../../shared/components/form/Form";
import Input from "../../../../shared/components/form/Input";
import Select from "../../../../shared/components/form/Select";
import CustomDatePicker from "../../../../shared/components/form/CustomDatePicker";
import { CurriculumNuevoInterface } from "../../../../models/CurriculumNuevoInterface";

let tipoIdentificacionOptions = [
    { key: 'cc', value: 'Cedula de ciudadanía' },
    { key: 'ce', value: 'Cedula de exntranjería' },
    { key: 'pas', value: 'Pasaporte' },
];
let sexoOptions = [
    { key: 'm', value: 'Hombre' },
    { key: 'f', value: 'Mujer' },
];
let nacionalidadOptions = [
    { key: 'col', value: 'Colombiano' },
    { key: 'ext', value: 'Extranjero' },
];
let paisOptions = [
    { key: 'Colombia', value: 'Colombia' },
    { key: 'Venezuela', value: 'Venezuela' },
];
let departamentoOptions = [
    { key: 'La Guajira', value: 'La Guajira' },
    { key: 'Atlantico', value: 'Atlantico' },
];
let municipioOptions = [
    { key: 'Uribia', value: 'Uribia' },
    { key: 'Manure', value: 'Manaure' },
    { key: 'Soledad', value: 'Soledad' },
];
let tipoLibretaOptions = [
    { key: 'primera', value: 'Primera clase' },
    { key: 'segunda', value: 'Segunda clase' },
];

let defaultValues: CurriculumNuevoInterface = {
    datosPersonales: {
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
    }
};

const validationSchema = yup.object().shape({
    datosPersonales: yup.object().shape({
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
    })
});

export default function CurriculumNuevo() {

    const form = useForm<CurriculumNuevoInterface>({
        defaultValues,
        mode: "onTouched",
        resolver: yupResolver(validationSchema)
    });

    const { register, formState, handleSubmit, control, setValue } = form;
    const { errors } = formState;

    function onSubmit(data: CurriculumNuevoInterface) {
        console.log(data);
    }

    return (
        <>
            <header className='page-header'>
                <h2>Curriculum nuevo</h2>
                <div>
                    <button className='btn btn-outline-danger'>Ir Atrás</button>
                </div>
            </header>

            <Box>
                <h4 className="mb-4">Datos Personales</h4>

                <Form
                    buttonLabel="Crear"
                    register={register}
                    onSubmit={onSubmit}
                    handleSubmit={handleSubmit}
                >
                    <Input
                        autoFocus
                        type="text"
                        label="Primer apellido"
                        name="datosPersonales.primerApellido"
                        wrapperClass="mb-3 col-md-3"
                        error={errors.datosPersonales?.primerApellido?.message}
                    />
                    <Input
                        type="text"
                        wrapperClass="mb-3 col-md-3"
                        label="Segundo apellido"
                        name="datosPersonales.segundoApellido"
                        error={errors.datosPersonales?.segundoApellido?.message}
                    />
                    <Input
                        type="text"
                        label="Nombres"
                        wrapperClass="mb-3 col-md-3"
                        name="datosPersonales.nombres"
                        error={errors.datosPersonales?.nombres?.message}
                    />
                    <Select
                        wrapperClass="mb-3 col-md-3"
                        label="Tipo de identificación"
                        options={tipoIdentificacionOptions}
                        name="datosPersonales.tipoIdentificacion"
                        error={errors.datosPersonales?.tipoIdentificacion?.message}
                    />
                    <Input
                        type="text"
                        wrapperClass="mb-3 col-md-3"
                        label="Número de identificación"
                        name="datosPersonales.numeroIdentificacion"
                        error={errors.datosPersonales?.numeroIdentificacion?.message}
                    />
                    <Select
                        label="Sexo"
                        wrapperClass="mb-3 col-md-3"
                        options={sexoOptions}
                        name="datosPersonales.sexo"
                        error={errors.datosPersonales?.sexo?.message}
                    />
                    <Select
                        wrapperClass="mb-3 col-md-3"
                        label="Nacionalidad"
                        options={nacionalidadOptions}
                        name="datosPersonales.nacionalidad"
                        error={errors.datosPersonales?.nacionalidad?.message}
                    />
                    <Select
                        label="País"
                        wrapperClass="mb-3 col-md-3"
                        options={paisOptions}
                        name="datosPersonales.pais"
                        error={errors.datosPersonales?.pais?.message}
                    />
                    <Select
                        wrapperClass="mb-3 col-md-3"
                        label="Tipo libreta militar"
                        options={tipoLibretaOptions}
                        name="datosPersonales.TipolibretaMilitar"
                        error={errors.datosPersonales?.TipolibretaMilitar?.message}
                    />
                    <Input
                        type="text"
                        wrapperClass="mb-3 col-md-3"
                        label="Número libreta militar"
                        name="datosPersonales.numeroLibretaMilitar"
                        error={errors.datosPersonales?.numeroLibretaMilitar?.message}
                    />
                    <Input
                        type="text"
                        wrapperClass="mb-3 col-md-3"
                        label="Distrito libreta militar"
                        name="datosPersonales.distritoLibretaMilitar"
                        error={errors.datosPersonales?.distritoLibretaMilitar?.message}
                    />
                    <CustomDatePicker
                        control={control}
                        wrapperClass="mb-3 col-md-3"
                        setValue={setValue}
                        label="Fecha de nacimiento"
                        name="datosPersonales.fechaNacimiento"
                        error={errors.datosPersonales?.fechaNacimiento?.message}
                    />
                    <Select
                        wrapperClass="mb-3 col-md-3"
                        label="País de nacimiento"
                        options={paisOptions}
                        name="datosPersonales.paisNacimiento"
                        error={errors.datosPersonales?.paisNacimiento?.message}
                    />
                    <Select
                        wrapperClass="mb-3 col-md-3"
                        label="Departamento de nacimiento"
                        options={departamentoOptions}
                        name="datosPersonales.departamentoNacimiento"
                        error={errors.datosPersonales?.departamentoNacimiento?.message}
                    />
                    <Select
                        wrapperClass="mb-3 col-md-3"
                        label="Municipio de nacimiento"
                        options={municipioOptions}
                        name="datosPersonales.municipioNacimiento"
                        error={errors.datosPersonales?.municipioNacimiento?.message}
                    />
                    <Input
                        type="text"
                        wrapperClass="mb-3 col-md-3"
                        label="Dirección de correspondencia"
                        name="datosPersonales.direccionCorrespondencia"
                        error={errors.datosPersonales?.direccionCorrespondencia?.message}
                    />
                    <Select
                        wrapperClass="mb-3 col-md-3"
                        label="País de nacimiento"
                        options={paisOptions}
                        name="datosPersonales.paisCorrespondencia"
                        error={errors.datosPersonales?.paisCorrespondencia?.message}
                    />
                    <Select
                        wrapperClass="mb-3 col-md-3"
                        label="Departamento de nacimiento"
                        options={departamentoOptions}
                        name="datosPersonales.departamentoCorrespondencia"
                        error={errors.datosPersonales?.departamentoCorrespondencia?.message}
                    />
                    <Select
                        wrapperClass="mb-3 col-md-3"
                        options={municipioOptions}
                        label="Municipio de nacimiento"
                        name="datosPersonales.municipioCorrespondencia"
                        error={errors.datosPersonales?.municipioCorrespondencia?.message}
                    />
                    <Input
                        type="email"
                        label="Email"
                        wrapperClass="mb-3 col-md-3"
                        name="datosPersonales.email"
                        error={errors.datosPersonales?.email?.message}
                    />
                </Form>
            </Box>
        </>
    );
};