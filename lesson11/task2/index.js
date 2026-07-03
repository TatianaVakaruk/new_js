const sortContacts = (contacts, bul)=> {
    if(!Array.isArray(contacts)){
        return null;
    }
    let result;
  result = contacts.sort((a, b)=>{
          return a.name.localeCompare(b.name);
        });
    
    if(bul === false){
       result= contacts.sort((a, b)=>{
          return  b.name.localeCompare(a.name);
        })
    }
    return result;
}
