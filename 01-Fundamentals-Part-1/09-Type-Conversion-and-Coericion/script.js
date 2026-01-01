// Type-Conversion and Coericion

//String to Number
const birthYear = 1990;
console.log(birthYear + "18");
// One is number and one is string so we can't calculate directly string with numbers
// Here the + operator used with string and number so number will automatically convert to string and concatenation.
console.log(Number(birthYear) + 18); //string converted into number and add with number (8)
console.log(Number("Zaid")); //converting characters into numbers is invalid, somehow it give type of number but invalid.
console.log(typeof (NaN)); //NaN mean Not a Number
//Number to String
console.log(String(20), typeof (String(20)));

//Type Coercion
// Type Coercion mean that javascript automatically convert from one data types to another data types.
console.log("I am" + 23 + "Years Old");  //Number + String = String
console.log("20" + "60"); //still string
console.log("60" - "20");
console.log("60" - 20);
console.log("15" * "2");
console.log("20" * 2);
console.log("20" / "2");
console.log("100" / 2);

// Quiz - 1
let n = "1" + 1; // 11 (String)
n = n - 1; // 11(string) - 1 (number)
console.log(n);

//Quiz - 2
console.log(1 + 1 + 3 + 2 + "5");

//Quiz - 3
console.log("10" - "2" - 3 - "4" + "9");






