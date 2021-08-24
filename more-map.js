// find the length of string from an array using array map
const friends = ["I", "have", "No", "Real", "Friend", "."];
const fLength = friends.map(f => f.length);
const max = Math.max(...fLength); // biggest name assuming friend
const friend = fLength.indexOf(max);// index of biggest name consumming friend
console.log(friend);
// find the objects from an array by map method
const usedProducts = [
    { name: "Canleen Headphone", color: "Black and Green", price: 750, age: "1year", condition: "60% good" },
    { name: "Mi bluetooth speaker", color: "White", price: 820, age: "1 month", condition: "99% good" },
    { name: "value top camera", color: "Black", price: 2000, age: "1year", condition: "99% good" },
    { name: "boya microphone", color: "Black ", price: 1000, age: "1year", condition: "80% good" },
    { name: "Adata usb drive", color: "Black and Blue", price: 650, age: "2year", condition: "90% good" },
    { name: "FSP ups", color: "Black ", price: 2800, age: "1.5 year", condition: "70% good" },
    { name: "charger", color: "White", price: 250, age: "6 months", condition: "10% good" }
];
const price = usedProducts.map(p => p.price);
console.log(price);