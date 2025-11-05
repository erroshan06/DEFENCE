 const form= document.querySelector('form');

 form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name= document.getElementById("name");
    const love=document.getElementById("love");

const l1=(name.value).length;
const l2=(love.value).length;
 
const result = Math.pow(l1+l2,3)%101;


document.querySelector('h2').textContent=`${ result}%`;
form.reset();
 })

