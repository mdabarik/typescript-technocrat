{

    // function with generics

    const createArray = (param : string) => {
        return [param];
    }

    const createArrayWithGeneric = <T>(param : T) : T[] => {
        return [param];
    }

    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2];
    }

    const res3 = createArrayWithTuple<string, number>("Bangladesh", 222);

    const res1 = createArray('Bangladesh');
    const resGeneric = createArrayWithGeneric<string>('Bangladesh',);

    type User = {id: number; name: string}

    const resGenericObj = createArrayWithGeneric<User>({id: 222, name: 'Mr X'});

    const res11 = createArrayWithTuple<string, {name: string}>('Bangladesh', {name: 'Asia'});
    const adCouseToStudent = <T>(student: T) => {
        const course = 'Next Level Web Development';

        return {
            ...student, 
            course
        }
    }

    const student1 = adCouseToStudent({name: 'Mr. X', email: 'a@gmail.com', devType: 'Next Level WebDev'});
    const student2 = adCouseToStudent({name: 'Mr. Y', email: 'b@gmail.com', hashWatch: 'Apple Watch'});

    

    // 
}