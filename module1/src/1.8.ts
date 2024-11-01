// destructuring


{
    // object destructuring
    const user = {
        id: 345,
        name: {
            firstName: 'Mezbaul',
            middleName: 'Abedin',
            lastname: 'Persian'
        },
        constactNo: '01700000000',
        address: 'Uganda'
    }

    const {constactNo, name: {middleName}} = user;

    // array destructuring
    const myFriends = ['chandler', 'joey', 'ross', 'rachel', 'monica', 'phoebe'];
 
    const[ , , bestFriend, ...rest] = myFriends;

}