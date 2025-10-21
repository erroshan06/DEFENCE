// //Array 

// // let marks1= 100;
// // let marks2=50;
// // let marks3= 20;
// // let marks4= 40;

// let marks=[100,50,20,40]
// console.log(marks);
// console.log(marks.length);


// let arr=[100,30,"Rohit", true ]
// console.log(arr);

// console.log(arr[1]);
// console.log(typeof arr);

// // arr[2]=90;
// // console.log(arr);


// // push  :insert element at end 
// arr.push(98);
// arr.push("strike");
// console.log(arr);


// //pop operation :Delete element from end 
// arr.pop(98);
// arr.pop("strike");
// console.log(arr);


// // starting me  add kr skta hu 

// arr.unshift(10);
// arr.unshift(50);
// console.log(arr);

// //  delete the element at first palace 
// arr.shift();
// console.log(arr);


// let arr =[10,20,20,30,40,50];
// for(let i=0;i<arr.length; i++){
//  console.log(arr[i]);   
// }

// for (let num of arr){
//     console.log(num);
// }


// let arr =[10,20,20,30,40,50];

// let arr2 = arr; // copy by refrence 
// arr2.push(3);
// console.log(arr);



// object(non-primitive ): copy by refrence  hota hai 
// primitive  : copy by value hota hai 

// let arr =[10,20,20,30,40,50];
// arr=[80,90,11]; //  valide 
// console.log(arr);



// const arr =[10,20,20,30,40,50];
// arr=[80,90,11]; // not valide 
// console.log(arr);





// const arr =[10,20,20,30,40,50];
// const arr2 =arr.slice(2,4)
// console.log(arr2);
// console.log(arr);

//splice -: changes in original array
//trim-out 

// const arr =[10,20,20,30,40,50];
// const arr2 =arr.slice(2,4)
// console.log(arr);
// console.log(arr.splice(1,3));

// console.log(arr);
// console.log(arr.splice(1,2,"roshan",20));
// console.log(arr);





// const arr =[10,20,20,30,40,50];
// const arr2=['Rohit', 17,true];
// const arr4= [90,4,false];

// //arr.push(arr2);
// // const arr3= arr.concat(arr2,arr4);

// // const arr3=[arr,arr2,arr4];


// const arr3=[...arr,...arr2,...arr4]
//  console.log(arr3);


// const names= ["Alice","Rohit","Mohit","Bob","Charlie" ,"Bob"];
// // console.log(names.toString());
// // console.log(typeof names.toString());

// // console.log(names.join("_"))
// // console.log(names.indexOf("Bob"))
// // console.log(names.lastIndexOf("Bob"))
// // console.log(names.includes("Bob"));

// console.log(names.sort());
// console.log(names.reverse());

// const a =[101, 90, 80 , 32,91]; // treat character by character 
// const  arr=["Rohit", 10, "Mohan ", true ]
// a.sort();
// console.log(a);
// arr.sort();
// console.log(arr);
// 

//ascending order sorting
// const arr =[10,40,31,71,5,11]; 
// arr.sort((a,b)=>a-b);
// console.log(arr);

//descending order sorting
// const arr =[10,40,31,71,5,11]; 
// arr.sort((a,b)=>b-a);
// console.log(arr);




const arr =[10,20,50,[40,90,[60,19,99],11],80]
// console.log(arr[3][0]);
// console.log(arr[3][2][1]);

//flat
const  a= arr.flat(Infinity);
console.log(a);