import * as yup from "yup";
import "./FormComponents.css";
import { ReactNode } from "react";
import { useFieldArray } from "react-hook-form";
import Box from "../../../shared/containers/Box/Box";
import Input from "../../../shared/components/form/Input";
import Select from "../../../shared/components/form/Select";
import { Idioma } from "../../../models/CurriculumNuevoInterface";

const idiomaOptions = [
    { key: "r", value: "Regular" },
    { key: "b", value: "Bien" },
    { key: "mb", value: "Muy bien" },
];

interface InputProps {
    errors: any;
    control: any;
    register: any;
}

const MAXIMUM_INSTANCES = 2;

export const idiomasDefaultValues: Idioma = {
    idioma: "",
    loHabla: "",
    loLee: "",
    loEscribie: "",
};

export default function IdiomaForm(props: InputProps): ReactNode {

    const { errors, control, register } = props;

    const { fields, append, remove } = useFieldArray({
        name: "idiomas",
        control
    });

    function handleAppend(event: any) {
        event.preventDefault();

        if (fields.length === MAXIMUM_INSTANCES) return;

        append({
            idioma: "",
            loHabla: "",
            loLee: "",
            loEscribie: "",
        });
    }

    return (
        <Box wrapperClass="row">
            <header className="inline-flex">
                <h4 className="mb-4">Idiomas</h4>
                {(fields.length < MAXIMUM_INSTANCES) && <button onClick={handleAppend} className="btn btn-sm btn-success">Agregar</button>}
            </header>

            {fields.map((field, index) => (
                <div key={field.id} className={index > 0 ? "dynamic-fields" : ""}>
                    <div className="row">
                        <Input
                            type="text"
                            register={register}
                            wrapperClass="mb-3 col-md-3"
                            label="Idioma"
                            name={`idiomas.${index}.idioma`}
                            error={errors.idiomas && errors.idiomas[index]?.loHabla?.message}
                        />
                        <Select
                            register={register}
                            label="Lo habla"
                            options={idiomaOptions}
                            wrapperClass="mb-3 col-md-3"
                            name={`idiomas.${index}.loHabla`}
                            error={errors.idiomas && errors.idiomas[index]?.loHabla?.message}
                        />
                        <Select
                            register={register}
                            label="Lo lee"
                            wrapperClass="mb-3 col-md-3"
                            options={idiomaOptions}
                            name={`idiomas.${index}.loLee`}
                            error={errors.idiomas && errors.idiomas[index]?.loLee?.message}
                        />
                        <Select
                            register={register}
                            label="Lo escribe"
                            options={idiomaOptions}
                            wrapperClass="mb-3 col-md-3"
                            name={`idiomas.${index}.loEscribe`}
                            error={errors.idiomas && errors.idiomas[index]?.loEscribe?.message}
                        />
                    </div>
                    {index > 0 && <i onClick={() => remove(index)} className="icon bx bx-trash-alt" title="Eliminar"></i>}
                </div>
            ))}
        </Box>
    )
}