// const products = [
//   // Electronics
//   { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
//   { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
//   { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
//   { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
//   { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

//   // Books
//   { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
//   { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
//   { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

//   // Appliances
//   { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
//   { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
//   { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
//   { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

//   // Clothing
//   { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
//   { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
//   { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

//   // Home Goods
//   { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
//   { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
//   { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

//   // Groceries
//   { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
//   { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
// ];
// const newProducts=products.filter((product)=>product.price >50).sort((a,b)=>b.price-a.price);
// // console.log(newProducts)


// const ans =products.map((product)=>({name:product.name , price:product.price}))
// // console.log(ans);


// //reducer
// const totalPrice=products.reduce((accumlator , currentValue)=>{
//   if (currentValue.inStock)
// return   accumlator+currentValue.price;
//   else return accumlator

// },0)
// console.log(totalPrice);

// dta structure : set-: its a collection of items where duplicates are impossible

// const arr=[10,20,30,10,25,15,10,20]
// // console.log(arr);

// const s1=new Set(arr);
// s1.add(11);
// console.log(s1);
// console.log(s1.has(20));
// console.log(s1.has(23));
// s1.delete(20)
// console.log(s1);
// console.log(s1.size);
// s1.clear();
// console.log(s1);

// const email=["ro@gm","ra@gm","mo@gm","ro@gm"];
// const s2= new Set(email);
// console.log(s2);

const email=["ro@gm","ra@gm","mo@gm","ro@gm"];
// const uniqueEmail= [...new Set(email)];
// console.log(uniqueEmail);

const s4=new Set(email);
for (let num of s4){
  console.log(num);
}



//data structure: map-: 


const m1=new Map([
  ["Rohit",40],
  [2,"rohit"],
  [true, 11],
  [[10,30,11],"mohit"]
]);

m1.set({name:"manish ", age:20},false)

console.log(m1);
console.log(m1.has("Rohit"));
 console.log(m1.get("Rohit"));
 console.log(m1.size);


 //itreate

 for (let [keys ,value] of m1){
  console.log(keys,value);

 }