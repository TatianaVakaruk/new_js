const clients = ['Ann', 'John', 'Denis', 'Andrey', 'Frank', 'Serg', 'Kate', 'Liza'];
const balances = [1400, 18887, -6, 0, 200, 5000, 220, 100500];

/**
 * @param {string} clientName
 * @param {number} amount
 * @return {number}
 */
const withdraw = (clientName, amount) => {
    let index = clients.findIndex(client=> client === clientName);
    let nessaseryBallance = balances.slice();
    if ((index !== -1) && (balances[index] >= amount)) {
     return balances[index] -= amount; 
      
    }
    return -1;
}
console.log(withdraw("Denis", -6));
console.log(withdraw("Frank", 100));
console.log(withdraw("Tanya", 5));
console.log(withdraw("Frank", 300));