export interface CurriculumNuevoInterface {
    datosPersonales: DatosPersonales;
    formacionBasica: FormacionBasica;
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
    TipolibretaMilitar: string;
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