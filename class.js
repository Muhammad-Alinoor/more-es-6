class UsedProduct {
    name;
    price;
    age;
    constructor(name, price, age) {
        this.name = name;
        this.price = price;
        this.age = age;
    }
    do() {
        console.log(this.name, ",", "Please give out some money");
    };
}
const product1 = new UsedProduct("phone", 2000, "6 Months");
console.log(product1);
product1.do();