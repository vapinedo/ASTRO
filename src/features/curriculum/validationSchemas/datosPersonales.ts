import * as yup from "yup";

const datosPersonales = yup.object().shape({
  primerApellido: yup
    .string()
    .min(3, "Mínimo 3 caracteres")
    .required("Primer apellido es requerido"),
  segundoApellido: yup
    .string()
    .min(3, "Mínimo 3 caracteres")
    .required("Segundo apellido es requerido"),
  nombres: yup
    .string()
    .min(3, "Mínimo 3 caracteres")
    .required("Nombres es requerido"),
  tipoIdentificacion: yup.string().required("Tipo ocumento es requerido"),
  numeroIdentificacion: yup
    .string()
    .typeError("Solo ingrese números")
    .required("Número documento es requerido"),
  sexo: yup.string().required("Sexo es requerido"),
  nacionalidad: yup.string().required("Nacionalidad es requerido"),
  pais: yup.string().when("nacionalidad", {
    is: "ext",
    then: (datosPersonales) => datosPersonales.required("País es requerido"),
  }),
  tipolibretaMilitar: yup.string().when("sexo", {
    is: "m",
    then: (datosPersonales) =>
      datosPersonales.required("Tipo libreta es requerido"),
  }),
  numeroLibretaMilitar: yup.string().when("sexo", {
    is: "m",
    then: (datosPersonales) =>
      datosPersonales.required("Número libreta es requerido"),
  }),
  distritoLibretaMilitar: yup.string().when("sexo", {
    is: "m",
    then: (datosPersonales) =>
      datosPersonales.required("Distrito libreta es requerido"),
  }),
  fechaNacimiento: yup.date().required("Fecha es requerido"),
  paisNacimiento: yup.string().required("País es requerido"),
  departamentoNacimiento: yup.string().required("Departamento es requerido"),
  municipioNacimiento: yup.string().required("Município es requerido"),
  direccionCorrespondencia: yup
    .string()
    .min(7, "Mínimo 7 caracteres")
    .required("Dirección requerido"),
  paisCorrespondencia: yup.string().required("País es requerido"),
  departamentoCorrespondencia: yup
    .string()
    .required("Departamento es requerido"),
  municipioCorrespondencia: yup.string().required("município es requerido"),
  email: yup.string().email("Email es inválido").required("Email es requerido"),
});
export default datosPersonales;
