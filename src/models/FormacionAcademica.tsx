export interface FormacionAcademica {
    educacionBasicaYMedia: {
        gradoEscolar: string,
        tituloObtenido: string,
        mesGrado: string,
        anioGrado: string
    },
    educacionSuperior: [EduSuperior],
    idiomas: [Idioma]
}

interface Idioma {
    idioma: string,
    loHabla: string,
    loLee: string,
    loEscribe: string
}

interface EduSuperior {
    modalidadAcademica: string,
    numeroSemestresAprobados: string,
    graduado: string,
    nombreEstudiosOTituloObtenido: string,
    mesTerminacion: string,
    anioTerminacion: string,
    numeroTarjetaProfesional: string | null
}