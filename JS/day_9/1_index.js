// //execution context -:

// // 1.memory allocation 
// // a= undefined 
// //b =undefined 
// //addnumber= func code
// // sumresult1= undefined
// // sumresult2=undefined

// //2.excuation phase
// //  a= 10;
// //  b=20;
// //  addnumber=> function code 
// //sumresult1 =>addnumber=> function call



// console.log(a);
// var  a= 10 ;
// var b = 20;
// var sumresult1 = addnumber(a,b);
// console.log(sumresult1);
// function addnumber(num1,num2){
//     var sum = num1+num2;
//     return sum;

    
// }
// //var sumresult1= addnumber(a,b);
// var sumresult2= addnumber(4,5);

// console.log(sumresult1,sumresult2);





//let const 
//memory allocate
//a = <uninitialised> (temporal ded zone )
//b= <uninitialised>(temporal ded zone )
 
//excuation 
// a= 10;
// b= 20;



let a= 10;
const b= 20;


const addnumber= function(num1, num2 ){
    const sum = num1 +num2;
    return sum;

}

const result= addnumber(a,b);
console.log(result);