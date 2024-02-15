import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldErrors, useForm, useFieldArray } from "react-hook-form";
import { CurriculumNuevoInterface } from "../../../../models/CurriculumNuevoInterface";
import DatosPersonalesForm, { datosPersonalesDefaultValues, datosPersonalesSchema } from "../../components/DatosPersonalesForm";
import FormacionBasicaForm, { formacionBasicaDefaultValues, formacionBasicaSchema } from "../../components/FormacionBasicaForm";
import FormacionSuperiorForm, { formacionSuperiorDefaultValues, formacionSuperiorSchema } from "../../components/FormacionSuperiorForm";
import Box from "../../../../shared/containers/Box/Box";

let defaultValues: CurriculumNuevoInterface = {
    datosPersonales: datosPersonalesDefaultValues,
    formacionBasica: formacionBasicaDefaultValues,
    formacionSuperior: [formacionSuperiorDefaultValues],
};

const validationSchema = yup.object().shape({
    datosPersonales: datosPersonalesSchema,
    formacionBasica: formacionBasicaSchema,
    formacionSuperior: yup.array().of(
        yup.object().shape({
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
        })
    )
});

export default function CurriculumNuevo() {

    const form = useForm<CurriculumNuevoInterface>({
        defaultValues,
        mode: "onTouched",
        resolver: yupResolver(validationSchema)
    });

    const { register, formState, handleSubmit, control, setValue } = form;
    const { errors } = formState;

    const { fields, append, remove } = useFieldArray({
        name: "formacionSuperior",
        control
    });

    function onError(errors: FieldErrors<CurriculumNuevoInterface>) {
        console.log(errors);
    }
    
    function handleAppend(event: any){
        event.preventDefault();
        append({ 
            modalidadAcademica: "",
            numeroSemestresAprobados: "",
            graduado: "",
            tituloObtenido: "",
            fechaTerminacion: new Date(),
            numeroTarjetaProfesional: "",
        });
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
                <FormacionBasicaForm
                    errors={errors}
                    control={control}
                    register={register}
                    setValue={setValue}
                />

                <Box>
                    <button onClick={handleAppend} className="btn btn-sm btn-success">Add</button>
                    <h4 className="mb-4">Formación Superior</h4>

                    {fields.map((field, index) => (
                        <FormacionSuperiorForm
                            index={index}
                            key={field.id}
                            errors={errors}
                            control={control}
                            register={register}
                            setValue={setValue}
                        />
                    ))}
                </Box>

                <button type="submit" className="btn btn-primary">Crear</button>
            </form>
        </>
    );
};