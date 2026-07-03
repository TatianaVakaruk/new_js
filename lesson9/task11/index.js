const getCustomersList = obj =>  
    Object.entries(obj).map(([key, value])=>({ 
        id: key, 
        ...value
    })).sort((a, b)=> a.age - b.age);
    
console.log(getCustomersList({"customer-id-1": {
        name:"Bob",
        age:17
    },
    "customer-id-2": {
        name:"Sam",
        age:48
    },
    "customer-id-3": {
        name:"Sonya",
        age:3
    }}));
    console.log(getCustomersList({"customer-id-1": {
        name:"Sasha",
        age:25
    },
    "customer-id-2": {
        name:"Ira",
        age:17
    },
    "customer-id-3": {
        name:"Sonya",
        age:27
    }}));
    console.log(getCustomersList({"customer-id-1": {
        name:"Danya",
        age:4
    },
    "customer-id-2": {
        name:"Vova",
        age:17
    },
    "customer-id-3": {
        name:"Sonya",
        age:2
    }}));