// make a function that doubles a number array
function doubleItOld(numbers) {
    let sum = [];
    for (const re of numbers) {
        const result = re * 2;
        sum.push(result);
    }
    return sum;
}
const n = [4, 5, 6];
console.log(doubleItOld(n));


// // convert the above function into arrow function
const numbers = [3, 5, 7];
const output = [];
const doubleIt = number => number * 2;
for (const number of numbers) {// this loop pass parameter for every array element
    const result = doubleIt(number);//take the actual parameter number of numbers and pass it to doubleIt() , then return value to result;
    output.push(result);// push the value of result to output
}
console.log(output);
// // do the function using js Map method or array Map

/*
    * What we have done above :
    *   1. loop kore prottekta element collect korci
    *   2. element die function call koreci
    *   3.result ekta array er moddhe push koreci
*/

// now we can do all three work in short by arrayMap
const mappingOutput = numbers.map(doubleIt);
console.log(mappingOutput);
/*
    *array.map() done ==>
    *1.loop throw each element
    *2.call the provided function for each
    *3.the result will be stored in an array
 */
// we can do the functional work inside of map() parenthesis
const numbersOther = [4, 3, 2, 7, 7, 5, 8]
const mappingOutputNew = numbersOther.map(number => number * 2);
console.log(mappingOutputNew);