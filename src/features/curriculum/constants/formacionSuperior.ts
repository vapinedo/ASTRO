import * as yup from "yup";
import { FormacionSuperior } from "@models/Curriculum";

export const formacionSuperiorDefaultValues: FormacionSuperior = {
  modalidadAcademica: "",
  numeroSemestresAprobados: "",
  graduado: "",
  tituloObtenido: "",
  fechaTerminacion: null,
  numeroTarjetaProfesional: "",
};

export const formacionSuperiorSchema = yup.object().shape({
  modalidadAcademica: yup.string().required("Modalidad académica es requerido"),
  numeroSemestresAprobados: yup
    .string()
    .required("Numero semestres es requerido"),
  graduado: yup.string().required("Graduado es requerido"),
  tituloObtenido: yup
    .string()
    .min(6, "Mínimo 6 caracteres")
    .required("Título obtenido es requerido"),
  fechaTerminacion: yup.date().required("Fecha terminación es requerido"),
});
