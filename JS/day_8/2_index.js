// CALLBACK FUNCTION 

// function dance (){
//     console.log(" i am dancing  ")
// }
// function greet(){
//     console.log("hello ji kaise ho ")
// }
// function meet (callback){
//     console.log("i am going to meet someone ");
//     //dance(); hardcode(reusable)
// callback();
// // more code to code excute 
// console.log("i have finished meeting")
// }
// meet (greet);
// meet (dance);




// blinkit merged 
function blinkitOrderplaced (){
    console.log("We have stared packing ur food  ");
}





// zomato company 
function ZomatoOrderplaced(){
    console.log("We have stared preparing ur food  ");
}


function payment(amount, callback){
    console.log(`${amount} payment has intilized`);
    console.log("payment is received");
    callback();
//GST : government 
// rider ko kitna payment krna h
// company ko kitna bhejna h 

}

payment(500,ZomatoOrderplaced);
payment(300, blinkitOrderplaced)