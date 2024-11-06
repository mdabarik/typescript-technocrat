{
    // abstraction -> interface, abstract

    // idea
    interface Vehicle1 {
        startEnginee(): void;
        stopEngine(): void;
        move(): void;
    }

    // real implementation
    class Car implements Vehicle1 {
        startEnginee(): void {
            console.log("starting engine...");
        }
        stopEngine(): void {
            console.log("stopping engine...");
        }
        move(): void {
            console.log("moving the car");
        }
        test() {
            console.log('im just testing...');
        }
    }

    const toyotaCar = new Car();
    toyotaCar.startEnginee();

    // abstract class -- leader class -- idea
    abstract class Car2 {
        abstract startEnginee(): void;
        abstract stopEngine(): void;
        abstract move(): void;
        test() {
            console.log('testing inside abstract class car2');
        }
    }

    class ToyotaCar extends Car2 {
        startEnginee(): void {
            console.log('im starting the car engine...');
        }
        stopEngine(): void {
            console.log('stop engine...');
        }
        move(): void {
            console.log('moving the car...');
        }
    }

    const hondaCar = new ToyotaCar();
    hondaCar.test();

    //
}