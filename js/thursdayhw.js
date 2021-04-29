acronym = (['very', 'important', 'person'])


var fun = () =>  {
    console.log("hello world")

}

var arrays = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6] ];



var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];


var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 } ];

const ages = [33, -56, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32, -45];

//1. positive numbers

let positiveNumbers = ages.filter(age => {
    return age > 0;
})
console.log(positiveNumbers)

// 2. even numbers

let newAge = ages.filter(age => {
  
    return age % 2 == 0;
  })
  console.log(newAge)

//3. squared number

let squareAge = ages.map(age => {
    return age * age;
})
console.log(squareAge)

//4. cities > 70
let hotCity = cities.filter(city => {
    return city.temperature > 70;
})
console.log(hotCity)

//5. city names
let cityNames = cities.map(city => {
    return city.name;
})
console.log(cityNames)

//6. good job

let goodJob = people.map(person => {
    return `gppd job ${person}`
})
console.log(goodJob)

//7. sort aphabetically

let sortedList = people.sort()

console.log(sortedList)

//8 sort by length

let sortedList2 = people.sort((a,b) => a.length - b.length);

console.log(sortedList2)
// //9. sort based on addition ????????



//     let sum = arrays.sort((a,b) => b - a);
//         arraySum = arrays.reduce((accumulator, currentValue ) => accumulator + currentValue,0)
//             return arraySum;

//     console.log(sum)
    



// 10. Call 3 times 

function call3Times(fun) { 
    fun(); 
    fun(); 
    fun(); 
}

//11. add sum
call3Times(fun)

let total = [ 0, 1, 2, 3 ].reduce(( accumulator, currentValue ) => accumulator + currentValue,0)
console.log(total)

//12. 
let ancronymAnswer = acronym.map(word => {
    letter = word[0]
    return letter
})
console.log(ancronymAnswer);
console.log(acronym.length)