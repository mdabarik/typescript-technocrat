{
    // constraints typescript
    const addCouseToStudent = <T extends {id: number, name: string; email: string}>(student: T) => {
        const course = 'Next Level Web Development';

        return {
            ...student, 
            course
        }
    }



    const student1 = addCouseToStudent({
        id: 222,
        name: 'Mr. X', 
        email: 'a@gmail.com', 
        devType: 'Next Level WebDev'
    });
    const student2 = addCouseToStudent({
        id: 333,
        name: 'Mr. Y', 
        email: 'b@gmail.com', 
        hashWatch: 'Apple Watch'
    });

    const student3 = addCouseToStudent({
        id: 44, 
        name: 'barik',
        email: 'barik@gmail.com'
    });

    



    //
}