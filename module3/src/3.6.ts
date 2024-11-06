{
    // setter and getter

    class BankAccount {
        public readonly id: number;
        public name: string;
        private _balance: number;

        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }

        // setter
        set deposit(amount: number) {
            this._balance = this._balance + amount;
        }

        // getter
        get balance() {
            return this._balance;
        }


    }

    class StudentAccount extends BankAccount {
        test() {
            // this.getBalance()
        }
    }

    const poorManAcnt = new BankAccount(111, "Mr. A", 20);
    poorManAcnt.deposit = 50;
    const myBalance = poorManAcnt.balance; 

    console.log(myBalance);


    // poorManAcnt.addDeposit(300);
    // const myBalance = poorManAcnt.getBalance();
    // console.log(myBalance);

    //


}