import dayjs from "dayjs";

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
