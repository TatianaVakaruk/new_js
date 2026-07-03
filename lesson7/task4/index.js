const getMessagesForBestStudents= (allStudents, failedStudents) =>
  allStudents.filter(name=> !failedStudents.includes(name))
  .map(name=> "Good job, " + name);

console.log(getMessagesForBestStudents(["Tom", "Bob", "Sam", "Tanya"], ["Bob", "Tom", "Sam"]));
console.log(getMessagesForBestStudents(["Katya", "Rita", "Tanya","Dan"], ["Rita", "Dan"]));
console.log(getMessagesForBestStudents(["Tanya", "Sonya", "Sasha", "Julya", "Nadya"], ["Sonya", "Sasha", "Julya"]));
