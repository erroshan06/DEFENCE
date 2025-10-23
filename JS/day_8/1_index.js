//function

// function greeting(){
//     console.log("Hello coder");
//     return -5
// }
// function addnumber(num1, num2, num3=0,num4=0){
//     const sum = num1+num2+num3+num4;
//     console.log(sum);
// }

// addnumber(6,7);
// addnumber(6,7,8);
// addnumber(6,7,8,9);

// console.log(greeting());


//rest operator 
// function addnumber(...num){
//     let sum= 0;
//     for (let n of num ){
//         sum+=n ;
//     }
// console.log(sum);
// }

// addnumber(6,7);
// addnumber(6,7,8);
// addnumber(6,7,8,9);
// addnumber(6,7,8,9,6,6,6,6,7,7,8,543);


// const arr= [10,20,30,40,50];

// const arr2 = [30,60,79,10]
// const [first ,second,...num]= arr;
// console.log(first , second, num)

// const ans =[...arr,...arr2];
// console.log(ans)



//function:expreesion

// const addnumber =function(num1 , num2 ){
//     return num1+num2;
// }
// console.log(addnumber(3,7));


//arrow function

// const addnumber=(num1 , num2)=>num1+num2;
// const addnumber=(num1 , num2)=>{//same 
//  num1+num2;
// }
    // console.log(addnumber(3,4));


//if we  have single 1 parameter, no need of this()
    // const squarenumber=num=>num*num;
    // console.log(squarenumber(6));


    // const greeting=()=>{
    // return {
    //         name:"rohit",
    //         age:30
    //     }
       
    // }
    // console.log(greeting());





    //IIFE -immediately invoked function

    (function greeting(){
        console.log("hello ji " );
    })();


    (()=>{
        console.log("hiiiii");

    })()