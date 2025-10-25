//Scope and Closure ,HOF

//3 types of scope 
// 1.global scope -: accesabile to everyone 
// 2.functional scope -: accesabile only to that function 
// 3.Block level  scope -: accesabile only to that block 
 //var ko only global and function ko respect deta hai 



// let a= 10;// global scope 
// const b= 20;
//  var e = 50;


//  if (true ){
//     let d = 30; //Block level  scope 
//       console.log(d);
//  }



// function greet (){

//     let c= 30; // functional scope 
   
//     console.log(c);
// }
// console.log(e);
// greet();



//  let global = 390;

//  function greet(){
//     let global = 40;
//     function meet(){
//         let global = 50;
//  console.log(global);
//     }
// meet();
//  }
//  greet();




//clouser-: a function that remembers variables form its outer scope even after the outer  function has finished executing
function createCounter(){


    let count = 0;
    function  increment (){
        count++;
        return count;
    
    }
    return  increment;
}


 const counter = createCounter();
// counter();
console.log(counter());
console.log(counter());
console.log(counter());