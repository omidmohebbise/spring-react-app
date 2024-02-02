class Person {
    constructor(id: number, firstName: string, lastName: string, age: number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    id: number | -1;
    firstName: string | undefined;
    lastName: string | undefined;
    age: number | undefined;
}

export default Person;
