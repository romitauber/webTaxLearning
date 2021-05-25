// sidebar del carrito 

const btnCarrito = document.querySelector('.toggle-btn');
const cerrarCarrito =document.querySelector('#sidebar svg');
console.log(cerrarCarrito);
console.log(btnCarrito);

btnCarrito.addEventListener('click', function () {
    console.log('clic');
    document.getElementById('sidebar').classList.toggle('active');
    console.log(document.getElementById('sidebar'));
});

cerrarCarrito.addEventListener('click', function(){
    console.log('clic');
    document.getElementById('sidebar').classList.toggle('active');
    console.log(document.getElementById('sidebar'));

})