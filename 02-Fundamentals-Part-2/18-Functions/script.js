// Functions

//Creating Function
function logger() {
    console.log("This is Function");
}

// Calling | Running | Invoking Function
logger();



// Function with Parameters
function fruitProcess(Apples, Oranges) {
    console.log(Apples, Oranges);
    const juice = `Juice with ${Apples} apples and ${Oranges} oranges.`;
    return juice;
}

const juice = fruitProcess(10, 0);
console.log(juice);

