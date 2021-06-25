interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
   
    return "Hello, " + person.firstName + " " + person.lastName;
}

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

console.log(new Student("Jane", "M.", "User"))


const stones = []
 

export {greeter}