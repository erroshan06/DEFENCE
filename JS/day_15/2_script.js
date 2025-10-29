const grandparent= document.getElementById("grandparent");
grandparent.addEventListener('click',(e)=>{
    console.log(e.target);
     console.log("grandparent is clicked ");
}) 
const parent= document.getElementById("parent");
parent.addEventListener('click',(e)=>{
  console.log("parent is clicked ");
        // console.log(e);
})


const child= document.getElementById("child");
child.addEventListener('click',(e)=>{
    console.log("child is clicked ");
        // console.log(e);
         e.stopPropagation(); // bubbling stop on child 
})


//capture phase on hai -:  top to down aaoge : us time pe event ko trigger kr diya jaayegaa 
//capture phase off hai -:   Event hai usko  down toi up (bubbling phase bolte hai ,tab trigger kiya jayega )