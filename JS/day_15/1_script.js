
// function handleClick(){
// const element = document.getElementById("first");
// element.textContent="Strike is Coming";
// }

// const element=document.getElementById("first");

// element.onclick=function handleClick(){
//     // element.textContent="Stike is coming soon "
//     element.style.backgroundColor="pink"
// }
// element.onclick=function handleClick(){
//     element.textContent="I am the best ";
// }

// element.addEventListener('mouseleave',()=>{
//       element.textContent="I am the best ";
      
// })
// element.addEventListener('click',()=>{
//       element.style.backgroundColor="brown"
      
// })




// const child1=document.getElementById("child1");
// child1.addEventListener('click',()=>{
//   child1.textContent="I am clicked";  
// })

// const parent=document.getElementById("parent");
// console.log(parent.children);

// for(let child of parent.children){

//     child.addEventListener('click',()=>{
//         child.textContent ="I am clicked"
//     })

// }


const parent=document.getElementById("parent"); 
//remove event listner 
function handleClick(e){
         e.target.textContent= "i am clicked ";
         parent.removeEventListener('click',handleClick);
}

parent.addEventListener('click',handleClick);


// parent.addEventListener('click',(e)=>{
//     //  console.log(e.target);
//      e.target.textContent= "i am clicked "
// })



