import * as yup from "yup";
import "./FormComponents.css";
import { ReactNode } from "react";
import { Stack } from "@mui/material";
import { useFieldArray } from "react-hook-form";
import Box from "../../../shared/containers/Box/Box";
import { FormacionSuperior } from "../../../models/Curriculum";
import InputField from "../../../shared/components/form/InputField";
import SelectField from "../../../shared/components/form/SelectField";
import DatePickerField from "../../../shared/components/form/DatePickerField";

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
        .min(6, "Mínimo 6 caracteres")
        .required("Título obtenido es requerido"),
    fechaTerminacion: yup
        .date()
        .required("Fecha terminación es requerido"),
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
        <Box>
            <header className="section-header">
                <h4>Formación Superior</h4>
                {(fields.length < MAXIMUM_INSTANCES) && <button onClick={handleAppend} className="btn btn-sm btn-success">Agregar</button>}
            </header>

            {fields.map((field, index) => (
                <div key={field.id} className={index > 0 ? "dynamic-fields" : ""}>
                    <div className="inner">
                        <Stack direction="row" spacing={4}>
                            <SelectField
                                register={register}
                                label="Modalidad académica"
                                options={modalidadAcademicaOptions}
                                name={`formacionSuperior.${index}.modalidadAcademica`}
                                error={errors.formacionSuperior && errors.formacionSuperior[index]?.modalidadAcademica?.message}
                            />
                            <InputField
                                type="text"
                                register={register}
                                label="Número semestres aprobados"
                                name={`formacionSuperior.${index}.numeroSemestresAprobados`}
                                error={errors.formacionSuperior && errors.formacionSuperior[index]?.numeroSemestresAprobados?.message}
                            />
                            <SelectField
                                register={register}
                                label="Graduado"
                                options={SiNoOptions}
                                name={`formacionSuperior.${index}.graduado`}
                                error={errors.formacionSuperior && errors.formacionSuperior[index]?.graduado?.message}
                            />
                        </Stack>

                        <Stack direction="row" spacing={4} mt={4}>
                            <InputField
                                type="text"
                                register={register}
                                label="Título obtenido"
                                name={`formacionSuperior.${index}.tituloObtenido`}
                                error={errors.formacionSuperior && errors.formacionSuperior[index]?.tituloObtenido?.message}
                            />
                            <DatePickerField
                                control={control}
                                register={register}
                                setValue={setValue}
                                label="Fecha de terminación"
                                name={`formacionSuperior.${index}.fechaTerminacion`}
                                error={errors.formacionSuperior && errors.formacionSuperior[index]?.fechaTerminacion?.message}
                            />
                            <InputField
                                type="text"
                                register={register}
                                label="Número tarjeta profesional"
                                name={`formacionSuperior.${index}.numeroTarjetaProfesional`}
                                error={errors.formacionSuperior && errors.formacionSuperior[index]?.numeroTarjetaProfesional?.message}
                            />
                        </Stack>
                    </div>
                    
                    {index > 0 && <i onClick={() => remove(index)} className="icon bx bx-trash-alt" title="Eliminar"></i>}
                </div>
            ))}
        </Box>
    )
}