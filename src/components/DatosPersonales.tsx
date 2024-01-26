import cvFormat from "../cv-format.pdf";
import { useState, useEffect } from 'react';
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { DatosPersonalesI } from "../models/DatosPersonalesI";

const drawText = (page, font, text, x, y, fontSize) => {
    page.drawText(text, {
        x,
        y,
        font,
        size: fontSize || 11,
        color: rgb(0, 0, 0)
    });
};

const DatosPersonales = () => {
    const [pdfInfo, setPdfInfo] = useState([]);
    const [user, setUser] = useState<DatosPersonalesI | null>(null);

    const getUser = () => {
        fetch("http://localhost:3030/usuarios")
            .then((response) => response.json())
            .then((result) => {
                let data = result[0].datosPersonales;
                setUser(data);
                console.log(data);
            })
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        modifyPdf();
    }, []);

    const modifyPdf = async () => {
        const existingPdfBytes = await fetch(cvFormat)
            .then((res) => res.arrayBuffer());

        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

        const pages = pdfDoc.getPages();
        const page1 = pages[0];
        const page2 = pages[1];
        const page3 = pages[2];

        const { width, height } = page1.getSize();
        drawText(page1, helveticaFont, user?.primerApellido, 70, 602);
        drawText(page1, helveticaFont, user?.segundoApellido, 236, 602);
        drawText(page1, helveticaFont, user?.nombres, 405, 602);

        // identificacion
        drawText(page1, helveticaFont, "X", 82.5, 574);
        drawText(page1, helveticaFont, user?.numeroDocumentoIdentificacion, 185, 574);
        drawText(page1, helveticaFont, "X", 341, 574);
        drawText(page1, helveticaFont, "X", 383.5, 574);

        // libreta militar
        drawText(page1, helveticaFont, "X", 261, 544);
        drawText(page1, helveticaFont, user?.libretaMilitar.numero, 340, 544);
        drawText(page1, helveticaFont, user?.libretaMilitar.distrito, 500, 544);

        // fecha y lugar de nacimiento
        drawText(page1, helveticaFont, "3 0", 137, 507);
        drawText(page1, helveticaFont, "0 8", 187, 507);
        drawText(page1, helveticaFont, "1 9 8 2", 237, 507);
        drawText(page1, helveticaFont, "COLOMBIA", 120, 490);
        drawText(page1, helveticaFont, "LA GUAJIRA", 120, 473);
        drawText(page1, helveticaFont, "URIBIA", 120, 455.5);

        // direccion de correspondencia
        drawText(page1, helveticaFont, "CALLE 18 #7A - 147", 300, 507);
        drawText(page1, helveticaFont, "COLOMBIA", 320, 490);
        drawText(page1, helveticaFont, "LA GUAJIRA", 474, 490);
        drawText(page1, helveticaFont, "URIBIA", 348, 473);
        drawText(page1, helveticaFont, "302 367 8147", 348, 455.5);
        drawText(page1, helveticaFont, "victorpinedomartinez@gmail.com", 474, 455.5, 8);

        const pdfBytes = await pdfDoc.save();
        const bytes = new Uint8Array(pdfBytes);
        const blob = new Blob([bytes], { type: "application/pdf" });
        const docUrl = URL.createObjectURL(new Blob([pdfBytes], { type: 'application/pdf' }))
        setPdfInfo(docUrl);
    };

    return (
        <>
            <h2>Curriculum</h2>
            {/* {
                <iframe 
                    width="100vw" 
                    src={pdfInfo} 
                    height="100vh" 
                    title="test-frame" 
                    type="application/pdf" 
                />
            } */}
        </>
    );
};

export default DatosPersonales;