import * as yup from "yup";
import { ReactNode } from "react";
import Box from "../../../shared/containers/Box/Box";
import Input from "../../../shared/components/form/Input";
import Select from "../../../shared/components/form/Select";
import { FormacionBasica } from "../../../models/CurriculumNuevoInterface";
import CustomDatePicker from "../../../shared/components/form/CustomDatePicker";

const educacionBasicaOptions = [
    { key: "1", value: "Primero" },
    { key: "2", value: "Segundo" },
    { key: "3", value: "Tercero" },
    { key: "4", value: "Cuarto" },
    { key: "5", value: "Quinto" },
    { key: "6", value: "Sexto" },
    { key: "7", value: "Séptimo" },
    { key: "8", value: "Octavo" },
    { key: "9", value: "Noveno" },
    { key: "10", value: "Décimo" },
    { key: "11", value: "Once" },
];

interface InputProps {
    errors: any;
    control: any;
    setValue: any;
    register: any;
}

export const formacionBasicaDefaultValues: FormacionBasica = {
    educacionBasica: "",
    tituloObtenido: "",
    fechaGraduacion: new Date(),
};

export const formacionBasicaSchema = yup.object().shape({
    educacionBasica: yup
        .string()
        .required("Educación básica es requerido"),
    tituloObtenido: yup
        .string()
        .required("Título obtenido es requerido"),
    fechaGraduacion: yup
        .date()
        .required("Fecha graduación es requerido"),
});

export default function FormacionBasicaForm(props: InputProps): ReactNode {

    const { errors, control, setValue, register } = props;

    return (
        <Box  wrapperClass="row">
            <h4 className="mb-4">Formación Básica</h4>

            <Select
                register={register}
                wrapperClass="mb-3 col-md-4"
                label="Educación básica"
                options={educacionBasicaOptions}
                name="formacionBasica.educacionBasica"
                error={errors.formacionBasica?.educacionBasica?.message}
            />
            <Input
                type="text"
                register={register}
                wrapperClass="mb-3 col-md-4"
                label="Título obtenido"
                name="formacionBasica.tituloObtenido"
                error={errors.formacionBasica?.tituloObtenido?.message}
            />
            <CustomDatePicker
                control={control}
                register={register}
                wrapperClass="mb-3 col-md-4"
                setValue={setValue}
                label="Fecha de graduación"
                name="formacionBasica.fechaGraduacion"
                error={errors.formacionBasica?.fechaGraduacion?.message}
            />
        </Box>
    )
}