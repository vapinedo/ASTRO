import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "../../../../shared/components/form/Form";
import { CurriculumNuevoInterface } from "../../../../models/CurriculumNuevoInterface";
import DatosPersonalesForm, { datosPersonalesDefaultValues, datosPersonalesSchema } from "../../components/DatosPersonalesForm";
import FormacionBasicaForm, { formacionBasicaDefaultValues, formacionBasicaSchema } from "../../components/FormacionBasicaForm";

let defaultValues: CurriculumNuevoInterface = {
    datosPersonales: datosPersonalesDefaultValues,
    formacionBasica: formacionBasicaDefaultValues,
};

const validationSchema = yup.object().shape({
    datosPersonales: datosPersonalesSchema,
    formacionBasica: formacionBasicaSchema,
});

export default function CurriculumNuevo() {

    const form = useForm<CurriculumNuevoInterface>({
        defaultValues,
        mode: "onTouched",
        resolver: yupResolver(validationSchema)
    });

    const { register, formState, handleSubmit, control, setValue } = form;
    const { errors } = formState;

    function onSubmit(data: CurriculumNuevoInterface) {
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

            <Form
                buttonLabel="Crear"
                register={register}
                onSubmit={onSubmit}
                handleSubmit={handleSubmit}
            >
                <DatosPersonalesForm 
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
            </Form>
        </>
    );
};