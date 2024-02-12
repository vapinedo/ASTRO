export interface CurriculumNuevoInterface {
    datosPersonales: DatosPersonales;
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
    fechaNacimiento: string;
    paisNacimiento: string;
    departamentoNacimiento: string;
    municipioNacimiento: string;
    direccionCorrespondencia: string;
    paisCorrespondencia: string;
    departamentoCorrespondencia: string;
    municipioCorrespondencia: string;
    email: string;
};