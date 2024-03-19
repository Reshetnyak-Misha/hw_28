function timeUntilFutureDate(futureDateStr) {
    const futureDate = new Date(futureDateStr);
    const currentDate = Date.now();


    const differenceMs = futureDate - currentDate;


    const days = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((differenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((differenceMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((differenceMs % (1000 * 60)) / 1000);

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}


const futureDate = "2024-03-21";
const timeLeft = timeUntilFutureDate(futureDate);
console.log(timeLeft);
