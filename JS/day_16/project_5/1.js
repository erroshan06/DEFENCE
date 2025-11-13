

const result =document.getElementById('result')

function updatecount() {
   const currentTime = Date.now();
   const newYearTime = new Date(2026, 0, 1).getTime();
   let timer = newYearTime - currentTime;

   if (timer < 0) {
      result.textContent = "🎉 Happy New Year 2026!";
      return;
   }

   // milisecond 

   const day = Math.floor((timer) / (1000 * 60 * 60 * 24));
   timer %= 1000 * 60 * 60 * 24;

   const hour = Math.floor((timer) / (1000 * 60 * 60));
   timer %= 1000 * 60 * 60;

   const minute = Math.floor((timer) / (1000 * 60));
   timer %= 1000 * 60;

   const second = Math.floor((timer) / (1000));
   timer %= 1000;

   result.textContent = ` ${day}   ${hour}    :  ${minute}     :     ${second} Second:`;
}
setInterval(updatecount, 1000);
updatecount();