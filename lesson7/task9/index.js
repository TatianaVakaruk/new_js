function filterNames(names, text) {
    return names.filter(name => name.length > 5).filter(name=> name.includes(text));
    
}
console.log(filterNames(["Konya", "Tonya", "Olyal", "Sanya"], "ya"));
console.log(filterNames(["Kol","Kolya", "Tokol"], "kol"));
console.log(filterNames(["Ana", "Anastasiya", "Anatas", "ananasa"], "ana")); 