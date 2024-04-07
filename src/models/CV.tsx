export interface CV {
  datosPersonales: DatosPersonales;
  documentId?: string;
  experienciaLaboral: ExperienciaLaboral[];
  formacionBasica: FormacionBasica;
  formacionSuperior: FormacionSuperior[];
  idiomas: Idioma[];
}

export interface DatosPersonales {
  departamentoCorrespondencia: string;
  departamentoNacimiento: string;
  direccionCorrespondencia: string;
  distritoLibretaMilitar: string;
  email: string;
  fechaNacimiento: Date | null;
  municipioCorrespondencia: string;
  municipioNacimiento: string;
  nacionalidad: string;
  nombres: string;
  numeroIdentificacion: string;
  numeroLibretaMilitar: string;
  pais: string;
  paisCorrespondencia: string;
  paisNacimiento: string;
  primerApellido: string;
  segundoApellido: string;
  sexo: string;
  tipoIdentificacion: string;
  tipolibretaMilitar: string;
}

export interface FormacionBasica {
  educacionBasica: string;
  fechaGraduacion: Date | null;
  tituloObtenido: string;
}

export interface FormacionSuperior {
  fechaTerminacion: Date | null;
  graduado: string;
  modalidadAcademica: string;
  numeroSemestresAprobados: string;
  numeroTarjetaProfesional: string;
  tituloObtenido: string;
}

export interface Idioma {
  idioma: string;
  loEscribe: string;
  loHabla: string;
  loLee: string;
}

export interface ExperienciaLaboral {
  cargo: string;
  departamento: string;
  dependencia: string;
  direccion: string;
  email: string;
  empresa: string;
  fechaIngreso: Date | null;
  fechaRetiro: Date | null;
  municipio: string;
  pais: string;
  telefono: string;
  tipoEmpresa: string;
}
