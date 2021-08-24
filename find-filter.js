// // filter 
// /* 
//  *loop through each element of the array 
//  * call the provided function for each
//  * return the value within an array which fullfill the condition of call back function in filter parenthesis
// */
const numbers = [2, 456, 7, 867, 4.687, 78, 6, 8, 456, 8, 7, 567, 64, 64, 654, 654, 64, 6, 54, 654, 654, 654, 6467, 67, 5456, 45, 44353, 4, 645, 65654, 657, 67, 58, 675, 64654654, 78656546546, 67, 75676];
const bigNumbers = numbers.filter(number => number > 50000);
console.log(bigNumbers);
// // find the most valuable products from the usedProduct
const usedProducts = [
    { name: "Canleen Headphone", color: "Black and Green", price: 750, age: "1year", condition: "60% good" },
    { name: "Mi bluetooth speaker", color: "White", price: 820, age: "1 month", condition: "99% good" },
    { name: "value top camera", color: "Black", price: 2000, age: "1year", condition: "99% good" },
    { name: "boya microphone", color: "Black ", price: 1000, age: "1year", condition: "80% good" },
    { name: "Adata usb drive", color: "Black and Blue", price: 650, age: "2year", condition: "90% good" },
    { name: "FSP ups", color: "Black ", price: 2800, age: "1.5 year", condition: "70% good" },
    { name: "charger", color: "White", price: 250, age: "6 months", condition: "10% good" }
];
// // any product that's value is greater than 1000 or 1000 taka are valuable product.So find the array of valuable product
const valuableProducts = usedProducts.filter(product => product.price >= 1000);
console.log(valuableProducts);
// find method
/* 
 * array.find() done ==> 
 * 1.loop through each element of the array 
 * 2.check the condition of call back function
 * 3.if it finds the true value of conditon immediately returns the value out of the array
 * 4.if it finds condition false for every value it gives undefined
*/
const products = [
    { name: "Canleen Headphone", color: "Black and Green", price: 750, age: "1year", condition: "60% good" },
    { name: "Mi bluetooth speaker", color: "White", price: 820, age: "1 month", condition: "99% good" },
    { name: "value top camera", color: "Black", price: 2000, age: "1year", condition: "99% good" },
    { name: "boya microphone", color: "Black ", price: 1000, age: "1year", condition: "80% good" },
    { name: "Adata usb drive", color: "Black and Blue", price: 650, age: "2year", condition: "90% good" },
    { name: "FSP ups", color: "Black ", price: 2800, age: "1.5 year", condition: "70% good" },
    { name: "charger", color: "White", price: 250, age: "6 months", condition: "10% good" }
];
// find the product which value is less than 500 taka
const cheapProduct = products.find(cheap => cheap.price < 500);
console.log(cheapProduct);