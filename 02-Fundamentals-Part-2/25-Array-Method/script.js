//////////////////////////////////////////////////////////////////////////////////////////
/*------------------------ Basics Operation On Arrays (Methods) ------------------------*/
/////////////////////////////////////////////////////////////////////////////////////////

const myFriends = ["Habib", "Qaisar", "Jalal"];
console.log(myFriends);

// Adding Element to the end of array
const newArray = myFriends.push("Zaryab");
console.log(myFriends);
console.log(newArray); // push will return the length of a new array

// Adding Elemet at the Begining
myFriends.unshift("Fayaz");
console.log(myFriends);

// Remove Last Element
myFriends.pop() // No Need to pass any argument
console.log(myFriends);
const popped = myFriends.pop() // This Method will return the removed element
console.log(popped);

// Remve First Element
myFriends.shift(); // This Method will also return the removed element
console.log(myFriends);

// Showing Element Index
const finding = myFriends.indexOf("Qaisar"); // This weill tell us that the following element on which index
console.log(finding);

// Checking if an element is in array
console.log(myFriends.includes("Qaisar")); // This will either True or False Valuse
console.log(myFriends.includes("Zaid"));
myFriends.push(23)
console.log(myFriends.includes("23")); // This will give false : Here Strict Equality Use
console.log(myFriends.includes(23));





