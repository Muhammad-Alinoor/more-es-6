// 1. let const
/* let use in changing event
    const use in constant event
*/
let count = 1;
const pi = 3.1416;
let array = [3, 56, 7, 3, 5, 7];
const knowledge = {
    about: "js",
    label: 3,
    use: "develop site",
    experience: "10 day"
}

// template string 
const wish = `
    I wish to know about ${knowledge.about} to ${knowledge.use} of a game
`;
console.log(wish);
// arrow function with one parameter that will return the quotient of a number and 5
const dividWithFive = number => number / 5;
const quotient = dividWithFive(20);
console.log(quotient);
// arrow function with two parameter. add two to each number and multiply the result
const makeSimple = (number1, number2) => (number1 + 2) * (number2 + 2);
const simpleResult = makeSimple(10, 20);
console.log(simpleResult);
const product = (number1, number2) => {
    const num1 = number1 * 22;
    const num2 = number2 * 22;
    console.log(num1, num2, num1 + num2);
}
product(10, 2);

// arrow funtion with three parameters that will add all parameters and return the sum of them 
const addThreeValue = (num1, num2, num3) => num1 * num2 * num3;
const sum = addThreeValue(10, 20, 30);
console.log(sum);
// array of numbers .and then map to get multiplied result of 5 of each number .must use arrow in array map
const numbers = [7, 13, 28, 33, 41, 55];
const getProductOfNumbersArray = numbers.map(number => number * 5);
console.log(getProductOfNumbersArray);
// from numbers of array get odd numbers by using filter with arrow function.
const numberList = [2, 5, 6, 3, 68, 45, 65, 76, 87, 898, 5, 4, 3, 564, 54, 565, 3, 232,];
const oddList = numberList.filter(number => number % 2);
console.log(`List of Odd numbers From numberList: ${oddList}`);
// array of objects.find the product which price is 5000 taka
const products = [
    { name: "Tecno W3 pro Phone", price: 6500, color: "black" },
    { name: "Video Call accessorie", price: 4500, item: 5 },
    { name: "ipad", price: 5400, color: "gold" },
    { name: "iphone", price: 5000, color: "premium" }
];
const fiveThousandTakaProduct = products.find(product => product.price == 5000);
console.log(fiveThousandTakaProduct);
// 8.you have an object .Now use destructuring to create a simple variable of any property of the object
const phone = {
    name: "Techno W3 pro",
    color: "Black",
    warranty: "6 months",
    extra: "charger and earPhone",
    type: {
        first: {
            feature: 1,
            feedback: 2
        },
        second: {
            feature: 1,
            feedback: 2
        }
    },
    price: 6500
};
const { warranty, price } = phone;
const { feature } = phone.type.second;
console.log(feature);
console.log(warranty, price);
// 9.You have an array.Now use destructuring to create a simple variable to get the third element of the array in a variable called "three"
const [, , third] = [5, 6, 7];
console.log(third);
// just write a function with three parameters and the last parameter will have a default parameter with value 7.This function will take  three parameters and will return the sum of all the three parameters.
function defaultParameterUse(first, second, third = 7) {
    const sum = first + second + third;
    return sum;
}
console.log(defaultParameterUse(10, 20));// without passing third parameter
console.log(defaultParameterUse(2, 4, 5));//pass all parameters
