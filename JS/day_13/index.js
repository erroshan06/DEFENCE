const newelement =document.createElement("h2");
newelement.textContent="Strike is coming";
newelement.id="Second";

//select element
const element=document.getElementById("first");
// element.before(newelement);
element.after(newelement);



const newelement2=document.createElement("h3");
    newelement2.textContent="Diwali aa rhi h ";
    newelement2.id="third";
//    newelement2.className="diwali";
//       newelement2.className+=" holi";

newelement2.classList.add("diwali");
newelement2.classList.add("holi");
//newelement2.classList.remove("diwali");



newelement2.style.backgroundColor="brown";
newelement2.style.fontSize="30px";
newelement2.setAttribute("hello","ji")


element.before(newelement2);
// console.log(newelement2.getAttribute("id"));
console.log(newelement2.getAttribute("hello"));


// const list =document.createElement("li");
// list.textContent= "Milk";
// const list2 =document.createElement("li");
// list2.textContent= "Egg";

// const list3 =document.createElement("li");
// list3.textContent= "Cake";

// const list4 =document.createElement("li");
// list4.textContent= "Paneer";

// //listing 
// const unorderElement =document.getElementById("listing");


// unorderElement.append(list,list2);

// unorderElement.prepend(list3);



// list.after(list4)
// console.log(unorderElement.children[1]);
// unorderElement.children[1].after(list4);

const arr=["Milk","Halwa ","Paneer","Cake","Tea"];
const unorderElement=document.getElementById("listing");
const fragment= document.createDocumentFragment();


for(let food of arr){
   // console.log(food)
   const list = document.createElement("li");
   list.textContent= food;

// unorderElement.append(list);

  fragment.append(list);
}

 unorderElement.append(fragment);



 const s1= document.getElementById("first");
 s1.remove();



//old month 
 const month= document.getElementById("ten");

//  console.log(month.childNodes);
const lister=document.createElement("li");
lister.textContent="<h2>Help</h2>";


// month.insertAdjacentElement("beforebegin",lister);
// month.insertAdjacentElement("beforeend",lister)
 // month.insertAdjacentElement("afterbegin",lister)

 //lister.innerHTML="<h2>Help</h2>";
 month.prepend(lister);


