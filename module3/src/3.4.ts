{
    // type guard - instance of 
    class Animal {
        name: string;
        species: string;
        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log("I am making sound");
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }
        makeBark() {
            console.log('Im barking');
        }
    }
    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }
        makeMeu() {
            console.log('Im meuing');
        }
    }

    // smart way to handle using function
    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    }

    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    }

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)) {
            animal.makeMeu();
        } else {
            animal.makeSound();
        }
    }

    const dog = new Dog("Dog Bhai", "dog");
    const cat = new Cat("Cat Bhai", "cat");
    
    getAnimal(dog);

    //
}