import * as yup from "yup";
import { CV } from "@models/CV";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import { useAppDispatch } from "@redux/hooks";
import * as DateHelper from "@helpers/DateHelper";
import { FieldErrors, useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import { updateCV } from "@redux/cv/cvActionCreators";
import * as cvComponents from "@features/cv/components";
import * as cvSchemas from "@features/cv/validationSchemas";
import * as cvDefaultValues from "@features/cv/defaultValues";

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

let documentId: string | undefined = "";

export default function CVEditPage() {
  const dispatch = useAppDispatch();

  const form = useForm<CV>({
    defaultValues,
    mode: "onTouched",
    // resolver: yupResolver(validationSchema)
  });

  useEffect(() => {
    const data = localStorage.getItem("cv-edit");
    if (data !== null) {
      const cv: CV = JSON.parse(data);
      DateHelper.allFStimestampToDateObj(cv);
      setValue("datosPersonales", cv.datosPersonales, {
        shouldValidate: false,
      });

      if (cv.formacionBasica) {
        setValue("formacionBasica", cv.formacionBasica, {
          shouldValidate: false,
        });
      }

      if (cv.formacionBasica) {
        setValue("formacionSuperior", cv.formacionSuperior, {
          shouldValidate: false,
        });
      }

      if (cv.idiomas) {
        setValue("idiomas", cv.idiomas, { shouldValidate: false });
      }

      if (cv.experienciaLaboral) {
        setValue("experienciaLaboral", cv.experienciaLaboral, {
          shouldValidate: false,
        });
      }

      documentId = cv.documentId;
    }
  }, []);

  const { register, formState, handleSubmit, control, setValue, watch } = form;
  const { errors } = formState;

  function onError(errors: FieldErrors<CV>) {
    console.log(errors);
  }

  function onSubmit(cv: CV) {
    cv.documentId = documentId;
    DateHelper.fromM2ToDate(cv);
    console.log({ cv });
    dispatch(updateCV(cv));
  }

  return (
    <>
      <header className="page-header">
        <h2>Hoja de Vida editar</h2>
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
          Actualizar
        </Button>
      </form>
    </>
  );
}
