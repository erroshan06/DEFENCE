  const div = document.querySelector('div');
  const date = document.getElementById('date')
function updateclock(){

    let time = new Date();
   


    div.textContent = time.toLocaleTimeString();
 date.textContent= time.toDateString();
    
}
setInterval(updateclock,1000) ;
updateclock();

