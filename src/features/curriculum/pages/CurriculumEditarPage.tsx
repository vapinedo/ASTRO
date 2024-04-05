import * as yup from "yup";
import { useEffect } from "react";
import Button from "@mui/material/Button";
// import { yupResolver } from "@hookform/resolvers/yup";
import { FieldErrors, useForm } from "react-hook-form";
import { useAppDispatch } from "@redux/hooks";
import {
  FormacionSuperiorForm,
  IdiomaForm,
} from "@features/curriculum/components";
import { Curriculum } from "@models/Curriculum";
import { updateCurriculum } from "@redux/curriculum/actionCreators";
import { allFStimestampToDateObj, fromM2ToDate } from "@helpers/DateHelper";
import {
  DatosPersonalesForm,
  ExperienciaLaboralForm,
  FormacionBasicaForm,
} from "@features/curriculum/components";
import {
  datosPersonalesDefaultValues,
  datosPersonalesSchema,
} from "@features/curriculum/constants/datosPersonales";
import {
  experienciaLaboralDefaultValues,
  experienciaLaboralSchema,
} from "@features/curriculum/constants/experienciaLaboral";
import { idiomasDefaultValues } from "../constants/idioma";
import {
  formacionBasicaDefaultValues,
  formacionBasicaSchema,
} from "@features/curriculum/constants/formacionBasica";
import {
  formacionSuperiorDefaultValues,
  formacionSuperiorSchema,
} from "@features/curriculum/constants/formacionSuperior";

let defaultValues: Curriculum = {
  idiomas: [idiomasDefaultValues],
  datosPersonales: datosPersonalesDefaultValues,
  formacionBasica: formacionBasicaDefaultValues,
  formacionSuperior: [formacionSuperiorDefaultValues],
  experienciaLaboral: [experienciaLaboralDefaultValues],
};

const validationSchema = yup.object().shape({
  datosPersonales: datosPersonalesSchema,
  formacionBasica: formacionBasicaSchema,
  formacionSuperior: yup.array().of(formacionSuperiorSchema),
  experienciaLaboral: yup.array().of(experienciaLaboralSchema),
});

let documentId: string | undefined = "";

export default function CurriculumEditarPage() {
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

  function onError(errors: FieldErrors<Curriculum>) {
    console.log(errors);
  }

  function onSubmit(curriculum: Curriculum) {
    curriculum.documentId = documentId;
    fromM2ToDate(curriculum);
    console.log({ curriculum });
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
          Actualizar
        </Button>
      </form>
    </>
  );
}
