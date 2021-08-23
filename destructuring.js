const light = {
    name: "LED",
    color: "orange",
    price: 350,
    expiryDate: "3 months"
};
const { color, expiryDate } = light;
const { name: black } = light;//property name in different variable
console.log(color);
console.log(black);
const bank = {
    name: "Asian Bank",
    ceo: {
        name: "korom ali",
        age: 63,
        color: "blue",
        iq: "normal"
    },
    manager: {
        name: "sorom mia",
        children: 3,
        salary: 2000000,
        daughter: {
            name: "sokina",
            relationship: "with two boy",
            studyCondition: "great"
        }
    }
}
const { name, relationship } = bank.manager.daughter;
console.log(relationship);