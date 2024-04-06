import * as yup from "yup";
import { CV } from "@models/CV";
import Button from "@mui/material/Button";
import { useAppDispatch } from "@redux/hooks";
import { useNavigate } from "react-router-dom";
import { swalSuccess } from "@helpers/SwalAlerts";
// import { yupResolver } from "@hookform/resolvers/yup";
import { FieldErrors, useForm } from "react-hook-form";
import { createCV } from "@redux/curriculum/cvActionCreators";
import * as cvComponents from "@features/curriculum/components";
import * as cvSchemas from "@features/curriculum/validationSchemas";
import * as cvDefaultValues from "@features/curriculum/defaultValues";

const defaultValues: CV = {
  datosPersonales: cvDefaultValues.datosPersonales,
  experienciaLaboral: [cvDefaultValues.experienciaLaboral],
  formacionBasica: cvDefaultValues.formacionBasica,
  formacionSuperior: [cvDefaultValues.formacionSuperior],
  idiomas: [cvDefaultValues.idiomas],
};

const validationSchema = yup.object().shape({
  datosPersonales: cvSchemas.datosPersonales,
  experienciaLaboral: yup.array().of(cvSchemas.experienciaLaboral),
  formacionBasica: cvSchemas.formacionBasica,
  formacionSuperior: yup.array().of(cvSchemas.formacionSuperior),
});

export default function CVNewPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const form = useForm<CV>({
    defaultValues,
    mode: "onTouched",
    // resolver: yupResolver(validationSchema),
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
        <h2>Hoja de Vida - nueva</h2>
        <div>
          <button className="btn btn-outline-danger">Ir Atrás</button>
        </div>
      </header>

      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <cvComponents.DatosPersonalesForm
          watch={watch}
          errors={errors}
          control={control}
          register={register}
          setValue={setValue}
        />
        <cvComponents.FormacionBasicaForm
          errors={errors}
          control={control}
          register={register}
          setValue={setValue}
        />
        <cvComponents.FormacionSuperiorForm
          errors={errors}
          control={control}
          register={register}
          setValue={setValue}
        />
        <cvComponents.IdiomaForm
          setValue={setValue}
          errors={errors}
          control={control}
          register={register}
        />
        <cvComponents.ExperienciaLaboralForm
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
