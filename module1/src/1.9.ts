{
    // type alias

    type Student = {
        name: string;
        age: number;
        gender: string;
        constactNo?: string;
        address: string;
    }

    const student1 : Student = {
        name: 'Barik',
        age: 50,
        gender: 'male',
        constactNo: '0170000000',
        address: 'ctg'
    }

    const student2 : Student = {
        name: 'Monir',
        age: 40,
        gender: 'male',
        address: 'dhaka'
    }

    type UserName = string;
    type IsAdmin = boolean;
    const userName: UserName = 'mdabarik';
    const isAdmin : IsAdmin = true;

    type Add = (num1: number, num2: number) => number;

    const add : Add = (num1, num2) => num1 + num2;


}