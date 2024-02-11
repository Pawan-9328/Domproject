const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock');

setInterval(function(){
   let date = new Date();
   //..print in console
   //console.log(date.toLocaleTimeString());
   //..print in page
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)