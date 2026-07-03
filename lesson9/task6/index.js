
function getResidentsNames(buildingData) {
  // put your code here
  return Object.values(buildingData).flat().map(name=> name.name).sort();
}
console.log(getResidentsNames({flat1: [{name: "Sam"}], flat2: {name:"Bob"}}));
console.log(getResidentsNames({flat1: [{name: "Tanya", name: "Olya"}]}));
console.log(getResidentsNames({flat1: {name:"Dima"}, flat2:{name: "Tom", name:"Sam"}}));
