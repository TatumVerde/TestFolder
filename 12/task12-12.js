function findObject(arr, value, callback) {
    for (var i = 0; i < arr.length; i++) {
        if ( arr[i].name == value) {
            callback(arr[i]);
            return arr[i].age;
        }
    }
    return null;
}

var people = [
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 30},
    {name: 'Carl', age: 35}
];

function printAge(person) {
    console.log(person.age)
}

console.log(findObject(people, 'Carl', printAge))