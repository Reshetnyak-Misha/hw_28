function calculateAge(birthDateStr) {
    const birthDate = new Date(birthDateStr);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();

    const currentMonth = currentDate.getMonth();
    const birthMonth = birthDate.getMonth();
    const currentDay = currentDate.getDate();
    const birthDay = birthDate.getDate();

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        age--;
    }

    return age;
}

const birthDate = "1999-01-01";
console.log(calculateAge(birthDate));
