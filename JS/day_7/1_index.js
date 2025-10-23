//Object
// key value 

// const user ={
//     name:"Rohot",
//     age : 29,
//     emaiId : 'negi@gmail.com',
//     amount :4000
// }
// console.log(user);
// console.log(user.age);
//console.log( typeof user);
//CRUD operation : Create read update delete

//insert ,update 
// user.adhar=1234;
// console.log(user);


// user.amount=589887898;
// console.log(user);


// //delete
// delete user.emaiId;
// console.log(user);



// console.log(user["name"]);
// console.log(user["age"]);

// const user2 = user;
// user2.age= 90;// if i cahnge in user2 then also will change in user
// console.log(user);


//------IMPORTANT
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// for (let keys in user){
//     console.log(keys,user[keys]);
// }


// const user ={
//     name:"Rohit",
//     age : 29,
//     emaiId : 'negi@gmail.com',
//     amount :4000
// }

// object ko destructing krna 
// const name = user.name;
// const age = user.age;
// const {name:username , age:userage,amount }=user;
// console.log(name, age );
// console.log(username, userage );


  
//array ko destructing krna 
//  const arr=[10,20,30,40];
//  const [first,second]=arr;
//  console.log(first,second);

//for of loop array pe lga skyte h 
// const temparr=Object.keys(user)
//  for(let keys of temparr ){
// console.log(keys);
//  }

// for (let keys of Object.values(user)){
//     console.log(keys);
// }

// for (let keys of Object.entries(user)){
//     console.log(keys);
// }

// const user ={
//     name:"Rohit",
//     age : 29,
//     emaiId : 'negi@gmail.com',
//     amount :4000,
//     greeting: function(){
//         console.log(`strike is coming soon ${this.name}`);
//         return 20;
//    }

// }
// const va=  user.greeting();
// console.log(va);


//nested objects 
// const user ={
//     name:"Rohit",
//     age : 29,
//     emaiId : 'negi@gmail.com',
//     amount :4000,
//    address:{
//    city:"kotdwar",
//    state:"uttrakhnad "
//    }
//    }
//    console.log(user.address.city);

//    shallow copy
// const user2={...user}
// user2.name="sohan"
// user2.address.city="Dwarka"
// console.log(user2);


//deep copy 
// const user2= structuredClone(user);
// user2.address.city="Dwarka"
// console.log(user2);
// console.log(user);



// const user ={
//     name:"Rohit",
//     age : 29,
//   0:100,
// 2:"mohan"

//    }
//    console.log(user["0"]);
//     console.log(user[2]);

// key: string || symbol

const sym =Symbol("id");
const user ={
    name:"Rohit",
    age : 29,
  0:100,
2:"mohan",
[sym]: "hello ji"

   }
   console.log(user[sym]);