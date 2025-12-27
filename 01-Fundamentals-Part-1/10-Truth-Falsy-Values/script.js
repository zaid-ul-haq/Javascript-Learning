// Truth and Falsy Values
// When we convert from another datatypes into Boolean we either get thruth or false value

// 5 Falsy Values; 0, '', undefined, null, Nan
console.log(Boolean(0));
console.log(Boolean('')); //Empty String
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

let number = 0;
if (number) {
    console.log("I am True");
}
else {
    console.log("I am False");
}

let money;
if (money) {
    console.log("YAY! I am defined");
}
else {
    console.log("I am Undefined");
}


