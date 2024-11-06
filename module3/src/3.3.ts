{
    // typeguard - typeof & in


    // of guard
    type Alphaneumeric = string | number;

    const add = (param1 : Alphaneumeric, param2: Alphaneumeric): Alphaneumeric => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        }
        return param1.toString() + param2.toString();
    }

    const result1 = add("2", 3);
    console.log(result1);


    // in guard
    type NormalUser = {
        name: string
    }

    type AdminUser = {
        name: string;
        role: string;
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        } else {
            console.log(`My name is ${user.name}`);
        }
    } 

    const normalUser : NormalUser = {
        name: "Mr. Normal Bhai"
    }

    const adminuser : AdminUser = {
        name: 'Mr. Admin Bhai',
        role: "Admin"
    }

    getUser(normalUser);
    // getUser(adminuser);


    //
}