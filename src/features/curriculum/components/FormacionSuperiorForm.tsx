import * as yup from "yup";
import { ReactNode } from "react";
import Box from "../../../shared/containers/Box/Box";
import Input from "../../../shared/components/form/Input";
import Select from "../../../shared/components/form/Select";
import { FormacionSuperior } from "../../../models/CurriculumNuevoInterface";
import CustomDatePicker from "../../../shared/components/form/CustomDatePicker";

const modalidadAcademicaOptions = [
    { key: "tecnica", value: "Técnica" },
    { key: "tecnologica", value: "Tecnológica" },
    { key: "tecnologa", value: "Tecnológica Especializada" },
    { key: "unversitaria", value: "Universitaria" },
    { key: "especializacion", value: "Especialiación" },
    { key: "maestria", value: "Maestría o Magíster" },
    { key: "doctorado", value: "Doctorado o PHD" },
];
const SiNoOptions = [
    { key: "si", value: "Si" },
    { key: "no", value: "No" },
];

interface InputProps {
    errors: any;
    control: any;
    setValue: any;
    register: any;
}

export const formacionSuperiorDefaultValues: FormacionSuperior = {
    modalidadAcademica: "",
    numeroSemestresAprobados: "",
    graduado: "",
    tituloObtenido: "",
    fechaTerminacion: new Date(),
    numeroTarjetaProfesional: "",
};

export const formacionSuperiorSchema = yup.object().shape({
    modalidadAcademica: yup
        .string()
        .required("Modalidad académica es requerido"),
    numeroSemestresAprobados: yup
        .string()
        .required("Numero semestres es requerido"),
    graduado: yup
        .string()
        .required("Graduado es requerido"),
    tituloObtenido: yup
        .string()
        .required("Título obtenido es requerido"),
    fechaTerminacion: yup
        .string()
        .required("Fecha terminación es requerido"),
    numeroTarjetaProfesional: yup
        .string()
        .required("Tarjeta profesional es requerido"),
});

export default function FormacionSuperiorForm(props: InputProps): ReactNode {

    const { errors, control, setValue, register } = props;

    return (
        <Box  wrapperClass="row">
            <h4 className="mb-4">Formación Superior</h4>

            <Select
                register={register}
                wrapperClass="mb-3 col-md-4"
                label="Modalidad académica"
                options={modalidadAcademicaOptions}
                name="formacionSuperior.modalidadAcademica"
                error={errors.formacionSuperior?.modalidadAcademica?.message}
            />
            <Input
                type="text"
                register={register}
                wrapperClass="mb-3 col-md-4"
                label="Número semestres aprobados"
                name="formacionSuperior.numeroSemestresAprobados"
                error={errors.formacionSuperior?.numeroSemestresAprobados?.message}
            />
            <Select
                register={register}
                wrapperClass="mb-3 col-md-4"
                label="Graduado"
                options={SiNoOptions}
                name="formacionSuperior.graduado"
                error={errors.formacionSuperior?.graduado?.message}
            />
            <Input
                type="text"
                register={register}
                wrapperClass="mb-3 col-md-4"
                label="Título obtenido"
                name="formacionSuperior.tituloObtenido"
                error={errors.formacionSuperior?.tituloObtenido?.message}
            />
            <CustomDatePicker
                control={control}
                register={register}
                wrapperClass="mb-3 col-md-4"
                setValue={setValue}
                label="Fecha de terminación"
                name="formacionSuperior.fechaTerminacion"
                error={errors.formacionSuperior?.fechaTerminacion?.message}
            />
            <Input
                type="text"
                register={register}
                wrapperClass="mb-3 col-md-4"
                label="Número tarjeta profesional"
                name="formacionSuperior.numeroTarjetaProfesional"
                error={errors.formacionSuperior?.numeroTarjetaProfesional?.message}
            />
        </Box>
    )
}