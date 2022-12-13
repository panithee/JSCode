const msg= document.querySelector('#message') 
const display = document.querySelector('p') 
// msg.addEventListener('input', function () {
//  display.textContent =msg.value
// })
msg.addEventListener('keypress', (event)=>{
    //event.keyCode, event.which
    if(event.key==='Enter')
    display.textContent=msg.value
})