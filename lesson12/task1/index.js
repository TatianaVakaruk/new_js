const calc = expression => {
    let [a, operator, b] = expression.split(" ");
    let result;
   switch(operator) {

     case '+':
      result = +a + +b;
      break;
     
     case '-':
        result = a - b;
        break;

    case '*':
        result = a * b;
        break;
    
    case '/':
        result = a / b;
        
   }
   return `${expression} = ${result}`;
}

console.log(culc("9 / 3"));
