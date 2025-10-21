//Date




//time
// const now= new Date();


//  console.log(now); //-:utc time ;
// console.log(now.toString());
// console.log(now.toISOString());
// console.log(now.toLocaleString());


// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getFullYear());
// console.log(now.getHours());
// console.log(now.getMonth());
// console.log(now.getMilliseconds());

//days :mon-tue (1 based )
//month :0 based (8-means september)
// const now = new Date (2025,8,20,8,25,16,125)
// console.log(now.toString());



const now = Date.now();
const dates=new Date(now)
console.log(now)
//1760979760230 :timestamp
console.log(dates.toString());

