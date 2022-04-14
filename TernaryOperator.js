

let canAfford = ( itemPrice, accountBalance) => { 
    if(itemPrice > accountBalance) {
        return `Cannot afford! You are $${itemPrice - accountBalance} short`;

    } else {
        return `Can afford $${accountBalance - itemPrice} positive `
    }
};



// let Allowed = (cost, bankAccount) => {
//     return cost > bankAccount ? `Cannot afford! You are $${cost - bankAccount} short`
//     : "Can afford"
// }
// console.log(Allowed(1000,700))




// let Match = (loveMeter, first, second) => {
//     return loveMeter <= 85
//     ? `You two should really find someone else` 
//     : ` ${first} and  ${second} You two are very compatible`;
// }

// console.log(Match(44, 'Bobby', 'Puuip'))



let myBankAccountBalance = 1000;
const drone = 1001;

let droneOnSale = drone - drone * 0.03;

// console.log(canAfford(drone, myBankAccountBalance))
console.log(canAfford(droneOnSale, myBankAccountBalance))