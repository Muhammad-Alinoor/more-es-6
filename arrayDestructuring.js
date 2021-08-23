// const [bookTotal, penTotal, laptopTotal] = [46, 65, 76];
// console.log(bookTotal, penTotal, laptopTotal); // all variables are corresponding to their value.
// const [studentTotal, classTotal, BenchAverage, TeacherTotal, fourthGradeWorker] = [45, 2, 10, 4];// value is less than variable . So one variable is undefined
// console.log(studentTotal, classTotal, BenchAverage, TeacherTotal, fourthGradeWorker);
// // if we don't want the 2nd value , we can keep empty its position
// const [studentTotal1, classTotal1, BenchAverage1, TeacherTotal1, fourthGradeWorker1] = [45, , 2, 10, 4];
// console.log(studentTotal1, classTotal1, BenchAverage1, TeacherTotal1, fourthGradeWorker1);

// chaining in object
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
            relationship: "with two boys",
            studyCondition: "great"
        }
    }
};
// give ? mark if any variable of chain has no value to make it optional
// console.log(bank.worker.daughter.name);// can not read property "daughter" of undefined
// now give a ? before the dot of daughter
console.log(bank?.worker?.daughter?.name);// as worker is unavailable so chain will be undefind but ? will give you the access to the program with undefined value.
