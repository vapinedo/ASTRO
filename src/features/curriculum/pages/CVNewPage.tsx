import * as yup from "yup";
import { CV } from "@models/CV";
import Button from "@mui/material/Button";
import { useAppDispatch } from "@redux/hooks";
import { useNavigate } from "react-router-dom";
import { swalSuccess } from "@helpers/SwalAlerts";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldErrors, useForm } from "react-hook-form";
import { createCV } from "@redux/curriculum/cvActionCreators";
import { idiomasDefaultValues } from "@features/curriculum/constants/idioma";
import { formacionSuperiorDefaultValues } from "@features/curriculum/constants/formacionSuperior";
import { experienciaLaboralDefaultValues } from "@features/curriculum/constants/experienciaLaboral";
import {
  DatosPersonalesForm,
  ExperienciaLaboralForm,
  FormacionBasicaForm,
  FormacionSuperiorForm,
  IdiomaForm,
} from "@features/curriculum/components";
import {
  datosPersonalesDefaultValues,
  datosPersonalesSchema,
} from "@features/curriculum/constants/datosPersonales";
import {
  formacionBasicaDefaultValues,
  formacionBasicaSchema,
} from "@features/curriculum/constants/formacionBasica";

let defaultValues: CV = {
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

export default function CVNewPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const form = useForm<CV>({
    defaultValues,
    mode: "onTouched",
    resolver: yupResolver(validationSchema),
  });

  const { register, formState, handleSubmit, control, setValue, watch } = form;
  const { errors } = formState;

  function onError(errors: FieldErrors<CV>) {
    console.log(errors);
  }

  function onSubmit(curriculum: CV) {
    dispatch(createCV(curriculum));
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
          setValue={setValue}
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
        <Button type="submit" variant="contained">
          Crear
        </Button>
      </form>
    </>
  );
}
