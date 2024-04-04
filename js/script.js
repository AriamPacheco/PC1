document.addEventListener('DOMContentLoaded', function() {
    const ingenieros = [
        { nombre: 'Luis Morales', oficio: 'Ingeniero Civil' },
        { nombre: 'Sofía Carrasco', oficio: 'Ingeniera de Sistemas' },
        { nombre: 'Diego Fernández', oficio: 'Ingeniero Industrial' },
        { nombre: 'Camila Gutierrez', oficio: 'Ingeniera Ambiental' },
        { nombre: 'Josefina Velasco', oficio: 'Ingeniera Química' }
    ];

    const listaIngenieros = document.getElementById('listaIngenieros');
    
    ingenieros.forEach((ingeniero, index) => {
        const elemento = document.createElement('div');
        elemento.classList.add('ingeniero');
        elemento.innerHTML = `<span>${ingeniero.nombre} - ${ingeniero.oficio}</span>
                              <button class="btn-contratar" onclick="contratar('${ingeniero.nombre}')">Contratar</button>`;
        listaIngenieros.appendChild(elemento);
    });
});

function contratar(nombre) {
    console.log("Has contratado a"+${nombre}+".");
}