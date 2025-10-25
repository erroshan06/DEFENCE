 //higher order function

// function double(){
//     function excute(){
//         console.log("hello");
//     }
//     return excute;

// }
// const n = double();
// n();

function double(value){
     return  function excute(num){
        return num*value 
        
    }

}
const n = double(20);
console.log(n(5));

