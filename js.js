document.addEventListener('DOMContentLoaded', function() {
    const ingenieros = [
        { nombre: 'Juan Pérez', oficio: 'Administración de Empresas' },
        { nombre: 'María García', oficio: 'Ingeniera de Sistemas' },
        { nombre: 'Pedro López', oficio: 'Mecatrónica' },
        { nombre: 'Ana Rodríguez', oficio: 'Telecomunicaciones' },
        { nombre: 'Luis Martínez', oficio: 'Ingeniera Química' }
    ];

    const listaIngenieros = document.getElementById('listaIngenieros');
    
    ingenieros.forEach((ingeniero, index) => {
        const elemento = document.createElement('div');
        elemento.classList.add('ingeniero');
        elemento.innerHTML = `<span>${ingeniero.nombre} - ${ingeniero.oficio}</span>
                              <button class="btn-contratar" onclick="contratar(this, '${ingeniero.nombre}')">Contratar</button>
                              <div class="alerta" style="display:none;"></div>`;
        listaIngenieros.appendChild(elemento);
    });
});

function contratar(boton, nombre) {
    boton.nextElementSibling.style.display = 'block';
    boton.nextElementSibling.textContent =`Contratado/a: ${nombre}`;
    boton.disabled = true;
    boton.style.backgroundColor = '#28a745';
    boton.style.cursor = 'default';
}