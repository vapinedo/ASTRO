export interface CurriculumNuevoInterface {
    datosPersonales: DatosPersonales;
    formacionBasica: FormacionBasica;
    formacionSuperior: FormacionSuperior[];
    idiomas: Idioma[];
};

export interface DatosPersonales {
    primerApellido: string;
    segundoApellido: string;
    nombres: string;
    tipoIdentificacion: string;
    numeroIdentificacion: string;
    sexo: string;
    nacionalidad: string;
    pais: string;
    tipolibretaMilitar: string;
    numeroLibretaMilitar: string;
    distritoLibretaMilitar: string;
    fechaNacimiento: Date;
    paisNacimiento: string;
    departamentoNacimiento: string;
    municipioNacimiento: string;
    direccionCorrespondencia: string;
    paisCorrespondencia: string;
    departamentoCorrespondencia: string;
    municipioCorrespondencia: string;
    email: string;
};

export interface FormacionBasica {
    educacionBasica: string;
    tituloObtenido: string;
    fechaGraduacion: Date;
}

export interface FormacionSuperior {
    modalidadAcademica: string;
    numeroSemestresAprobados: string;
    graduado: string;
    tituloObtenido: string;
    fechaTerminacion: Date;
    numeroTarjetaProfesional: string;
}

export interface Idioma {
    idioma: string;
    loHabla: string;
    loLee: string;
    loEscribie: string;
}