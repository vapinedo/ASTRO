import * as yup from "yup";
import { CV } from "@models/CV";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import { useAppDispatch } from "@redux/hooks";
import * as DateHelper from "@helpers/DateHelper";
import { FieldErrors, useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import { updateCV } from "@redux/curriculum/cvActionCreators";
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

let documentId: string | undefined = "";

export default function CVEditPage() {
  const dispatch = useAppDispatch();

  const form = useForm<CV>({
    defaultValues,
    mode: "onTouched",
    // resolver: yupResolver(validationSchema)
  });

  useEffect(() => {
    const data = localStorage.getItem("curriculum-edit");
    if (data !== null) {
      const curriculum: CV = JSON.parse(data);
      DateHelper.allFStimestampToDateObj(curriculum);
      setValue("datosPersonales", curriculum.datosPersonales, {
        shouldValidate: false,
      });

      if (curriculum.formacionBasica) {
        setValue("formacionBasica", curriculum.formacionBasica, {
          shouldValidate: false,
        });
      }

      if (curriculum.formacionBasica) {
        setValue("formacionSuperior", curriculum.formacionSuperior, {
          shouldValidate: false,
        });
      }

      if (curriculum.idiomas) {
        setValue("idiomas", curriculum.idiomas, { shouldValidate: false });
      }

      if (curriculum.experienciaLaboral) {
        setValue("experienciaLaboral", curriculum.experienciaLaboral, {
          shouldValidate: false,
        });
      }

      documentId = curriculum.documentId;
    }
  }, []);

  const { register, formState, handleSubmit, control, setValue, watch } = form;
  const { errors } = formState;

  function onError(errors: FieldErrors<CV>) {
    console.log(errors);
  }

  function onSubmit(curriculum: CV) {
    curriculum.documentId = documentId;
    DateHelper.fromM2ToDate(curriculum);
    console.log({ curriculum });
    dispatch(updateCV(curriculum));
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
