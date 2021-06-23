const data = require('../../data.json');

// console.log(data);

var modifieldData = data.map((person) => {
    person.first_name = person.first_name.toUpperCase();
    return person
})
var filterResult = modifieldData.filter((person) => person.id === 3 )
// console.log(modifieldData);
console.log(filterResult);