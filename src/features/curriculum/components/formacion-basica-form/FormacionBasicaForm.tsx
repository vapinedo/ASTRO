import dayjs from "dayjs";
import * as yup from "yup";
import { ReactNode } from "react";
import { FormControl, InputLabel, Stack } from "@mui/material";
import { Controller } from "react-hook-form";
import Box from "../../../../shared/containers/Box/Box";
import { FormacionBasica } from "../../../../models/Curriculum";
import InputField from "../../../../shared/components/form/InputField";
import SelectField from "../../../../shared/components/form/SelectField";
import DatePickerField from "../../../../shared/components/form/DatePickerField";
import { InputProps } from "../../interfaces/InputProps";

export const formacionBasicaDefaultValues: FormacionBasica = {
    educacionBasica: "",
    tituloObtenido: "",
    fechaGraduacion: null,
};

export const formacionBasicaSchema = yup.object().shape({
    educacionBasica: yup
        .string()
        .required("Educación básica es requerido"),
    tituloObtenido: yup
        .string()
        .min(9, "Mínimo 9 caracteres")
        .required("Título obtenido es requerido"),
    fechaGraduacion: yup
        .date()
        .required("Fecha graduación es requerido"),
});

export default function FormacionBasicaForm(props: InputProps): ReactNode {

    const { errors, control, setValue, register } = props;

    return (
        <Box>
            <header className="section-header">
                <h4>Formación Básica</h4>
            </header>

            <Stack direction="row" spacing={4}>
                <FormControl sx={{ m: 1, width: '100%' }}>
                    <InputLabel>Educación básica</InputLabel>
                    <Controller
                        defaultValue=""
                        control={control}
                        name="formacionBasica.educacionBasica"
                        render={({ field: { onChange, value } }) => (
                            <SelectField
                                value={value}
                                onChange={onChange}
                                label="Nacionalidad"
                                options={educacionBasicaOptions}
                                error={errors.datosPersonales?.educacionBasica?.message}
                            />
                        )}
                    />
                </FormControl>
                <InputField
                    type="text"
                    register={register}
                    label="Título obtenido"
                    name="formacionBasica.tituloObtenido"
                    error={errors.formacionBasica?.tituloObtenido?.message}
                />
                <Controller
                    control={control}
                    name="formacionBasica.fechaGraduacion"
                    render={({
                        field: { onChange, value },
                        fieldState: { error }
                    }) => (
                        <DatePickerField
                            value={dayjs(value)}
                            onChange={onChange}
                            label="Fecha de graduación"
                        />
                    )}
                />
            </Stack>
        </Box>
    )
}