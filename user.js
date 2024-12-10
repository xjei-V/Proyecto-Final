const titulo = document.getElementById("bienvenido");

// Obtén los datos del usuario que inició sesión
const data = JSON.parse(localStorage.getItem('user'))
/* let nombre = document.getElementById('name') */
titulo.innerHTML = "Bienvenid@" + `${data.name}`

