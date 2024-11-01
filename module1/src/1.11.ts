{

    // 
    // ternary operator || optional chaining || nullish coalescing operator
    const age: number = 15;
    if (age >= 18) {
        console.log('adult');
    } else {
        console.log('not adult');
    }

    const isAdult = age >= 18 ? 'adult' : 'not adult';

    // console.log({isAdult});


    // nullish coalescing operator
    // if and only if: null or undefined -- decision making
    const isAuthenticated = null;
    const result1 = isAuthenticated ?? 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest'

    console.log({result1}, {result2});

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string;
        }
    }
    
    const user : User = {
        name: 'Barik',
        address: {
            city: 'ctg',
            road: 'awesome road',
            presentAddress: 'ctg town'
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? 'No permanent address';
    console.log(permanentAddress);


}