// repeated properties are kept in common class
class TeamMember {
    name;
    address = "BD";
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

// support web develop
class Support extends TeamMember {//extension of common class TeamMember
    groupSupportTime;
    constructor(name, address, time) {//take its property as parameter with calling the parent class dynamic properties
        // add super() in a constructor in an extended class to access "this.property"
        super(name, address);//call the parent class dynamic properties.
        this.groupSupportTime = time;
    }
    designation = "Support Web Dev";
    startSession() {
        console.log(this.name, " start a support session.");
    }
}
// student care class
class StudentCare {
    name;
    designation = "Student Care Web Dev";
    address = "BD";
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    buildARoutine(student) {
        console.log(this.name, "build a routine", student);
    }
}
// neptune team
class NeptuneDev extends TeamMember {
    codeEditor;
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }
    designation = "neptune app developer"
    releaseApp(version) {
        console.log(this.name, "realese a version", version);
    }
}
const amir = new Support("Amir Khan", "India", 11);
const salman = new Support("Solaiman Khan", "Mumbai");
// console.log(amir, salman);

// student care object
const alia = new StudentCare("Alia Bhatt", "Dhaka");
// console.log(amir);
const prianka = new NeptuneDev("Priayanka", "USA", "Android Studio");
console.log(prianka);
prianka.releaseApp("1.1");