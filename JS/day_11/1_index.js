//forEach ,filter ,reducer, map , set 


// const arr=[10,20,30,5,87,90];
// let sum= 0;

// //forEac
// arr.forEach((number)=>
// {
//  sum+=number;
// })

// console.log(sum);



//filter

const arr=[10,20,30,5,90,87];
// true:select , false:not selected
// const newArr= arr.filter((number)=>number>25);
// console.log(newArr);

// const ans = [];
// arr.filtering = function(compare) {
//     for (let num of arr ){
//         // console.log(num);
//         if (compare(num)){
//             ans.push(num);
//         }
//     }
//     return ans;

// }
//  const newArr= arr.filtering((num)=>num>25);
//  console.log(newArr);


//  const a=[80,30,15,31,42,70];
//   const newA=a.filtering((num)=>25>num); // error bcz its not generalised 
//   console.log(newA);




//generalised code 

Array.prototype.filtering = function(compare) {
    const ans = [];
    for (let num of this  ){
        // console.log(num);
        if (compare(num)){
            ans.push(num);
        }
    }
    return ans;

}
 const newArr= arr.filtering((num)=>num>25);
 console.log(newArr);


 const a=[80,30,15,31,42,70];
  const newA=a.filtering((num)=>num>25); // error bcz its not generalised 
  console.log(newA);


  