// let  balance = 500;
// //balance+="Rohit";
// balance-= 500;
// console.log(balance);


// let balance=500;
// let user ={

//     deposit: function (amount){
//         if (typeof amount==='number' && amount>0)
//         balance+= amount;
//     return balance;
//     }, 
//    withdraw: function (amount){
//         if (typeof amount==="number" && amount>0 && this.balance>=amount)
//         balance-= amount;
//     return balance;
//     },
//     get_balance: function (){
//       return balance;
//     }
// }
//console.log(user.deposit(200));

// user.balance="rohit";
// console.log(user.get_balance());
// console.log(user.deposit(500));


// balance+="roshan"
// user can acees only method 
// balance : ko directlty access na kr  paaye.
//priavte


function createBankAccount() {

    let balance = 500;
    let user = {

        deposit: function (amount) {
            if (typeof amount === 'number' && amount > 0)
                balance += amount;
            return balance;
        },
        withdraw: function (amount) {
            if (typeof amount === "number" && amount > 0 && balance >= amount)
                balance -= amount;
            return balance;
        },
        get_balance: function () {
            return balance;
        }
    }

    return user;
}

const customer =createBankAccount();
console.log(customer.get_balance());
console.log(customer.deposit(300));

console.log(customer.withdraw(100));



