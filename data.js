
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

for(let i=0;i<5;i++){
    setTimeout(()=> console.log(i) ,i*1000)
}

