import "./FormComponents.css";
import { ReactNode } from "react";
import { Stack } from "@mui/material";
import { useFieldArray } from "react-hook-form";
import { Idioma } from "../../../models/Curriculum";
import Box from "../../../shared/containers/Box/Box";
import InputField from "../../../shared/components/form/InputField";
import SelectField from "../../../shared/components/form/SelectField";

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
    loEscribe: "",
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
            loEscribe: "",
        });
    }

    return (
        <Box>
            <header className="section-header">
                <h4>Idiomas</h4>
                {(fields.length < MAXIMUM_INSTANCES) && <button onClick={handleAppend} className="btn btn-sm btn-success">Agregar</button>}
            </header>

            {fields.map((field, index) => (
                <div key={field.id} className={index > 0 ? "dynamic-fields" : ""}>
                    <div className="inner">
                        <Stack direction="row" spacing={4}>
                            <InputField
                                type="text"
                                register={register}
                                label="Idioma"
                                name={`idiomas.${index}.idioma`}
                                error={errors.idiomas && errors.idiomas[index]?.loHabla?.message}
                            />
                            <SelectField
                                register={register}
                                label="Lo habla"
                                options={idiomaOptions}
                                name={`idiomas.${index}.loHabla`}
                                error={errors.idiomas && errors.idiomas[index]?.loHabla?.message}
                            />
                            <SelectField
                                register={register}
                                label="Lo lee"
                                options={idiomaOptions}
                                name={`idiomas.${index}.loLee`}
                                error={errors.idiomas && errors.idiomas[index]?.loLee?.message}
                            />
                            <SelectField
                                register={register}
                                label="Lo escribe"
                                options={idiomaOptions}
                                name={`idiomas.${index}.loEscribe`}
                                error={errors.idiomas && errors.idiomas[index]?.loEscribe?.message}
                            />
                        </Stack>
                    </div>
                    {index > 0 && <i onClick={() => remove(index)} className="icon bx bx-trash-alt" title="Eliminar"></i>}
                </div>
            ))}
        </Box>
    )
}