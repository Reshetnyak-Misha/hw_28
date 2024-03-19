function countWorkingDays(deadline) {
    const currentDate = new Date();
    let workingDays = 0;


    while (currentDate < deadline) {
        const dayOfWeek = currentDate.getDay();


        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
            workingDays++;
        }


        currentDate.setDate(currentDate.getDate() + 1);
    }

    return workingDays;
}

const projectDeadline = new Date("2024-03-31");
console.log(countWorkingDays(projectDeadline));
