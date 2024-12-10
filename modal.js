// Obtener elementos del DOM
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modal');
const userTableBody = document.getElementById('userTableBody');
const submitButton = document.querySelector('.btn-green'); 
const exitModal = document.getElementById('exitModal');

// Cerrar el modal al hacer clic en el botón "Salir"
exitModal.addEventListener('click', () => {
    alert('Has salido de la página');
    window.location.href = 'index.html'; 
});

// Abrir el modal
openModal.addEventListener('click', () => {
    modal.style.display = 'flex';

    // Restablecer el título del modal
    document.querySelector('.modal-content h2').innerText = 'Add User';

    // Asegurar que el botón "Iniciar Sesión" esté visible y habilitado
    submitButton.style.display = 'inline-block';
    submitButton.disabled = false;

    // Limpiar el formulario
    document.querySelector('form').reset();
});

// Cerrar el modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Función para registrar usuario
function Registrousuario() {
    // Obtener valores de los inputs
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const startDate = document.getElementById('startDate').value;

    // Validar que no estén vacíos
    if (!name || !age || !city || !email || !phone || !address || !startDate) {
        alert('All fields are required!');
        return;
    }

    // Revisar si estamos editando un registro existente
    const editingRow = document.querySelector('tr.editing');
    if (editingRow) {
        // Actualizar la fila con los nuevos datos
        const cells = editingRow.querySelectorAll('td');
        cells[0].innerText = name;
        cells[1].innerText = age;
        cells[2].innerText = city;
        cells[3].innerText = email;
        cells[4].innerText = phone;
        cells[5].innerText = address;
        cells[6].innerText = startDate;

        // Quitar la clase de edición
        editingRow.classList.remove('editing');
    } else {
        // Crear fila nueva en la tabla
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${age}</td>
            <td>${city}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>${address}</td>
            <td>${startDate}</td>
            <td>
                <button class="btn-edit" onclick="editRow(this)">Edit</button>
                <button class="btn-delete" onclick="deleteRow(this)">Delete</button>
                <button class="btn-view" onclick="viewRow(this)">View</button>
            </td>
        `;

        // Agregar la nueva fila al cuerpo de la tabla
        userTableBody.appendChild(newRow);
    }

    // Limpiar el formulario
    document.querySelector('form').reset();

    // Cerrar el modal
    modal.style.display = 'none';
}

// Función para eliminar una fila
function deleteRow(button) {
    const row = button.parentElement.parentElement;
    userTableBody.removeChild(row);
}

// Función para editar una fila
function editRow(button) {
    const row = button.parentElement.parentElement;
    const cells = row.querySelectorAll('td');

    // Rellenar el formulario con los datos de la fila
    document.getElementById('name').value = cells[0].innerText;
    document.getElementById('age').value = cells[1].innerText;
    document.getElementById('city').value = cells[2].innerText;
    document.getElementById('email').value = cells[3].innerText;
    document.getElementById('phone').value = cells[4].innerText;
    document.getElementById('address').value = cells[5].innerText;
    document.getElementById('startDate').value = cells[6].innerText;

    

    // Asegurar que el botón "Iniciar Sesión" esté visible y habilitado
    submitButton.style.display = 'inline-block';
    submitButton.disabled = false;
}

// Función para ver una fila
function viewRow(button) {
    const row = button.parentElement.parentElement;
    const cells = row.querySelectorAll('td');

    // Rellenar el formulario con los datos de la fila
    document.getElementById('name').value = cells[0].innerText;
    document.getElementById('age').value = cells[1].innerText;
    document.getElementById('city').value = cells[2].innerText;
    document.getElementById('email').value = cells[3].innerText;
    document.getElementById('phone').value = cells[4].innerText;
    document.getElementById('address').value = cells[5].innerText;
    document.getElementById('startDate').value = cells[6].innerText;

    // Cambiar el título del modal a "View User Data"
    document.querySelector('.modal-content h2').innerText = 'View User Data';

    // Ocultar el botón de "Iniciar Sesión"
    submitButton.style.display = 'none';

    // Abrir el modal
    modal.style.display = 'flex';
}
