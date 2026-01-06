//////////////////////////////////////////////////////////////////////////////////////////
/*------------------------------- Introduction to Arrays -------------------------------*/
/////////////////////////////////////////////////////////////////////////////////////////
const friend1 = "Michal";
const friend2 = "Bob";
const friend3 = "Alen";
const friend4 = "Putin";

// Instead of writing indivaual we can write in array
const myFriends = ['Michal', 'Bob', 'Alen', 'Putin'];
console.log(myFriends);


// Arrays first element is at 0 index
console.log(myFriends[0]); // We Can extract values from an arrays through index 
console.log(myFriends[1]);
console.log(myFriends[2]);

// length is the method/property which give us the total numbers of an elements in an arrays
console.log(myFriends.length);

//Extracting last element using length property
console.log(myFriends[myFriends.length - 1]); // friends[4-1] = [3] = putin

//Replacing (or) Changing element in array
myFriends[3] = "Donald";
console.log(myFriends);
// Now the array is changed from original to new one
/*Note: We said, variable with constant can't be changed but here we have changed the array
in this case we can't change the permitive values and arrays are not primitive. We can mutuate(Change) array.
We can't replace whole entire array like:*/

// myFriends = ['Zaid', 'Ali', 'Nimra']; // Illegal
// console.log(myFriends);

// Expression can work in an array
const myAge = [2025 - 2005]
console.log(myAge);

// We can store different datatypes in array
const myInfo = ['Zaid', 'UlHaq', myAge,]
console.log(myInfo);


// we can also put array inside array
const myCircle = ['Haris', 'Faiz', myFriends]
console.log(myCircle);

// Excercise
const calcAge = function (birthYear) {
    return 2025 - birthYear;
}

const years = [2000, 2001, 2002, 2003]

// this will give NaN because calcAge function can't take array as a argument
// console.log(calcAge(years));

// We can't apply operations on a array
console.log(years + 10); // This will be converted to String
console.log(years - 10); // NaN

console.log(years[0]);
console.log(years[1]);
console.log(years[years.length - 1]);

const ages = [years[0], years[1], years[years.length - 1]]
console.log(ages);





