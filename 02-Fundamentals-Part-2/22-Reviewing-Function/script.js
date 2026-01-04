

const calcAge = function (birthYear) {
    return 2026 - birthYear;
}

const yearLeftForRetirement = function (birthYear, name) {
    const age = calcAge(birthYear);

    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${name} retires in ${retirement} Years.`);
        return retirement; //Always return in numbers | Good Practice
    } else {
        console.log(`${name} is already retired.`);
        return -1; //Always return in numbers | Good Practice
    }
}

console.log(yearLeftForRetirement(2002, "Zaidd"));
console.log(yearLeftForRetirement(1950, "Jhon"));
