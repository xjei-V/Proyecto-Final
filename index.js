function Usuario() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    const data = JSON.parse(localStorage.getItem('user')); // Obtiene los datos registrados

    if (data && data.email === email && data.password === password) {
        // Guarda el usuario actual en el localStorage
        localStorage.setItem('loggedUser', JSON.stringify(data));

        alert(`Bienvenido ${data.name}`); // Usa el nombre del usuario
        window.location.replace('modal.html'); // Redirige al usuario a la página modal
    } else {
        alert("Usuario o contraseña inválidos...");
    }
}
