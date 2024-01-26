import { PDFBox } from "./PDFBox"

export interface DatosPersonalesI {
    nombres: PDFBox,
    primerApellido: PDFBox,
    segundoApellido: PDFBox,
    documentoIdentificacion: PDFBox,
    numeroDocumentoIdentificacion: PDFBox,
    sexo: PDFBox,
    nacionalidad: PDFBox,
    pais: PDFBox,
    libretaMilitar: {
        tipo: PDFBox,
        numero: PDFBox,
        distrito: PDFBox
    },
    fechaLugarNacimiento: {
        dia: PDFBox,
        mes: PDFBox,
        anio: PDFBox,
        pais: PDFBox,
        departamento: PDFBox,
        municipio: PDFBox
    },
    direccionCorrespondencia: {
        direccion: PDFBox
        pais: PDFBox,
        departamento: PDFBox,
        municipio: PDFBox,
        telefono: PDFBox,
        email: PDFBox
    }
}