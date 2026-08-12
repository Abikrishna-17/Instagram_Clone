
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


let str = "(-))"

let k = str.replace("-","")

console.log(str)