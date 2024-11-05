{

    // generic constraint with keyof operator
    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }

    type Owner = "bike" | "car" | "ship"; // manually
    type Owner2 = keyof Vehicle;
    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return ;
    }

    const user = {
        name: 'Mr. Barik',
        age: 26,
        address: 'ctg'
    }

    const car = {
        model: "toyota",
        year: 200
    }

    const result1 = getPropertyValue(car, 'model');

    // obj[key]

    

}