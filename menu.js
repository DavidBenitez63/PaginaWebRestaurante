/* Esta parte el codigo es para al darle click al icono de menu, se nos desplacen las opciones*/
var btnmenu =document.getElementById('btn-menu');
var nav =document.getElementById('nav');

btnmenu.addEventListener('click',function() {
  nav.classList.toggle('muestrate')

})
