{
    // inheritance in oop

    class Parent {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }


    class Student extends Parent {
        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }
    }

    const student1 = new Student("Mr. A", 26, "Naogaon");
    const student2 = new Student("Mr. B", 22, "Rajshahi");

    student1.getSleep(1)

    class Teacher extends Parent {
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address);
            this.designation = designation;
            
        }

        takeClass(numOfClass: number) {
            console.log(`${this.name} will take ${numOfClass}`);
        }

    }

    const teacher1 = new Teacher("Mr. TA", 40, "Uganda", "Professor");



    //
}