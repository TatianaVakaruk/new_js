function createMessenger() {
    let message = 'Just learn it';
  let sender = 'Gromcode';
function sendMessage(name)  {
    console.log(`Hello, ${name}! ${message}! This message was sent by ${sender}`);
}
function setMessage(text) {
message = text;
}
function setSender (text){
    sender = text;
}
  return {
    sendMessage,
    setMessage,
    setSender
  }
}
const  messager = createMessenger();
messager.sendMessage("Tom");
let messager2 = createMessenger();
messager2.setMessage("The weather is fine");
messager2.sendMessage("Ann");
messager.setMessage("Good Job!");
messager.setSender("Bob");
messager.sendMessage("Sam");