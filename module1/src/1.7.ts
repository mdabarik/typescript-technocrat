{


    // spread operator
    // rest operator
    // destructuring
    


    // spread operator
    const bros1 : string[] = ['Mir', 'Firoz', 'Mizan'];
    const bros2 : string[] = ['Tanmoy', 'Nahid', 'Rahat'];

    bros1.push(...bros2); // spread operator


    const mentors1 = {
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    }

    const mentos2 = {
        prisma: 'Firoz',
        next: 'Tanmoy',
        cloud: 'Nahid'
    }

    const mentorList = {
        ...mentors1,
        ...mentos2
    }

    // learn rest operator

    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend:string) => {
            console.log(`Hi, ${friend}`);
        })
    }

    greetFriends('Abul', 'Kabul', 'Babul', 'Ubul', 'lubul');
    

}