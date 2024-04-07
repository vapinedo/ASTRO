import * as yup from "yup";

const formacionBasica = yup.object().shape({
  educacionBasica: yup.string().required("Educación básica es requerido"),
  tituloObtenido: yup
    .string()
    .min(9, "Mínimo 9 caracteres")
    .required("Título obtenido es requerido"),
  fechaGraduacion: yup.date().required("Fecha graduación es requerido"),
});
export default formacionBasica;
