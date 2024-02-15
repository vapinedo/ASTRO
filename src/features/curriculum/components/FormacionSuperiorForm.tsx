import * as yup from "yup";
import "./FormComponents.css";
import { ReactNode } from "react";
import { useFieldArray } from "react-hook-form";
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

const MAXIMUM_INSTANCES = 5;

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
        .date()
        .required("Fecha terminación es requerido"),
    numeroTarjetaProfesional: yup
        .string()
        .required("Tarjeta profesional es requerido"),
});

export default function FormacionSuperiorForm(props: InputProps): ReactNode {

    const { errors, control, setValue, register } = props;

    const { fields, append, remove } = useFieldArray({
        name: "formacionSuperior",
        control
    });

    function handleAppend(event: any) {
        event.preventDefault();
        
        if (fields.length === MAXIMUM_INSTANCES) return;
        
        append({
            modalidadAcademica: "",
            numeroSemestresAprobados: "",
            graduado: "",
            tituloObtenido: "",
            fechaTerminacion: new Date(),
            numeroTarjetaProfesional: "",
        });
    }

    return (
        <Box wrapperClass="row">
            <header className="inline-flex">
                <h4 className="mb-4">Formación Superior</h4>
                {(fields.length < MAXIMUM_INSTANCES) && <button onClick={handleAppend} className="btn btn-sm btn-success">Agregar</button>}
            </header>

            {fields.map((field, index) => (
                <div key={field.id} className={index > 0 ? "dynamic-fields" : ""}>
                    <div className="row">
                        <Select
                            register={register}
                            label="Modalidad académica"
                            wrapperClass="mb-3 col-md-4"
                            options={modalidadAcademicaOptions}
                            name={`formacionSuperior.${index}.modalidadAcademica`}
                            error={errors.formacionSuperior && errors.formacionSuperior[index]?.modalidadAcademica?.message}
                        />
                        <Input
                            type="text"
                            register={register}
                            wrapperClass="mb-3 col-md-4"
                            label="Número semestres aprobados"
                            name={`formacionSuperior.${index}.numeroSemestresAprobados`}
                            error={errors.formacionSuperior && errors.formacionSuperior[index]?.numeroSemestresAprobados?.message}
                        />
                        <Select
                            register={register}
                            label="Graduado"
                            options={SiNoOptions}
                            wrapperClass="mb-3 col-md-4"
                            name={`formacionSuperior.${index}.graduado`}
                            error={errors.formacionSuperior && errors.formacionSuperior[index]?.graduado?.message}
                        />
                        <Input
                            type="text"
                            register={register}
                            label="Título obtenido"
                            wrapperClass="mb-3 col-md-4"
                            name={`formacionSuperior.${index}.tituloObtenido`}
                            error={errors.formacionSuperior && errors.formacionSuperior[index]?.tituloObtenido?.message}
                        />
                        <CustomDatePicker
                            control={control}
                            register={register}
                            setValue={setValue}
                            wrapperClass="mb-3 col-md-4"
                            label="Fecha de terminación"
                            name={`formacionSuperior.${index}.fechaTerminacion`}
                            error={errors.formacionSuperior && errors.formacionSuperior[index]?.fechaTerminacion?.message}
                        />
                        <Input
                            type="text"
                            register={register}
                            wrapperClass="mb-3 col-md-4"
                            label="Número tarjeta profesional"
                            name={`formacionSuperior.${index}.numeroTarjetaProfesional`}
                            error={errors.formacionSuperior && errors.formacionSuperior[index]?.numeroTarjetaProfesional?.message}
                        />
                    </div>
                    {index > 0 && <i onClick={() => remove(index)} className="icon bx bx-trash-alt" title="Eliminar"></i>}
                </div>
            ))}
        </Box>
    )
}