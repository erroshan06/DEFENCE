 // // variable  ko kaise bnate h 
// let name ="Rohit";
// let age=20;
// age = 30;
// console.log(name ,age);

// const account=1234;

// console.log(account);

// var a = 10;
//  var a= 20;    old method 
// console.log(a);

// if (true){
//     var a= 20;
// }

// function fun(){
//     var c= 10;
// }
// var b = 30 ;
// console.log(c);

// if (true){
//     let c= 20;
// }

// console.log(c);


    //  data types
// primitive data type  :-
//   number , string , boolean , undefined , null , bigint , symbol 


//number 
let a = 10; 
let b = 2.36
console.log(a , b);

console.log(typeof a);
console.log(typeof b);

// string

let c= "Strike is comig";
let d='Anjali '
console.log(c, d);
console.log(typeof c, typeof d );

//boolean
let login= true ;
let f = false ;
console.log(login, f)
console.log(typeof login,typeof f);


//undefined 
let user;
 const p= 10;
console.log(user);
console.log(typeof user);


//bigint
let num= 234567890987654n;
console.log(num);
console.log(typeof num);

//null :-  represents the intentional absence of any object value.
let weather = null;
console.log(weather);
console.log(typeof weather);

// let weather = current_weather("Dwarka"); 

//25 
//null:- sorry to unable to fetch the temp;
//undefined :- doesnt exist 


//symbol:-
const id1= Symbol("Id");
const id2 = Symbol("Id")

console.log(typeof id2);
console.log(id1== id2);

//2.non-primitive data type :-
//  array , object , function 

// Array
let arr =[10,20,11,"Rohit ", true];
console.log(arr);
console.log(typeof arr);

// object
// rohit 12321 18 gen 

let  obj={
    name:"Rohit",
    account:12321,
    age:18,
    category:'gen'
}
console.log(obj);

console.log(typeof user);
// function

let  s= function add(){
    console.log("HEllo");
}
// add();
console.log(s);
// typeof
console.log(typeof s);


//primitive data type is immutable
let z= 20;
z=10;
console.log(a);

let string1="mohit";
string1='Roshan';
string1[0]= 'M'; 
console.log(string1[0]);// print R not M .... bcz of immutability

// non-primitive data types are mutable

// let arr1 =[1,2,3,4,5,6,7];
// arr1.push(90);
// arr1[0]=70;
// console.log(arr1 , arr[0]);




//pass by value or copy by value (primitive data types)
let x= 10;
let y= x;
y= 20;
console.log(x,y);


let objj={
    name:'rohan',
    age:20,

}
let objj1= objj;
objj1.name="coder";
console.log(objj1);