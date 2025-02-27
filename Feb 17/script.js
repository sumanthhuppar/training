// const date = new Date();
// const year = date.getFullYear();
// document.getElementById("date").innerHTML = year;

// document.addEventListener("DOMContentLoaded", function() {
//     const date = new Date();
//     const year = date.getFullYear();
//     document.getElementById("date").innerHTML = year;
// });
// const person ={
//     name:"sumanth",
//     age:23,
//     city:"kadur"
// }

// const myArray = Object.values(person);

// const person = new Array("1",2,3,4,5)
// console.log(typeof person[0] +" "+ typeof person[1])
// var info = JSON.stringify(person)
// console.log(info)

// const points = [40, 90, 9, 15, 25, 10];
// points.sort(function(a, b){console.log(a-b); return a - b});
// let a = points.sort();
// console.log(a)

// let max = -1;
// let min = 999;

// array iteration
// const myfunc = (value, index, array) => {
//     if (value > max) {
//         max = value;
//     }
//     if (value < min) {
//         min = value;
//     }
    // console.log(max, min);
// };

// Use forEach to iterate over the array
// points.map(myfunc);

// console.log(`max = ${max} and min = ${min}`);

// const array = Array.from("Sumanth H");
// 

// const myfunc = ()

// array.filter(myfunc);

// let x = 1.9;
// console.log(Math.floor(Math.random() * 10));




// console.log(a);
// var a= 10;
// console.log(add)
// console.log(a)
// function add(){
//     console.log(a+b);
// }
// add()
// var a =10;
// var b =20;


var api_key = "https://api.restful-api.dev/objects";

var promise = fetch(api_key);
console.log(promise);

promise.then((data) => {
    console.log("this is data",data,"data ended here");
});

setTimeout(() => console.log(promise), 3000);