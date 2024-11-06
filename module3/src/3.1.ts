{

    //
    // oop - class

    class Animal {
        constructor(public name: string, public species: string, public sound: string) {}
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }

    const dog = new Animal("German Shepard Bhai", "Dog", "Ghew Ghew");
    const cat = new Animal("Persian Bhai", "cat", "meu meu");

    dog.makeSound();

    // console.log(dog, cat);







    //
}