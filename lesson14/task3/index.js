let numDefault = 0;
export const add = num => {
   return numDefault = num + numDefault;
} 
export const decrease = num => {
 return numDefault = numDefault - num;
}
export const reset = ()=> numDefault = 0;
export const getMemo = ()=> {
    return numDefault;
}
