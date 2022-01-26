// Promise Examples

// const superStar = new Promise((Resolve, Reject) => {
//     Resolve();
//     Reject();
// })

// superStar.then(
//     function() {
//         console.log("Waho... promise resolved here.")
//     },
//     function(){
//         console.log("Oops... error occured here.")
//     }
// );


// Callback function examples
// function addMe(a, b){
//     return a + b;
// }

// function addYou (a, b, callback){
//     const ans = callback(a, b);
//     console.log(ans);
// }

// addYou(2,4,addMe);
// addYou(1,3,addMe);


// Closures
// let add = (function() {
//     let counter = 10;
//     return function (){ counter += 1; return console.log(counter)}
// })();

// add();
// add();



// Bind, Call, Apply //
let person = {
    firstName: "Daniel",
    lastName: "Alisi"
}

let fullName = function(city) {
    return this.firstName + " " + this.lastName + " "+ city;
}

// call
// let name = fullName.call(person);

//apply 
// let name = fullName.apply(person, ["Odessa"]);
// console.log(name);

// bind - basically create a copy
// let name = fullName.bind(person, "Odessa");
// console.log(name)



// Array
let age = [2, 3, 4, 7, 5, 55, 6, 2];

// Return even numbers in list
let even = age.filter((el) => el % 2 === 0);
// console.log(even);

// sort array list
const sort = age.sort();
// console.log(sort);

// add list
const add = age.reduce(function(a, b){ return a+b}, 0);
// console.log(add)

// delete item from array
// const newItem = age.splice(2);
// console.log(newItem)

// divide
// const newItem = age.slice(0, 5);
// console.log(newItem)

//prime numbers
// let primeNumbers = [2,3,4,5,67,3,36,256,6673,9,0,2,45,13,17,60];

// let testPrime = num => {
//     for (let x = 2; x < num; x++) {
//         if (num % x === 0) return false;
//         return num > 1;
//     }
//     return false;
// }

// console.log(testPrime(3));


// const express = require('express');
// const app = express();
//  app.get('/', function(req, res){
//      res.send('hello world')
//  })

//  app.listen(3000, function(){
//      console.log('Running');
//  })


 const http = require('http');

 const requestHeaders = function(req, res){
     res.writeHead(200)
     res.end('Hell world');
 }

 const server = http.createServer(requestHeaders);
 
 server.listen(5000, function(){
     console.log('working here');
 });
