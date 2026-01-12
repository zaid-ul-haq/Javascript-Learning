//////////////////////////////////////////// MINI PROJECT ///////////////////////////////////////////////
/* Create BMI Calculator and Compare Two Person BMI (Mark Miller and John Smith), This time, let's use 
   objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall. */
//////////////////////////////////////////// MINI PROJECT ///////////////////////////////////////////////

const markBMI = {
    fullName: "Mark Miller",
    weight: 78, // KG
    height: 1.6, // Meter

    calcBMI: function () {
        this.bmi = this.weight / this.height * this.height;
        return this.bmi;
    }
};

const johnBMI = {
    fullName: "Mark Miller",
    weight: 92, // KG
    height: 1.95, // Meter

    calcBMI: function () {
        this.bmi = this.weight / (this.height * this.height);
        return this.bmi;
    }
};

console.log(johnBMI.calcBMI(), markBMI.calcBMI());

// const compareBMI = (johnBMI.calcBMI() > markBMI.calcBMI()) ? `Jhon's BMI ${johnBMI.calcBMI()} is higher than Mark's ${markBMI.calcBMI()}` : `Mark's BMI ${markBMI.calcBMI()} is higher than Jhon's ${johnBMI.calcBMI()}`
// console.log(compareBMI);

const checkBMI = (johnBMI.bmi > markBMI.bmi) ? `Jhon's BMI ${johnBMI.bmi} is higher than Mark's ${markBMI.bmi}` : `Mark's BMI ${markBMI.bmi} is higher than Jhon's ${johnBMI.bmi}`

console.log(checkBMI);