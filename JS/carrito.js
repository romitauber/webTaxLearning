// variables

const listaCursos = document.querySelector('.contenedor-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const carrito = document.querySelector('#carrito');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = [];

// Eventos

registroDeEventListeners();

function registroDeEventListeners() {
    // cuando agregas un curso presionando agregar al carrito
    listaCursos.addEventListener('click', agregarCurso);
    carrito.addEventListener('click', eliminarCurso);
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; // reseteamos el arreglo
        limpiarHTML(); // eliminamos todo el html 
    });

}


//Funciones


function agregarCurso (e) {
    e.preventDefault();
    if (e.target.classList.contains('boton')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
        
       
    }
}


function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')) {
         const cursoId = e.target.getAttribute('data-id');

         //Elimina del arreglo de articulosCarrito segun el data id

         articulosCarrito = articulosCarrito.filter (curso => curso.id !== cursoId);

         carritoHTML(); //iteramos sobre el carrito y mostramos su html
    }

}

function leerDatosCurso (curso) {
    const infoCurso = {
        titulo: curso.querySelector('h2').textContent,
        precio: curso.querySelector('.curso-precio').textContent,
        cantidad: 1,
        id: curso.querySelector('button').getAttribute('data-id'),
    }
    
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
    if (existe) {
        const cursos = articulosCarrito.map( curso => {
            if ( curso.id === infoCurso.id ) {
                curso.cantidad++;
                return curso; //retorna  el objeto actualizado
            } else {
                return curso; // retorna los objetos que no son duplicados
            }
        });
        articulosCarrito = [...cursos];
    } else {
        // agregando al carrito
         articulosCarrito = [...articulosCarrito, infoCurso];
    };
    alert(`El ${infoCurso.titulo} fue agregado exitosamente a tu carrito, para verlo haz click en el carrito de compras`);
    console.log(articulosCarrito);

    carritoHTML();
}


function carritoHTML () {
    limpiarHTML();
    articulosCarrito.forEach( curso => {
        const { titulo, precio, cantidad, id} = curso;
        
        const row = document.createElement('tr');
        row.className = 'tabla-carrito'
        row.innerHTML =`
            <td> ${titulo} </td>
            <td> ${precio} </td>
            <td> ${cantidad} </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>`
        ;
        contenedorCarrito.appendChild(row); //aca le esta avisando que queres que lo agregue en el tbody. VER DEF DE VARIABLES
    
    });
}

function limpiarHTML () {
    while (contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

