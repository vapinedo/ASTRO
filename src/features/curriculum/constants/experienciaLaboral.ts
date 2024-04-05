import * as yup from "yup";
import { ExperienciaLaboral } from "@models/Curriculum";

export const experienciaLaboralDefaultValues: ExperienciaLaboral = {
  empresa: "",
  tipoEmpresa: "",
  pais: "",
  departamento: "",
  municipio: "",
  email: "",
  telefono: "",
  fechaIngreso: null,
  fechaRetiro: null,
  cargo: "",
  dependencia: "",
  direccion: "",
};

export const experienciaLaboralSchema = yup.object().shape({
  empresa: yup
    .string()
    .min(3, "Mínimo 3 caracteres")
    .required("Empresa es requerido"),
  tipoEmpresa: yup.string().required("Tipo empresa es requerido"),
  pais: yup.string().required("País es requerido"),
  departamento: yup.string().required("Departamento es requerido"),
  municipio: yup.string().required("Municipio es requerido"),
  email: yup.string().required("Email es requerido"),
  telefono: yup.string().required("Teléfono es requerido"),
  fechaIngreso: yup.date().required("Fecha ingreso es requerido"),
  cargo: yup
    .string()
    .min(6, "Mínimo 6 caracteres")
    .required("Cargo es requerido"),
  dependencia: yup
    .string()
    .min(4, "Mínimo 4 caracteres")
    .required("Dependencia es requerido"),
  direccion: yup
    .string()
    .min(4, "Mínimo 4 caracteres")
    .required("Dirección es requerido"),
});
