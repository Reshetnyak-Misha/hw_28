function daysBetweenDates(date1Str, date2Str) {
    const date1 = new Date(date1Str);
    const date2 = new Date(date2Str);

    const oneDay = 1000 * 60 * 60 * 24;

    const differenceMs = Math.abs(date2 - date1);

    const daysDifference = Math.floor(differenceMs / oneDay);

    return daysDifference;
}

const date1 = "2024-03-12";
const date2 = "2024-03-21";
console.log(daysBetweenDates(date1, date2));
