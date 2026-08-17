
// async function hello(){

//     const response = await Promise.race(
//         [
//             fetch("https://.mockapi.io/api/user/passwords/1"),
//              fetch("https://6a66fb27189fe5869eb6cfc7.mockapi.io/api/user/passwords/111")
//             //  fetch("https://.mockapi.io/api/user"),
//         ]
//     )

//     console.log(await response.json());

    
// }

// hello();



// let obj = {

//     name:"abi",
//     age:33,

//     gender:{
//         male:true
//     }
// }

// for( m in obj){
//     console.log(obj[m])
// }

// for(let i=0;i<5;i++){
//     setTimeout(()=> console.log(i) ,i*1000)
// }


// let obj = {
//     0:"abi",
//     "length":1
// }

// let k = Array.from(obj);
// console.log(k)



// let arr = [];
// k(arr);
// console.log(arr)

// function k(array){
//     array.push(23)
// }

// function combination(arr,target){

//     let result = [];
//     let current = [];

//     function find(start){

//         if(current.length===arr.length){
//             result.push([...current]);
//             return;
//         }

//         for(i=start;i<arr.length;i++){
//             current.push(arr[i]);
//             find(i+1);
//             current.pop();
//         }
//     }
//     find(0)
//     console.log(result);
// }

// combination([1,2,3,4]);


// let visited = new Array(3).fill(false);
// console.log(visited)

// const prompt = require("prompt-sync")();

// let arr = [];
// for(let i=0;i<5;i++){
//     arr[i] = Number(prompt());
// }
// console.log(arr)


// let arr = [1,2,3,3,4]

// delete arr[0]
// console.log(arr);

// console.log(undefined+1);

// what is javascript?
// Explain the concept of a microtask queue?
// What is the typical use case for anonymous functions?
// Explain the concept of data binding in JavaScript?
// what is the difference btwn the iterators and generators ?
// Is DOM part of JavaScript?
// where is js engine exists ?
// real time example of event capturing ?
// Why is event delegation better for large lists?
// What is the difference between event.target and event.currentTarget?
// what is the return type of queryselectorAll and getelementbyclassname ?
// Can an event handler block the browser?
// How would you implement a search box without making an API request for every keystroke?
// You have 10,000 buttons. Would you attach 10,000 event listeners?
// why we need to use matches and closests?
// task.

// let obj = {
//     name:"abi",
//     hello:{
//         age:33
//     }

// }
// const obj2 = {...obj};

// console.log(obj2)

// let arr = []

// arr.reduce()


// let obj = [
//     {age:22,name:"z"},
//     {age:1,name:"a"}
// ]

// obj.sort((a,b)=>a.name.localeCompare(b.name));
// console.log(obj);

// Object.
// b= {
//  k(){
//     console.log("a");
// }
// }

// k()

// let arr = [1,2,3,45,67,8]

// let arr2 = [...arr];

// console.log(arr);
// arr2[2] = 1000
// console.log(arr)
// console.log(arr2)

// function p(){
    
// }
// p.prototype.hello= 10;

// let person = new p();


// p.prototype.hello= 20;

// let person2 = new p();


// p.prototype={
//     hello:30
// }

// let person3 = new p();

// console.log(person.hello);
// console.log(person2.hello);
// console.log(person3.hello);



let arr = [2,3,4,5];

console.log(arr.find((val)=> val===21));