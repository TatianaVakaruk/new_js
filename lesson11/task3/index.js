const splitText = (text, len)=> {
    const strArr = [];
    let startPosition = 0;
    if(typeof text !== "string"){
        return null;
    }
    if(len === undefined){
            len= 10;
        }
    while(true){
        let chunk = text.substr(startPosition, len);
        if(chunk.length === 0){
            break;
        }
        if(chunk.length < len){
           chunk = chunk.padEnd(len, ".");
        }
        
        strArr.push(chunk);
        startPosition += len;
    

    }
    return strArr;
}
console.log(splitText("ghjkjg fddfgh", 4));
console.log(splitText('vhjvhjgh hhjvhjv hjvhjvh jvhjvh jhjbm'));
console.log(splitText(4444, 4));