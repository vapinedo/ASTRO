import file from "../cv-format.pdf";
import { useState, useEffect } from 'react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

const drawText = (page, font, text, x, y, fontSize) => {
  page.drawText(text, {
    x,
    y,
    font,
    size: fontSize || 11,
    color: rgb(0, 0, 0)
  });
};

const GeneratePDf = () => {
  const [pdfInfo, setPdfInfo] = useState([]);

  useEffect(() => {
    modifyPdf();
  }, []);

  const modifyPdf = async () => {
    const existingPdfBytes = await fetch(file)
      .then((res) => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const pages = pdfDoc.getPages();
    const page1 = pages[0];
    const page2 = pages[1];
    const page3 = pages[2];

    // PAGE 1
    // Get the width and height of the first page
    const { width, height } = page1.getSize();
    drawText(page1, helveticaFont, "PINEDO", 70, 602);
    drawText(page1, helveticaFont, "MARTINEZ", 236, 602);
    drawText(page1, helveticaFont, "VICTOR ALFONSO", 405, 602);

    // identificacion
    drawText(page1, helveticaFont, "X", 82.5, 574);
    drawText(page1, helveticaFont, "17.827.282", 185, 574);
    drawText(page1, helveticaFont, "X", 341, 574);
    drawText(page1, helveticaFont, "X", 383.5, 574);

    // libreta militar
    drawText(page1, helveticaFont, "X", 261, 544);
    drawText(page1, helveticaFont, "17.827.282", 340, 544);
    drawText(page1, helveticaFont, "45", 500, 544);

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

    // formacion academica
    drawText(page1, helveticaFont, "X", 270, 317, 18);
    drawText(page1, helveticaFont, "1 2", 351.5, 320);
    drawText(page1, helveticaFont, "1 9 9 9", 412, 320);

    // modalidad academica 1
    drawText(page1, helveticaFont, "UN", 74, 200);
    drawText(page1, helveticaFont, "10", 135, 200);
    drawText(page1, helveticaFont, "X", 183, 200);
    drawText(page1, helveticaFont, "BACHILLER ACADEMICO", 230, 200);
    drawText(page1, helveticaFont, "12", 427, 200);
    drawText(page1, helveticaFont, "1", 450, 200);
    drawText(page1, helveticaFont, "9", 464.5, 200);
    drawText(page1, helveticaFont, "9", 478, 200);
    drawText(page1, helveticaFont, "9", 491.5, 200);
    drawText(page1, helveticaFont, "GAG-89556-FA56", 503.5, 200, 7);

    // modalidad academica 2
    drawText(page1, helveticaFont, "MG", 74, 182.5);
    drawText(page1, helveticaFont, "2", 135, 182.5);
    drawText(page1, helveticaFont, "X", 206, 182.5);
    drawText(page1, helveticaFont, "MAGISTER EN GOBIERNO DE TI", 230, 182.5);
    drawText(page1, helveticaFont, "08", 427, 182.5);
    drawText(page1, helveticaFont, "2", 450, 182.5);
    drawText(page1, helveticaFont, "0", 464.5, 182.5);
    drawText(page1, helveticaFont, "1", 478, 182.5);
    drawText(page1, helveticaFont, "7", 491.5, 182.5);
    drawText(page1, helveticaFont, "GAG-89556-FA56", 503.5, 182.5, 7);

    // idioma 1
    drawText(page1, helveticaFont, "INGLÉS", 160, 71);
    drawText(page1, helveticaFont, "X", 321, 71);
    drawText(page1, helveticaFont, "X", 372, 71);
    drawText(page1, helveticaFont, "X", 424, 71);

    // PAGE 2
    // empresa actual
    drawText(page2, helveticaFont, "SOFTSERVE", 65, 550);
    drawText(page2, helveticaFont, "X", 394, 550);
    drawText(page2, helveticaFont, "ESTADOS UNIDOS", 428, 550);
    drawText(page2, helveticaFont, "TEXAS", 65, 520);
    drawText(page2, helveticaFont, "HOUSTON", 242, 520);
    drawText(page2, helveticaFont, "softserveinc@info.com", 416, 520);
    drawText(page2, helveticaFont, "555 880 4023", 65, 491.5);
    drawText(page2, helveticaFont, "0 1", 261.5, 491.5);
    drawText(page2, helveticaFont, "0 8", 311.5, 491.5);
    drawText(page2, helveticaFont, "2 0 2 2", 359, 491.5);
    drawText(page2, helveticaFont, "INGENIERO DE SOFTWARE", 65, 461);
    drawText(page2, helveticaFont, "TI", 242, 461);
    drawText(page2, helveticaFont, "CALLE 27 #55-44", 410, 461);

    // experiencia 1
    drawText(page2, helveticaFont, "MAS GLOBAL CONSULTING", 65, 419);
    drawText(page2, helveticaFont, "X", 344, 419);
    drawText(page2, helveticaFont, "COLOMBIA", 428, 419);
    drawText(page2, helveticaFont, "ANTIOQUIA", 65, 390);
    drawText(page2, helveticaFont, "MEDELLIN", 242, 390);
    drawText(page2, helveticaFont, "masglobalconsulting@info.com", 414, 390);
    drawText(page2, helveticaFont, "555 880 4023", 65, 359);
    drawText(page2, helveticaFont, "0 4", 262, 361);
    drawText(page2, helveticaFont, "1 0", 311.5, 361);
    drawText(page2, helveticaFont, "2 0 2 1", 359, 361);
    drawText(page2, helveticaFont, "3 0", 429, 361);
    drawText(page2, helveticaFont, "0 7", 478, 361);
    drawText(page2, helveticaFont, "2 0 2 2", 526, 361);
    drawText(page2, helveticaFont, "INGENIERO DE SOFTWARE", 65, 331);
    drawText(page2, helveticaFont, "TI", 242, 331);
    drawText(page2, helveticaFont, "CALLE 27 #55-44", 410, 331);

    // experiencia 2
    drawText(page2, helveticaFont, "DIGITALWARE", 65, 290);
    drawText(page2, helveticaFont, "X", 344, 290);
    drawText(page2, helveticaFont, "COLOMBIA", 428, 290);
    drawText(page2, helveticaFont, "CUNDINAMARCA", 65, 260);
    drawText(page2, helveticaFont, "BOGOTÁ", 242, 260);
    drawText(page2, helveticaFont, "digitalware@info.com", 414, 260);
    drawText(page2, helveticaFont, "555 880 4023", 65, 230);
    drawText(page2, helveticaFont, "1 7", 262, 231);
    drawText(page2, helveticaFont, "0 7", 311.5, 231);
    drawText(page2, helveticaFont, "2 0 2 1", 359, 231);
    drawText(page2, helveticaFont, "0 4", 429, 231);
    drawText(page2, helveticaFont, "1 0", 478, 231);
    drawText(page2, helveticaFont, "2 0 2 1", 526, 231);
    drawText(page2, helveticaFont, "INGENIERO DE SOFTWARE", 65, 201);
    drawText(page2, helveticaFont, "TI", 242, 201);
    drawText(page2, helveticaFont, "CALLE 27 #55-44", 410, 201);

    // experiencia 3
    drawText(page2, helveticaFont, "ASESOFTWARE", 65, 160);
    drawText(page2, helveticaFont, "X", 344, 160);
    drawText(page2, helveticaFont, "COLOMBIA", 428, 160);
    drawText(page2, helveticaFont, "CUNDINAMARCA", 65, 129);
    drawText(page2, helveticaFont, "BOGOTÁ", 242, 129);
    drawText(page2, helveticaFont, "asesoftware@info.com", 414, 129);
    drawText(page2, helveticaFont, "555 880 4023", 65, 99);
    drawText(page2, helveticaFont, "1 6", 262, 101);
    drawText(page2, helveticaFont, "1 2", 311.5, 101);
    drawText(page2, helveticaFont, "2 0 2 0", 359, 101);
    drawText(page2, helveticaFont, "1 7", 429, 101);
    drawText(page2, helveticaFont, "0 7", 478, 101);
    drawText(page2, helveticaFont, "2 0 2 1", 526, 101);
    drawText(page2, helveticaFont, "INGENIERO DE SOFTWARE", 65, 70);
    drawText(page2, helveticaFont, "TI", 242, 70);
    drawText(page2, helveticaFont, "CALLE 27 #55-44", 410, 70);

    // PAGE 3
    // experiencia sector publico
    drawText(page3, helveticaFont, "5", 388, 592);
    drawText(page3, helveticaFont, "4", 458, 592);

    // experiencia sector privado
    drawText(page3, helveticaFont, "5", 388, 565);
    drawText(page3, helveticaFont, "2", 458, 565);

    // experiencia independiente
    drawText(page3, helveticaFont, "5", 388, 535);
    drawText(page3, helveticaFont, "2", 458, 535);

    // total tiempo experiencia
    drawText(page3, helveticaFont, "10", 386, 510);
    drawText(page3, helveticaFont, "6", 458, 510);

    // acepta terminos
    drawText(page3, helveticaFont, "X", 268.5, 418.5, 13);

    // ciudad y fecha de digilenciamiento
    drawText(page3, helveticaFont, "URIBIA, LA GUAJIRA. Junio 10 de 2023", 220, 337);

    const pdfBytes = await pdfDoc.save();
    const bytes = new Uint8Array(pdfBytes);
    const blob = new Blob([bytes], { type: "application/pdf" });
    const docUrl = URL.createObjectURL(new Blob([pdfBytes], { type: 'application/pdf' }))
    setPdfInfo(docUrl);
  };

  return (
    <>
      {<iframe width="100vw" height="100vh" title="test-frame" src={pdfInfo} type="application/pdf" />}
    </>
  );
};

export default GeneratePDf;