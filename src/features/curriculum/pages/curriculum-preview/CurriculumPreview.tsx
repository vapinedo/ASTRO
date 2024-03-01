import { useState, useEffect } from "react";
import file from "../../../../cv-format.pdf";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { Curriculum, ExperienciaLaboral, FormacionSuperior, Idioma } from "../../../../models/Curriculum";
import { getDoubleSpacedYear, getSpacedDay, getSpacedMonth, getSpacedYear, getTotalYearsOfExperience } from "../../../../helpers/DateHelper";

const drawText = (page: any, font: any, text: any, x: number, y: number, fontSize = 11) => {
    page.drawText(text, {
        x,
        y,
        font,
        size: fontSize,
        color: rgb(0, 0, 0)
    })
};

interface TotalExperiencia {
    monthsPrivadas: number;
    monthsPublicas: number;
    yearsPrivadas: number;
    yearsPublicas: number;
}

export default function CurriculumPreview() {

    const [pdfInfo, setPdfInfo] = useState([]);
    
    useEffect(() => {
        const data = localStorage.getItem("curriculum");
        if (data !== null) {
            const curriculum = JSON.parse(data);
            modifyPdf(curriculum);
        }
    }, []);

    const modifyPdf = async (curriculum: Curriculum) => {
        const existingPdfBytes = await fetch(file)
            .then((res) => res.arrayBuffer());

        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

        const pages = pdfDoc.getPages();
        const page1 = pages[0];
        const page2 = pages[1];
        const page3 = pages[2];

        // PAGE 1
        // Get the width and height of the first page
        const { width, height } = page1.getSize();
        drawText(page1, helveticaFont, curriculum?.datosPersonales?.primerApellido, 65, 602);
        drawText(page1, helveticaFont, curriculum?.datosPersonales?.segundoApellido, 231, 602);
        drawText(page1, helveticaFont, curriculum?.datosPersonales?.nombres, 400, 602);

        // identificacion
        switch(curriculum?.datosPersonales?.tipoIdentificacion) {
            case "cc": drawText(page1, helveticaFont, "X", 82.5, 574); break;
            case "ce": drawText(page1, helveticaFont, "X", 113, 574); break;
            case "pas": drawText(page1, helveticaFont, "X", 147, 574); break;
        }
        drawText(page1, helveticaFont, curriculum?.datosPersonales?.numeroIdentificacion, 185, 574.8);

        // sexo
        switch(curriculum?.datosPersonales?.sexo) {
            case "f": drawText(page1, helveticaFont, "X", 316.5, 573.4); break;
            case "m": drawText(page1, helveticaFont, "X", 341, 573.4); break;
        }

        // nacionalidad
        switch(curriculum?.datosPersonales?.nacionalidad) {
            case "col": drawText(page1, helveticaFont, "X", 383.6, 573.4); break;
            case "ext": drawText(page1, helveticaFont, "X", 456.3, 573.4); break;
        }

        // pais
        switch(curriculum?.datosPersonales?.nacionalidad) {
            case "col": drawText(page1, helveticaFont, curriculum?.datosPersonales?.pais, 478, 574.8); break;
            case "ext": drawText(page1, helveticaFont, "X", 456.3, 573.4); break;
        }

        // libreta militar tipo
        switch(curriculum?.datosPersonales?.tipolibretaMilitar) {
            case "primera": drawText(page1, helveticaFont, "X", 145.6, 543.2); break;
            case "segunda": drawText(page1, helveticaFont, "X", 261.2, 543.2); break;
        }

        // libreta militar numero
        drawText(page1, helveticaFont, curriculum?.datosPersonales?.numeroLibretaMilitar, 340, 545);

        // libreta militar distrito
        drawText(page1, helveticaFont, curriculum?.datosPersonales?.distritoLibretaMilitar, 500, 545);

        // dia de nacimiento
        drawText(page1, helveticaFont, getSpacedDay(curriculum.datosPersonales.fechaNacimiento), 137.4, 507);
        // mes de nacimiento
        drawText(page1, helveticaFont, getSpacedMonth(curriculum.datosPersonales.fechaNacimiento), 187, 507);
        // año de nacimiento
        drawText(page1, helveticaFont, getSpacedYear(curriculum.datosPersonales.fechaNacimiento), 237.2, 507);

        // Pais, Departamento y municipio de nacimiento
        drawText(page1, helveticaFont, curriculum.datosPersonales.paisNacimiento, 120, 491);
        drawText(page1, helveticaFont, curriculum.datosPersonales.departamentoNacimiento, 120, 474);
        drawText(page1, helveticaFont, curriculum.datosPersonales.municipioNacimiento, 120, 455.7);

        // direccion de correspondencia
        drawText(page1, helveticaFont, curriculum.datosPersonales.direccionCorrespondencia, 295, 509);
        drawText(page1, helveticaFont, curriculum.datosPersonales.paisCorrespondencia, 320, 492);
        drawText(page1, helveticaFont, curriculum.datosPersonales.departamentoCorrespondencia, 474, 492);
        drawText(page1, helveticaFont, curriculum.datosPersonales.municipioCorrespondencia, 348, 475);

        const charCount = curriculum.datosPersonales.email.length;
        drawText(page1, helveticaFont, curriculum.datosPersonales.email, 472, 455.8, 7);

        // formacion básica
        switch(curriculum?.formacionBasica.educacionBasica) {
            case "1": drawText(page1, helveticaFont, "X", 100, 317, 18); break;
            case "2": drawText(page1, helveticaFont, "X", 116.4, 317, 18); break;
            case "3": drawText(page1, helveticaFont, "X", 133, 317, 18); break;
            case "4": drawText(page1, helveticaFont, "X", 151, 317, 18); break;
            case "5": drawText(page1, helveticaFont, "X", 167.3, 317, 18); break;
            case "6": drawText(page1, helveticaFont, "X", 184.5, 317, 18); break;
            case "7": drawText(page1, helveticaFont, "X", 201.5, 317, 18); break;
            case "8": drawText(page1, helveticaFont, "X", 218, 317, 18); break;
            case "9": drawText(page1, helveticaFont, "X", 235.4, 317, 18); break;
            case "10": drawText(page1, helveticaFont, "X", 253.5, 317, 18); break;
            case "11": drawText(page1, helveticaFont, "X", 270, 317, 18); break;
        }
        // titulo obtenido basica
        drawText(page1, helveticaFont, curriculum.formacionBasica.tituloObtenido, 363, 349.8);
        // mes grado basica
        drawText(page1, helveticaFont, getSpacedMonth(curriculum.formacionBasica.fechaGraduacion), 351.5, 319.8);
        // año grado basica
        drawText(page1, helveticaFont, getSpacedYear(curriculum.formacionBasica.fechaGraduacion), 412, 319.8);

        // formacion superior 1
        function printFormacionSuperior(formacionSuperior: FormacionSuperior[]) {
            if (formacionSuperior[0]) {
                switch(formacionSuperior[0].modalidadAcademica) {
                    case "tecnica": drawText(page1, helveticaFont, "TC", 74, 200); break;
                    case "tecnologica": drawText(page1, helveticaFont, "TL", 74, 200); break;
                    case "tecnologa": drawText(page1, helveticaFont, "TE", 74, 200); break;
                    case "unversitaria": drawText(page1, helveticaFont, "UN", 74, 200); break;
                    case "especializacion": drawText(page1, helveticaFont, "ES", 74, 200); break;
                    case "maestria": drawText(page1, helveticaFont, "MG", 74, 200); break;
                    case "doctorado": drawText(page1, helveticaFont, "DOC", 74, 200); break;
                }
                drawText(page1, helveticaFont, formacionSuperior[0].numeroSemestresAprobados, 132, 200);
                // grauado
                switch(formacionSuperior[0].graduado) {
                    case "si": drawText(page1, helveticaFont, "X", 183, 200); break;
                    case "no": drawText(page1, helveticaFont, "X", 207, 200); break;
                }
                drawText(page1, helveticaFont, formacionSuperior[0].tituloObtenido, 230, 200);
                drawText(page1, helveticaFont, getSpacedMonth(formacionSuperior[0].fechaTerminacion), 427, 200);
                drawText(page1, helveticaFont, getDoubleSpacedYear(formacionSuperior[0].fechaTerminacion), 453, 200);
                drawText(page1, helveticaFont, formacionSuperior[0].numeroTarjetaProfesional, 503.5, 200, 9);
            }

            if (formacionSuperior[1]) {
                switch(formacionSuperior[1].modalidadAcademica) {
                    case "tecnica": drawText(page1, helveticaFont, "TC", 74, 182.5); break;
                    case "tecnologica": drawText(page1, helveticaFont, "TL", 74, 182.5); break;
                    case "tecnologa": drawText(page1, helveticaFont, "TE", 74, 182.5); break;
                    case "unversitaria": drawText(page1, helveticaFont, "UN", 74, 182.5); break;
                    case "especializacion": drawText(page1, helveticaFont, "ES", 74, 182.5); break;
                    case "maestria": drawText(page1, helveticaFont, "MG", 74, 182.5); break;
                    case "doctorado": drawText(page1, helveticaFont, "DOC", 74, 182.5); break;
                }
                drawText(page1, helveticaFont, formacionSuperior[1].numeroSemestresAprobados, 135, 182.5);
                // grauado
                switch(formacionSuperior[1].graduado) {
                    case "si": drawText(page1, helveticaFont, "X", 183, 182.5); break;
                    case "no": drawText(page1, helveticaFont, "X", 207, 182.5); break;
                }
                drawText(page1, helveticaFont, formacionSuperior[1].tituloObtenido, 230, 182.5);
                drawText(page1, helveticaFont, getSpacedMonth(formacionSuperior[1].fechaTerminacion), 427, 182.5);
                drawText(page1, helveticaFont, getDoubleSpacedYear(formacionSuperior[1].fechaTerminacion), 453, 182.5);
                drawText(page1, helveticaFont, formacionSuperior[1].numeroTarjetaProfesional, 503.5, 183.5, 9);
            }
            if (formacionSuperior[2]) {
                switch(formacionSuperior[2].modalidadAcademica) {
                    case "tecnica": drawText(page1, helveticaFont, "TC", 74, 166); break;
                    case "tecnologica": drawText(page1, helveticaFont, "TL", 74, 166); break;
                    case "tecnologa": drawText(page1, helveticaFont, "TE", 74, 166); break;
                    case "unversitaria": drawText(page1, helveticaFont, "UN", 74, 166); break;
                    case "especializacion": drawText(page1, helveticaFont, "ES", 74, 166); break;
                    case "maestria": drawText(page1, helveticaFont, "MG", 74, 166); break;
                    case "doctorado": drawText(page1, helveticaFont, "DOC", 74, 166); break;
                }
                drawText(page1, helveticaFont, formacionSuperior[2].numeroSemestresAprobados, 135, 166);
                // grauado
                switch(formacionSuperior[2].graduado) {
                    case "si": drawText(page1, helveticaFont, "X", 183, 166); break;
                    case "no": drawText(page1, helveticaFont, "X", 207, 166); break;
                }
                drawText(page1, helveticaFont, formacionSuperior[2].tituloObtenido, 230, 166);
                drawText(page1, helveticaFont, getSpacedMonth(formacionSuperior[2].fechaTerminacion), 427, 166);
                drawText(page1, helveticaFont, getDoubleSpacedYear(formacionSuperior[2].fechaTerminacion), 453, 166);
                drawText(page1, helveticaFont, formacionSuperior[2].numeroTarjetaProfesional, 503.5, 166, 9);
            }
            if (formacionSuperior[3]) {
                switch(formacionSuperior[3].modalidadAcademica) {
                    case "tecnica": drawText(page1, helveticaFont, "TC", 74, 148.5); break;
                    case "tecnologica": drawText(page1, helveticaFont, "TL", 74, 148.5); break;
                    case "tecnologa": drawText(page1, helveticaFont, "TE", 74, 148.5); break;
                    case "unversitaria": drawText(page1, helveticaFont, "UN", 74, 148.5); break;
                    case "especializacion": drawText(page1, helveticaFont, "ES", 74, 148.5); break;
                    case "maestria": drawText(page1, helveticaFont, "MG", 74, 148.5); break;
                    case "doctorado": drawText(page1, helveticaFont, "DOC", 74, 148.5); break;
                }
                drawText(page1, helveticaFont, formacionSuperior[3].numeroSemestresAprobados, 135, 148.5);
                // grauado
                switch(formacionSuperior[3].graduado) {
                    case "si": drawText(page1, helveticaFont, "X", 183, 148.5); break;
                    case "no": drawText(page1, helveticaFont, "X", 207, 148.5); break;
                }
                drawText(page1, helveticaFont, formacionSuperior[3].tituloObtenido, 230, 148.5);
                drawText(page1, helveticaFont, getSpacedMonth(formacionSuperior[3].fechaTerminacion), 427, 148.5);
                drawText(page1, helveticaFont, getDoubleSpacedYear(formacionSuperior[3].fechaTerminacion), 453, 148.5);
                drawText(page1, helveticaFont, formacionSuperior[3].numeroTarjetaProfesional, 503.5, 149, 9);
            }
            if (formacionSuperior[4]) {
                switch(formacionSuperior[4].modalidadAcademica) {
                    case "tecnica": drawText(page1, helveticaFont, "TC", 74, 131); break;
                    case "tecnologica": drawText(page1, helveticaFont, "TL", 74, 131); break;
                    case "tecnologa": drawText(page1, helveticaFont, "TE", 74, 131); break;
                    case "unversitaria": drawText(page1, helveticaFont, "UN", 74, 131); break;
                    case "especializacion": drawText(page1, helveticaFont, "ES", 74, 131); break;
                    case "maestria": drawText(page1, helveticaFont, "MG", 74, 131); break;
                    case "doctorado": drawText(page1, helveticaFont, "DOC", 74, 131); break;
                }
                drawText(page1, helveticaFont, formacionSuperior[4].numeroSemestresAprobados, 135, 131);
                // grauado
                switch(formacionSuperior[4].graduado) {
                    case "si": drawText(page1, helveticaFont, "X", 183, 131); break;
                    case "no": drawText(page1, helveticaFont, "X", 207, 131); break;
                }
                drawText(page1, helveticaFont, formacionSuperior[4].tituloObtenido, 230, 131);
                drawText(page1, helveticaFont, getSpacedMonth(formacionSuperior[4].fechaTerminacion), 427, 131);
                drawText(page1, helveticaFont, getDoubleSpacedYear(formacionSuperior[4].fechaTerminacion), 453, 131);
                drawText(page1, helveticaFont, formacionSuperior[4].numeroTarjetaProfesional, 503.5, 132, 9);
            }
        }
        printFormacionSuperior(curriculum.formacionSuperior);
        
        // Idiomas
        function printIdiomas(idiomas: Idioma[]) {
            if (idiomas[0]) {
                drawText(page1, helveticaFont, curriculum.idiomas[0].idioma, 160, 71);
                
                switch(idiomas[0].loHabla) {
                    case "r": drawText(page1, helveticaFont, "X", 303, 71); break;
                    case "b": drawText(page1, helveticaFont, "X", 320, 71); break;
                    case "mb": drawText(page1, helveticaFont, "X", 337, 71); break;
                }
                switch(idiomas[0].loLee) {
                    case "r": drawText(page1, helveticaFont, "X", 354.5, 71); break;
                    case "b": drawText(page1, helveticaFont, "X", 371.5, 71); break;
                    case "mb": drawText(page1, helveticaFont, "X", 388, 71); break;
                }
                switch(idiomas[0].loEscribe) {
                    case "r": drawText(page1, helveticaFont, "X", 307, 71); break;
                    case "b": drawText(page1, helveticaFont, "X", 423, 71); break;
                    case "mb": drawText(page1, helveticaFont, "X", 440, 71); break;
                }
            }
            if (idiomas[1]) {
                drawText(page1, helveticaFont, curriculum.idiomas[1].idioma, 160, 53.6);
                
                switch(idiomas[1].loHabla) {
                    case "r": drawText(page1, helveticaFont, "X", 303, 53.6); break;
                    case "b": drawText(page1, helveticaFont, "X", 320, 53.6); break;
                    case "mb": drawText(page1, helveticaFont, "X", 337, 53.6); break;
                }
                switch(idiomas[1].loLee) {
                    case "r": drawText(page1, helveticaFont, "X", 354.5, 53.6); break;
                    case "b": drawText(page1, helveticaFont, "X", 371.5, 53.6); break;
                    case "mb": drawText(page1, helveticaFont, "X", 388, 53.6); break;
                }
                switch(idiomas[1].loEscribe) {
                    case "r": drawText(page1, helveticaFont, "X", 307, 53.6); break;
                    case "b": drawText(page1, helveticaFont, "X", 423, 53.6); break;
                    case "mb": drawText(page1, helveticaFont, "X", 440, 53.6); break;
                }
            }
        }
        printIdiomas(curriculum.idiomas);

        function printExoerienciaLaboral(experienciaLaboral: ExperienciaLaboral[]) {
            if (experienciaLaboral[0]) {
                drawText(page2, helveticaFont, experienciaLaboral[0].empresa, 65, 550.5);
                
                switch(experienciaLaboral[0].tipoEmpresa) {
                    case "publica": drawText(page2, helveticaFont, "X", 344, 550.5); break;
                    case "privada": drawText(page2, helveticaFont, "X", 390, 550.5); break;
                }
                drawText(page2, helveticaFont, experienciaLaboral[0].pais, 428, 550.5);
                drawText(page2, helveticaFont, experienciaLaboral[0].departamento, 65, 520);
                drawText(page2, helveticaFont, experienciaLaboral[0].municipio, 242, 520);
                drawText(page2, helveticaFont, experienciaLaboral[0].email, 416, 520, 9);
                drawText(page2, helveticaFont, experienciaLaboral[0].telefono, 65, 491.5);

                drawText(page2, helveticaFont, getSpacedDay(experienciaLaboral[0].fechaIngreso), 261.5, 491.5);
                drawText(page2, helveticaFont, getSpacedMonth(experienciaLaboral[0].fechaIngreso), 311.5, 491.5);
                drawText(page2, helveticaFont, getSpacedYear(experienciaLaboral[0].fechaIngreso), 359, 491.5);

                drawText(page2, helveticaFont, getSpacedDay(experienciaLaboral[0].fechaRetiro), 428.7, 491.5);
                drawText(page2, helveticaFont, getSpacedMonth(experienciaLaboral[0].fechaRetiro), 478.3, 491.5);
                drawText(page2, helveticaFont, getSpacedYear(experienciaLaboral[0].fechaRetiro), 525.7, 491.5);

                drawText(page2, helveticaFont, experienciaLaboral[0].cargo, 65, 461);
                drawText(page2, helveticaFont, experienciaLaboral[0].dependencia, 242, 461);
                drawText(page2, helveticaFont, experienciaLaboral[0].direccion, 410, 461);
            }
            
            if (experienciaLaboral[1]) {
                drawText(page2, helveticaFont, experienciaLaboral[1].empresa, 65, 419);
                
                switch(experienciaLaboral[1].tipoEmpresa) {
                    case "publica": drawText(page2, helveticaFont, "X", 344, 419); break;
                    case "privada": drawText(page2, helveticaFont, "X", 390, 419); break;
                }
                drawText(page2, helveticaFont, experienciaLaboral[1].pais, 428, 419);
                drawText(page2, helveticaFont, experienciaLaboral[1].departamento, 65, 390);
                drawText(page2, helveticaFont, experienciaLaboral[1].municipio, 242, 390);
                drawText(page2, helveticaFont, experienciaLaboral[1].email, 414, 390, 9);
                drawText(page2, helveticaFont, experienciaLaboral[1].telefono, 65, 359);

                drawText(page2, helveticaFont, getSpacedDay(experienciaLaboral[1].fechaIngreso), 262, 361);
                drawText(page2, helveticaFont, getSpacedMonth(experienciaLaboral[1].fechaIngreso), 311.5, 361);
                drawText(page2, helveticaFont, getSpacedYear(experienciaLaboral[1].fechaIngreso), 359, 361);

                drawText(page2, helveticaFont, getSpacedDay(experienciaLaboral[1].fechaRetiro), 429, 361);
                drawText(page2, helveticaFont, getSpacedMonth(experienciaLaboral[1].fechaRetiro), 478, 361);
                drawText(page2, helveticaFont, getSpacedYear(experienciaLaboral[1].fechaRetiro), 526, 361);

                drawText(page2, helveticaFont, experienciaLaboral[1].cargo, 65, 331);
                drawText(page2, helveticaFont, experienciaLaboral[1].dependencia, 242, 331);
                drawText(page2, helveticaFont, experienciaLaboral[1].direccion, 410, 331);
            }

            if (experienciaLaboral[2]) {
                drawText(page2, helveticaFont, experienciaLaboral[2].empresa, 65, 290);
                
                switch(experienciaLaboral[2].tipoEmpresa) {
                    case "publica": drawText(page2, helveticaFont, "X", 344, 290); break;
                    case "privada": drawText(page2, helveticaFont, "X", 390, 290); break;
                }
                drawText(page2, helveticaFont, experienciaLaboral[2].pais, 428, 290);
                drawText(page2, helveticaFont, experienciaLaboral[2].departamento, 65, 260);
                drawText(page2, helveticaFont, experienciaLaboral[2].municipio, 242, 260);
                drawText(page2, helveticaFont, experienciaLaboral[2].email, 414, 260, 9);
                drawText(page2, helveticaFont, experienciaLaboral[2].telefono, 65, 230);

                drawText(page2, helveticaFont, getSpacedDay(experienciaLaboral[2].fechaIngreso), 262, 231);
                drawText(page2, helveticaFont, getSpacedMonth(experienciaLaboral[2].fechaIngreso), 311.5, 231);
                drawText(page2, helveticaFont, getSpacedYear(experienciaLaboral[2].fechaIngreso), 359, 231);

                drawText(page2, helveticaFont, getSpacedDay(experienciaLaboral[2].fechaRetiro), 429, 231);
                drawText(page2, helveticaFont, getSpacedMonth(experienciaLaboral[2].fechaRetiro), 478, 231);
                drawText(page2, helveticaFont, getSpacedYear(experienciaLaboral[2].fechaRetiro), 526, 231);

                drawText(page2, helveticaFont, experienciaLaboral[2].cargo, 65, 201);
                drawText(page2, helveticaFont, experienciaLaboral[2].dependencia, 242, 201);
                drawText(page2, helveticaFont, experienciaLaboral[2].direccion, 410, 201);
            }

            if (experienciaLaboral[3]) {
                drawText(page2, helveticaFont, experienciaLaboral[3].empresa, 65, 160);
                
                switch(experienciaLaboral[3].tipoEmpresa) {
                    case "publica": drawText(page2, helveticaFont, "X", 344, 160); break;
                    case "privada": drawText(page2, helveticaFont, "X", 390, 160); break;
                }
                drawText(page2, helveticaFont, experienciaLaboral[3].pais, 428, 160);
                drawText(page2, helveticaFont, experienciaLaboral[3].departamento, 65, 129);
                drawText(page2, helveticaFont, experienciaLaboral[3].municipio, 242, 129);
                drawText(page2, helveticaFont, experienciaLaboral[3].email, 414, 129, 9);
                drawText(page2, helveticaFont, experienciaLaboral[3].telefono, 65, 99);

                drawText(page2, helveticaFont, getSpacedDay(experienciaLaboral[3].fechaIngreso), 262, 101);
                drawText(page2, helveticaFont, getSpacedMonth(experienciaLaboral[3].fechaIngreso), 311.5, 101);
                drawText(page2, helveticaFont, getSpacedYear(experienciaLaboral[3].fechaIngreso), 359, 101);

                drawText(page2, helveticaFont, getSpacedDay(experienciaLaboral[3].fechaRetiro), 429, 101);
                drawText(page2, helveticaFont, getSpacedMonth(experienciaLaboral[3].fechaRetiro), 478, 101);
                drawText(page2, helveticaFont, getSpacedYear(experienciaLaboral[3].fechaRetiro), 526, 101);

                drawText(page2, helveticaFont, experienciaLaboral[3].cargo, 65, 70);
                drawText(page2, helveticaFont, experienciaLaboral[3].dependencia, 242, 70);
                drawText(page2, helveticaFont, experienciaLaboral[3].direccion, 410, 70);
            }
        }
        printExoerienciaLaboral(curriculum.experienciaLaboral);
        
        // PAGE 3
        // experiencia sector publico
        function printAniosExperiencia(experienciaLaboral: ExperienciaLaboral[]) {
            let privadas = [];
            let publicas = [];

            let totalExperiencia: TotalExperiencia = {
                monthsPrivadas: 0,
                monthsPublicas: 0,
                yearsPrivadas: 0,
                yearsPublicas: 0,
            };

            for (let i=0; i<experienciaLaboral.length; i++) {
                experienciaLaboral[i].tipoEmpresa === "privada"
                    ? privadas.push(experienciaLaboral[i])
                    : publicas.push(experienciaLaboral[i])
            }

            // experiencia sector publico
            if (publicas.length > 0) {
                const [publicYears, publicMonths] = getTotalYearsOfExperience(publicas);
                totalExperiencia.yearsPublicas = publicYears;
                totalExperiencia.monthsPublicas = publicMonths;
                
                drawText(page3, helveticaFont, publicYears.toString(), 388, 592);
                drawText(page3, helveticaFont, publicMonths.toString(), 458, 592);
            }

            // experiencia sector privado
            if (privadas.length > 0) {
                const [privateYears, privateMonths] = getTotalYearsOfExperience(privadas);
                totalExperiencia.yearsPrivadas = privateYears;
                totalExperiencia.monthsPrivadas = privateMonths;

                drawText(page3, helveticaFont, privateYears.toString(), 388, 565);
                drawText(page3, helveticaFont, privateMonths.toString(), 458, 565);
            }

            const [fullYears, fullMonths] = printTotalAniosExperiencia(totalExperiencia);
            drawText(page3, helveticaFont, fullYears.toString(), 388, 511);
            drawText(page3, helveticaFont, fullMonths.toString(), 458, 511);
        }
        printAniosExperiencia(curriculum.experienciaLaboral);

        function printTotalAniosExperiencia(exp: TotalExperiencia) {
            let totalExp = {
                totalAnios: exp.yearsPrivadas + exp.yearsPublicas,
                totalMonths: exp.monthsPrivadas + exp.monthsPublicas
            };
            let years = totalExp.totalAnios + Math.floor(totalExp.totalMonths / 12);
            let months = totalExp.totalMonths % 12;
            return [years, months];
        }

        // acepta terminos
        drawText(page3, helveticaFont, "X", 268.5, 418.5, 13);

        // ciudad y fecha de digilenciamiento
        // drawText(page3, helveticaFont, "URIBIA, LA GUAJIRA. Junio 10 de 2023", 220, 337);

        const pdfBytes = await pdfDoc.save();
        const bytes = new Uint8Array(pdfBytes);
        const blob = new Blob([bytes], { type: "application/pdf" });
        const docUrl = URL.createObjectURL(new Blob([pdfBytes], { type: "application/pdf" }))
        setPdfInfo(docUrl);
    };

    return (
        <>
            {<iframe title="test-frame" src={pdfInfo} type="application/pdf" />}
        </>
    );
}