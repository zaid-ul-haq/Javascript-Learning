// Calling Functions inside another Function

// Making a function which will take any fruit and cut it in 4 pieces
const fruitPieces = function (fruit) {
    return fruit * 4;
}

// Making a function which will take cut fruit pieces and make juice from it
const fruitProcessor = function (fruit1, fruit2) {

    const fruitPieces1 = fruitPieces(fruit1); // Calling Another Function
    const fruitPieces2 = fruitPieces(fruit2); // Calling Another Function

    const juice = `Juice with ${fruitPieces1} Pieces of Apple and ${fruitPieces2} Pieces of Orange.`
    return juice;
}

const juice1 = fruitProcessor(10, 5);
console.log(juice1);

