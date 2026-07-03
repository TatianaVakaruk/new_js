export default (arr)=> {
    if (!Array.isArray(arr)){
        return null;
    }
    if(arr.length === 0){
        return null;
    }
    let result = arr.map(num => num * num);
    return Math.min(...result);
}

