import * as yup from "yup";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldErrors, useForm } from "react-hook-form";
import { Curriculum } from "../../../../models/Curriculum";
import { swalSuccess } from "../../../../helpers/SwalAlerts";
import { DatosPersonalesForm, ExperienciaLaboralForm } from "../../components";
import { experienciaLaboralDefaultValues } from "../../constants/ExperienciaLaboralForm";
import IdiomaForm, { idiomasDefaultValues } from "../../components/idioma-form/IdiomaForm";
import { datosPersonalesDefaultValues, datosPersonalesSchema } from "../../constants/DatosPersonalesForm";
import FormacionSuperiorForm, { formacionSuperiorDefaultValues } from "../../components/formacion-superior-form/FormacionSuperiorForm";
import FormacionBasicaForm, { formacionBasicaDefaultValues, formacionBasicaSchema } from "../../components/formacion-basica-form/FormacionBasicaForm";

let defaultValues: Curriculum = {
    datosPersonales: datosPersonalesDefaultValues,
    formacionBasica: formacionBasicaDefaultValues,
    formacionSuperior: [formacionSuperiorDefaultValues],
    idiomas: [idiomasDefaultValues],
    experienciaLaboral: [experienciaLaboralDefaultValues],
};

const validationSchema = yup.object().shape({
    datosPersonales: datosPersonalesSchema,
    formacionBasica: formacionBasicaSchema,
    // formacionSuperior: yup.array().of(formacionSuperiorSchema),
    // experienciaLaboral: yup.array().of(experienciaLaboralSchema)
});

export default function CurriculumNuevo() {

    const navigate = useNavigate();

    const form = useForm<Curriculum>({
        defaultValues,
        mode: "onTouched",
        resolver: yupResolver(validationSchema)
    });

    const { register, formState, handleSubmit, control, setValue, watch } = form;
    const { errors } = formState;

    function onError(errors: FieldErrors<Curriculum>) {
        console.log(errors);
    }

    function onSubmit(curriculum: Curriculum) {
        swalSuccess("Curriculum creado exitosamente!");
        navigate("/curriculums");
    }

    return (
        <>
            <header className="page-header">
                <h2>Curriculum nuevo</h2>
                <div>
                    <button className="btn btn-outline-danger">Ir Atrás</button>
                </div>
            </header>

            <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
                <DatosPersonalesForm
                    watch={watch}
                    errors={errors}
                    control={control}
                    register={register}
                    setValue={setValue}
                />
                <FormacionBasicaForm
                    errors={errors}
                    control={control}
                    register={register}
                    setValue={setValue}
                />
                <FormacionSuperiorForm
                    errors={errors}
                    control={control}
                    register={register}
                    setValue={setValue}
                />
                <IdiomaForm
                    errors={errors}
                    control={control}
                    register={register}
                />
                <ExperienciaLaboralForm
                    errors={errors}
                    control={control}
                    register={register}
                    setValue={setValue}
                />
                <Button type="submit" variant="contained">Crear</Button>
            </form>
        </>
    );
}