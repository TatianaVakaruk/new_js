export function reverseArr(arr) {
  // put your code here
  let copy = [...arr];
  return copy.reverse();
}

const clients = ['Ann', 'John', 'Denis', 'Andrey', 'Frank', 'Serg', 'Kate', 'Liza'];
const balances = [1400, 18887, -6, 0, 200, 5000, 220, 100500];

export const withdraw = (clientName, amount) => {
    let index = clients.findIndex(client=> client === clientName);
    let nessaseryBallance = balances.slice();
    if ((index !== -1) && (balances[index] >= amount)) {
     return balances[index] -= amount; 
      
    }
    return -1;
}
export function getAdults(obj){
    let result = {};
for (let key in obj){
    if (obj[key] >= 18){
       result[key] = obj[key];
    }
}
return result;
}
