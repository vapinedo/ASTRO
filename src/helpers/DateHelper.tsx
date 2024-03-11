import dayjs from "dayjs";
import { Curriculum, ExperienciaLaboral } from "../models/Curriculum";

export function getSpacedDay(firestoreTimestamp: any) {
    const jsDateObject = dayjs.unix(firestoreTimestamp.seconds).$d;
    const stringDay = jsDateObject.getDate().toString();

    switch(stringDay) {
        case "1": return "0 1"; break;
        case "2": return "0 2"; break;
        case "3": return "0 3"; break;
        case "4": return "0 4"; break;
        case "5": return "0 5"; break;
        case "6": return "0 6"; break;
        case "7": return "0 7"; break;
        case "8": return "0 8"; break;
        case "9": return "0 9"; break;
    }

    const spacedDay = stringDay.split("").join(" ");
    return spacedDay;
}

export function getSpacedMonth(firestoreTimestamp: any) {
    const jsDateObject = dayjs.unix(firestoreTimestamp.seconds).$d;
    const stringMonth = jsDateObject.getMonth().toString();
    
    switch(stringMonth) {
        case "0": return "0 1"; break;
        case "1": return "0 2"; break;
        case "2": return "0 3"; break;
        case "3": return "0 4"; break;
        case "4": return "0 5"; break;
        case "5": return "0 6"; break;
        case "6": return "0 7"; break;
        case "7": return "0 8"; break;
        case "8": return "0 9"; break;
        case "9": return "1 0"; break;
        case "10": return "1 1"; break;
        case "11": return "1 2"; break;
    }
}

export function getSpacedYear(firestoreTimestamp: any) {
    const jsDateObject = dayjs.unix(firestoreTimestamp.seconds).$d;
    const stringYear = jsDateObject.getFullYear().toString();
    const spacedYear = stringYear.split("").join(" ");
    return spacedYear;
}

export function getDoubleSpacedYear(firestoreTimestamp: any) {
    const jsDateObject = dayjs.unix(firestoreTimestamp.seconds).$d;
    const stringYear = jsDateObject.getFullYear().toString();
    const spacedYear = stringYear.split("").join("  ");
    return spacedYear;
}

export function getJsDate(firestoreTimestamp: any) {
    const jsDate = dayjs.unix(firestoreTimestamp.seconds).$d;
    return jsDate;
}

export function allFStimestampToDateObj(curriculum: Curriculum) {
    curriculum.datosPersonales.fechaNacimiento = getJsDate(curriculum.datosPersonales.fechaNacimiento);
    curriculum.formacionBasica.fechaGraduacion = getJsDate(curriculum.formacionBasica.fechaGraduacion);

    if (curriculum.formacionSuperior) {
        for (let i=0; i<curriculum.formacionSuperior.length; i++) {
            curriculum.formacionSuperior[i].fechaTerminacion = getJsDate(curriculum.formacionSuperior[i].fechaTerminacion);
        }
    }

    if (curriculum.experienciaLaboral) {
        for (let i=0; i<curriculum.experienciaLaboral.length; i++) {
            curriculum.experienciaLaboral[i].fechaIngreso = getJsDate(curriculum.experienciaLaboral[i].fechaIngreso);
            if (curriculum.experienciaLaboral[i].fechaRetiro) {
                curriculum.experienciaLaboral[i].fechaRetiro = getJsDate(curriculum.experienciaLaboral[i].fechaRetiro);
            }
        }
    }
    
    return curriculum;
}

export function fromM2ToDate(curriculum: Curriculum) {
    if (curriculum.datosPersonales.fechaNacimiento?.$d) {
        curriculum.datosPersonales.fechaNacimiento = curriculum.datosPersonales.fechaNacimiento?.$d;
    }
    if (curriculum.formacionBasica.fechaGraduacion?.$d) {
        curriculum.formacionBasica.fechaGraduacion = curriculum.formacionBasica.fechaGraduacion?.$d;
    }
    if (curriculum.formacionSuperior) {
        for (let i=0; i<curriculum.formacionSuperior.length; i++) {
            if (curriculum.formacionSuperior[i].fechaTerminacion?.$d) {
                curriculum.formacionSuperior[i].fechaTerminacion = curriculum.formacionSuperior[i].fechaTerminacion?.$d;
            }
        }
    }
    if (curriculum.experienciaLaboral) {
        for (let i=0; i<curriculum.experienciaLaboral.length; i++) {
            if (curriculum.experienciaLaboral[i].fechaIngreso?.$d) {
                curriculum.experienciaLaboral[i].fechaIngreso = curriculum.experienciaLaboral[i].fechaIngreso?.$d;
            }
            if (curriculum.experienciaLaboral[i].fechaRetiro?.$d) {
                curriculum.experienciaLaboral[i].fechaRetiro = curriculum.experienciaLaboral[i].fechaRetiro?.$d;
            }
        }
    }
}

export function getTotalYearsOfExperience(experienciaLaboral: ExperienciaLaboral[]) {
    let daysOfExperienceArr = [];
    for (let i=0; i<experienciaLaboral.length; i++) {
        const exp = experienciaLaboral[i];
        const daysOfExp = differenceInDays(exp.fechaIngreso, exp.fechaRetiro)
        daysOfExperienceArr.push(daysOfExp);
    }
    const days = daysOfExperienceArr.reduce((acc, current) => acc + current, 0);
    const totalMonths = Math.floor(days / 30);
    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;
    return [years, remainingMonths];
}

export function differenceInDays(startDate, endDate) {
    const difference = getJsDate(endDate) - getJsDate(startDate);
    const result = Math.ceil(difference / (1000 * 3600 * 24));
    return result;
}