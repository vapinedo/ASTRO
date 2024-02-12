import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "../../../../shared/components/form/Form";
import Input from "../../../../shared/components/form/Input";
import Select from "../../../../shared/components/form/Select";
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
    { key: 'colombia', value: 'Colombia' },
    { key: 'venezuela', value: 'Venezuela' },
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
        fechaNacimiento: "",
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

// const validationSchema = yup.object().shape({
//     datosPersonales: yup.object().shape({
//         primerApellido: yup
//             .string()
//             .required("Primer apellido es requerido"),
//         segundoApellido: yup
//             .string()
//             .required("Segundo apellido es requerido"),
//         nombres: yup
//             .string()
//             .required("Nombres es requerido"),
//         tipoIdentificacion: yup
//             .string()
//             .required("Documento de identificacion es requerido"),
//         numeroIdentificacion: yup
//             .string()
//             .required("Número de identificacion es requerido"),
//     })
// });

export default function CurriculumNuevo() {

    const form = useForm<CurriculumNuevoInterface>({
        defaultValues,
        // resolver: yupResolver(validationSchema)
    });

    const { register, formState, handleSubmit } = form;
    const { errors } = formState;

    function onSubmit(data: CurriculumNuevoInterface) {
        console.log(data);
    }

    return (
        <section>
            <header className='page-header'>
                <h2>Curriculum nuevo</h2>
                <div>
                    <button className='btn btn-outline-danger'>Ir Atrás</button>
                </div>
            </header>

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
                    error={errors.datosPersonales?.primerApellido?.message}
                />
                <Input
                    type="text"
                    label="Segundo apellido"
                    name="datosPersonales.segundoApellido"
                    error={errors.datosPersonales?.segundoApellido?.message}
                />
                <Input
                    type="text"
                    label="Nombres"
                    name="datosPersonales.nombres"
                    error={errors.datosPersonales?.nombres?.message}
                />
                <Select
                    label="Tipo de identificación"
                    options={tipoIdentificacionOptions}
                    name="datosPersonales.tipoIdentificacion"
                    error={errors.datosPersonales?.tipoIdentificacion?.message}
                />
                <Input
                    type="text"
                    label="Número de identificación"
                    name="datosPersonales.numeroIdentificacion"
                    error={errors.datosPersonales?.numeroIdentificacion?.message}
                />
                <Select
                    label="Sexo"
                    options={sexoOptions}
                    name="datosPersonales.sexo"
                    error={errors.datosPersonales?.sexo?.message}
                />
                <Select
                    label="Nacionalidad"
                    options={nacionalidadOptions}
                    name="datosPersonales.nacionalidad"
                    error={errors.datosPersonales?.nacionalidad?.message}
                />
                <Select
                    label="País"
                    options={paisOptions}
                    name="datosPersonales.pais"
                    error={errors.datosPersonales?.pais?.message}
                />
                <Select
                    label="Tipo libreta militar"
                    options={tipoLibretaOptions}
                    name="datosPersonales.TipolibretaMilitar"
                    error={errors.datosPersonales?.TipolibretaMilitar?.message}
                />
                <Input
                    type="text"
                    label="Número libreta militar"
                    name="datosPersonales.numeroLibretaMilitar"
                    error={errors.datosPersonales?.numeroLibretaMilitar?.message}
                />
                <Input
                    type="text"
                    label="Distrito libreta militar"
                    name="datosPersonales.distritoLibretaMilitar"
                    error={errors.datosPersonales?.distritoLibretaMilitar?.message}
                />
            </Form>
        </section>
    );
};