function Registrousuario(){
    const user={
        usuarname:document.getElementById("username").value,
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,

    }

    localStorage.setItem('user',JSON.stringify(user))
    console.log(user)
    
    localStorage.setItem('user', JSON.stringify(user))
    console.log(user)
    alert("registrado correctamente")
    window.location.href='index.html'
}
