const clients = ['Ann', 'John', 'Denis', 'Andrey', 'Frank', 'Serg', 'Kate', 'Liza'];
const balances = [1400, 18887, -6, 0, 200, 5000, 220, 100500];

/**
 * @param {string} clientName
 * @param {number} amount
 * @return {number}
 */
function withdraw(clientName, amount) {
  // put your code here
  for ( let i = 0; i < clients.length; i++){
     if ((clients[i] === clientName) && (amount > balances[i])){
            return -1;
        }
     if ((clients[i] === clientName) && (amount < balances[i])) {
         balances[i] = balances[i] - amount;
            return balances[i];
     }
    }
    return -1;     
}

console.log(withdraw('Frank', 50));
console.log(withdraw('Daniil', -100));
console.log(withdraw('Liza', 9000));