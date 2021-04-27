// console.log('hello')

// var day = thursday;
// if(day == monday")

// for (var count=0; count < 10; count ++)
// {
//     console.log(count);

//         for(var count2 =0; count < 10; count ++ )




// #1
// function hello(name) {
//     if (name == `${name}`) {
//         console.log("Hello World")
//     }
//     else {
//     console.log("hello world")
//     }
// }
// hello();


// // #Madlib
// function madlib(name, subject) {
//     return (`${name} favorite subject in school is ${subject}`)
// }

// result = madlib('Anushka', 'art')
// console.log(result)

function tipAmount(billAmount, quality, ppl) {
    if (quality == "good") {
        tip = .20;
    }
     else if (quality == "fair") {
        tip = .15;
    }
    amountPaid = tip * billAmount + billAmount;
    paidPerPerson= amountPaid/ppl
    return paidPerPerson;
    }
    
    
result = tipAmount(100, 'good', 4);
console.log(result);



