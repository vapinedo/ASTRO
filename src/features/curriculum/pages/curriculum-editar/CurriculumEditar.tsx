import * as yup from "yup";
import { useEffect } from "react";
import Button from '@mui/material/Button';
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldErrors, useForm } from "react-hook-form";
import { useAppDispatch } from "../../../../core/hooks";
import { Curriculum } from "../../../../models/Curriculum";
import { allFStimestampToDateObj, fromM2ToDate } from "../../../../helpers/DateHelper";
import { updateCurriculum } from "../../../../core/actions/curriculumActions";
import IdiomaForm, { idiomasDefaultValues } from "../../components/IdiomaForm";
import DatosPersonalesForm, { datosPersonalesDefaultValues, datosPersonalesSchema } from "../../components/DatosPersonalesForm";
import FormacionBasicaForm, { formacionBasicaDefaultValues, formacionBasicaSchema } from "../../components/FormacionBasicaForm";
import FormacionSuperiorForm, { formacionSuperiorDefaultValues, formacionSuperiorSchema } from "../../components/FormacionSuperiorForm";
import ExperienciaLaboralForm, { experienciaLaboralDefaultValues, experienciaLaboralSchema } from "../../components/ExperienciaLaboralForm";

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
    formacionSuperior: yup.array().of(formacionSuperiorSchema),
    experienciaLaboral: yup.array().of(experienciaLaboralSchema)
});

export default function CurriculumEditar() {

    let documentId: string | undefined = "";
    const dispatch = useAppDispatch();

    const form = useForm<Curriculum>({
        defaultValues,
        mode: "onTouched",
        // resolver: yupResolver(validationSchema)
    });

    useEffect(() => {
        const data = localStorage.getItem("curriculum-edit");
        if (data !== null) {
            const curriculum: Curriculum = JSON.parse(data);
            allFStimestampToDateObj(curriculum);
            setValue("datosPersonales", curriculum.datosPersonales, { shouldValidate: false });
            setValue("formacionBasica", curriculum.formacionBasica, { shouldValidate: false });
            setValue("formacionSuperior", curriculum.formacionSuperior, { shouldValidate: false });
            setValue("idiomas", curriculum.idiomas, { shouldValidate: false });
            setValue("experienciaLaboral", curriculum.experienciaLaboral, { shouldValidate: false });
            documentId = curriculum.documentId;
        }   
    }, []);

    const { register, formState, handleSubmit, control, setValue, watch } = form;
    const { errors } = formState;

    function onError(errors: FieldErrors<Curriculum>) {
        console.log(errors);
    }

    function onSubmit(curriculum: Curriculum) {
        curriculum.documentId = documentId;
        console.log({curriculum});
        fromM2ToDate(curriculum);
        dispatch(updateCurriculum(curriculum));
    }

    return (
        <>
            <header className="page-header">
                <h2>Curriculum editar</h2>
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
                <Button type="submit" variant="contained">Actualizar</Button>
            </form>
        </>
    );
};