import * as yup from "yup";
import { FormacionBasica } from "@models/Curriculum";

export const formacionBasicaDefaultValues: FormacionBasica = {
  educacionBasica: "",
  tituloObtenido: "",
  fechaGraduacion: null,
};

export const formacionBasicaSchema = yup.object().shape({
  educacionBasica: yup.string().required("Educación básica es requerido"),
  tituloObtenido: yup
    .string()
    .min(9, "Mínimo 9 caracteres")
    .required("Título obtenido es requerido"),
  fechaGraduacion: yup.date().required("Fecha graduación es requerido"),
});
