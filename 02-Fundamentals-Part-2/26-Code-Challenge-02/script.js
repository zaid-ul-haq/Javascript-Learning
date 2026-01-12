//////////////////////////////////////////////////////////////////////////////////////////
/*------------------------------ Code Challenges - Arrays ------------------------------*/
/////////////////////////////////////////////////////////////////////////////////////////

// Task : 01
/* 
Create an array of 5 numbers and:
Print the array
Print the first and last element 
*/
const myFirstArray = [1, 2, 3, 4, 5];
console.log(myFirstArray);
console.log(myFirstArray[0]);
console.log(myFirstArray[myFirstArray.length - 1]);

/////////////////////////////////////////////////////////////////////////////////////////

// Task : 02
/* Given an array of fruits: ["apple", "banana", "mango"]
Add "orange" to the end
Add "grape" to the beginning
The last element from an array
The first element from an array */
const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);

fruits.push("Orange");
console.log(fruits); // Orange Added in last

fruits.unshift('Grape')
console.log(fruits); // Grape Added in First


fruits.pop();
console.log(fruits); // Last Element Removed

fruits.shift();
console.log(fruits); // First Element Removed

/////////////////////////////////////////////////////////////////////////////////////////

// Task : 03
/* Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%. 

Your tasks: 
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100 

2. And now let's use arrays! So create an array 'bills' containing the test data 
below 

3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before 
4. Bonus: Create an array 'total' containing the total values, so the bill + tip 
Test data: 125, 555 and 44  */

const calcTip = function (billValue) {
    if (billValue > 50 && billValue < 300) {
        return (15 / 100) * billValue;
    } else {
        return (20 / 100) * billValue;
    }
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips);

const total = [(calcTip(bills[0]) + bills[0]), (calcTip(bills[1]) + bills[1]), (calcTip(bills[2]) + bills[2])];
console.log(total);





