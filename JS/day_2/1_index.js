// 🧠 Memory Management in JavaScript
// JavaScript uses two main memory areas to store data:
// 👉 Stack and Heap.
// These aren’t unique to JS — they’re concepts from computer memory management — but JS uses them in a particular way.



// 🧩 1. Stack (Primitive Values)
// 🔹 What it stores:
// Primitive data types:
// Number
// String
// Boolean
// undefined
// null
// Symbol
// BigInt



// 🔹 Characteristics:
// Fast access (LIFO – Last In, First Out)
// Fixed size
// Stores values directly
// Used for function calls, execution context, and local variables

// 🔹 Example:
// let a = 10;
// let b = a;
// b = 20;

// console.log(a); // 10
// console.log(b); // 20

// ✅ a and b are independent because they’re stored by value on the stack.






// 🧱 2. Heap (Reference Values)
// 🔹 What it stores:
// Objects
// Arrays
// Functions


// 🔹 Characteristics:
// Slower access
// Dynamic memory allocation (size can grow/shrink)
// Stores references (pointers) to memory locations, not values directly


// 🔹 Example:
// let obj1 = { name: "Alice" };
// let obj2 = obj1;

// obj2.name = "Bob";

// console.log(obj1.name); // Bob
// console.log(obj2.name); // Bob


// ❗ Here both obj1 and obj2 point to the same object in the heap — modifying one affects the other.

// ⚙️ How They Work Together

// When you run JS code:

// Primitive values are stored in the stack.

// Reference values (objects, arrays, functions) go in the heap, and their references (addresses) are stored in the stack.

// When a variable is used, the JS engine looks up the reference in the stack, then goes to the heap to get the actual data.

// 🧩 Visual Example:
// Stack                          Heap
// -----                          -----
// a → 10
// b → 20
// obj → 0x001       ----->      0x001: { name: "Alice" }
