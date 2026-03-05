// let text = document.getElementById("text");
// const fun = (name) => `Hello ${name}`;
// const names = ["Bob","Charlie","David"];

// names.forEach((naam, i) => {
//   setTimeout(() => {
//     // console.log(fun(naam));
//     text.innerText = fun(naam);
//   }, i * 2000);
// });

let text = document.getElementById("text");

const names = ["Bob","Charlie","David"];
let index = 0;

setInterval(() => {
  text.innerText = `Hello ${names[index]}`;
  index = (index + 1) % names.length;
}, 2000);


// let URL = "https://colormagic.app/api/palette/search?q={searchQuery}";

// fetch(URL.replace("{searchQuery}", "nature"))
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error("Error:", error);
//   });



// // let newarr=[]
// // for(i=0; i<arr.length; i++){
// //  newarr.push(arr[i]*2)  
// // }

// // console.log(newarr);
// if(arr.length%2===0){
// let newarr2=arr.map((num)=>{
//     return num*2;
// console.log(newarr2); 

// })
// }
let arr=[];

let sum=0;
for(let i =0; i<arr.length; i++){
  sum= sum+arr[i]
  
  
}
let avg = sum/arr.length;
console.log(avg);