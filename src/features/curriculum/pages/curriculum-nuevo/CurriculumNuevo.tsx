import * as yup from "yup";
import { FieldError, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CurriculumNuevoInterface } from "../../../../models/CurriculumNuevoInterface";
import DatosPersonalesForm, { datosPersonalesDefaultValues, datosPersonalesSchema } from "../../components/DatosPersonalesForm";
import FormacionBasicaForm, { formacionBasicaDefaultValues, formacionBasicaSchema } from "../../components/FormacionBasicaForm";
import FormacionSuperiorForm, { formacionSuperiorDefaultValues, formacionSuperiorSchema } from "../../components/FormacionSuperiorForm";

let defaultValues: CurriculumNuevoInterface = {
    datosPersonales: datosPersonalesDefaultValues,
    // formacionBasica: formacionBasicaDefaultValues,
    // formacionSuperior: formacionSuperiorDefaultValues,
};

const validationSchema = yup.object().shape({
    datosPersonales: datosPersonalesSchema,
    // formacionBasica: formacionBasicaSchema,
    // formacionSuperior: formacionSuperiorSchema,
});

export default function CurriculumNuevo() {

    const form = useForm<CurriculumNuevoInterface>({
        defaultValues,
        mode: "onTouched",
        resolver: yupResolver(validationSchema)
    });

    const { register, formState, handleSubmit, control, setValue } = form;
    const { errors } = formState;

    function onError(errors: any) {
        console.log(errors);
    }

    function onSubmit(data: any) {
        console.log(data);
    }

    return (
        <>
            <header className='page-header'>
                <h2>Curriculum nuevo</h2>
                <div>
                    <button className='btn btn-outline-danger'>Ir Atrás</button>
                </div>
            </header>

            <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
                <DatosPersonalesForm 
                    errors={errors} 
                    control={control}
                    register={register}
                    setValue={setValue}
                />
                {/* <FormacionBasicaForm 
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
                /> */}

                <button type="submit" className="btn btn-primary">Crear</button>
            </form>
        </>
    );
};