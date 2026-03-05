
// for(let i =1; i <= 20; i++){
//   if(i%2!=0){
//   console.log("odd",i);
// }

// }
// for(let i =10; i >= 1; i--){
//   console.log(i);
// }

//   for(let i =5; i <= 15; i++){
//    console.log(i);
   
//   }


//  for(let i =1; i <= 20; i++){
//   if(i%3!==0){
//   console.log(i);
//  }
//  }
 
//  for(let i =1; i <= 30; i++){
//    if(i%3===0 && i%5===0){
//   console.log("fizzbuzz");      
//  }
//    else if(i%3===0){
//   console.log("fizz");

//  }
//  else if(i%5===0){
//   console.log("buzz");    

//  }

//  else{
//   console.log(i);
//  }
//  }
 
// for(let i =1; i <= 100; i++){
//   for(let j =1; j <= 10; j++){
//     console.log(`${i} x ${j} = ${i*j}`);
    
//   }
// }
// for(let i =1; i <= 5; i++){ 
//   let pattern = "";
//   for(let j =1; j <= i; j++){
//     pattern += "*";
//   }
//   console.log(pattern);
  

// }
// for(let i =5; i >= 1; i--){ 
//   let pattern = "";
//   for(let j =1; j <= i; j++){
//     pattern += "*";
//   }
//   console.log(pattern);
  

// }


// let str = "amit";
// str.length
// str[0]
// str[str.length - 1]

// for(let i =0; i < str.length; i++){
//   let reversed = str.split("").reverse().join("");
//   console.log(reversed[i]); 
// }

// let ste1 = "madaM";
// let str = ste1.toLowerCase();
// let reversed="";

// for(let i=str.length-1; i>=0;i--){
  
//   reversed+=str[i];
  
// }
// if(reversed===str){
//     console.log("palindrome");
    
//   }
//   else{
//     console.log("Not palindrome");

//   }
 

  // console.log(reversed);

  let word="aeueioo3ujiwj";
  let count=0;
for(let i=0; i< word.length; i++){
  if (word[i]==="a" || word[i] ==="e"||word[i]==="i"||word[i]==="o"||word[i] ==="u") {
   

    count++;
    
    }
    
  }
console.log(count);



let word1= "aeueioo3ujiwj";
let count1 = word.split("").filter(c => "aeiou".includes(c)).length;

console.log(count1,"h");

let w="harishchandrapur";
const vowel="aeiou";
let count2=0;

for(let a of w){
  if(vowel.includes(a))
  {
    count2++;
  }
}
console.log(count2);
