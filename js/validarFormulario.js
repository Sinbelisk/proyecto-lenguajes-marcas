const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    if (!validarFormulario()) {
        e.preventDefault();
    }
});

function validarFormulario() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const fechaNac = document.getElementById("fecha_nacimiento").value;
    const fullName = document.getElementById("fullname").value;
    const experiencia = document.querySelector('input[name="experience"]:checked');

    let correcto = true;

    if (!validarNombreDeUsuario(username)) {
        alert(
            "Error: el nombre de usuario debe ser entre 3 y 15 caracteres de longitud, no puede tener carácteres en blanco y solo puede contener el simbolo _"
        );
        correcto = false;
    }

    if (!validarCorreoElectronico(email)) {
        alert("ERROR: Formato de correo electrónico incorrecto.");
        correcto = false;
    }

    if (!validarFechaDeNacimiento(fechaNac)) {
        alert("ERROR: debes ser mayor de 18 años");
        correcto = false;
    }

    if (!validarNombre(fullName)){
        alert("ERROR: Formato de nombre incorrecto");
        correcto = false;
    }

    if (!experiencia) {
        alert("ERROR: Por favor, selecciona si tienes experiencia.");
        correcto = false;
    }
    
    return correcto;
}

function validarNombreDeUsuario(username) {
    // El nombre tiene entre 3 y 15 caracteres sin espacios en blanco, puede contener numeros y el simbolo especial _
    const userRegEx = /^[a-zA-Z0-9_]{3,15}$/;
    return userRegEx.test(username);
}

function validarCorreoElectronico(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

function validarFechaDeNacimiento(fecha) {
if (fecha == null) return false;

    const fechaActual = new Date();
    const fechaUsuario = new Date(fecha);

    if (fechaActual < fechaUsuario) {
        alert("ERROR: La fecha no puede ser en el futuro")
        return false;
    }
    
    const edad = fechaActual.getFullYear() - fechaUsuario.getFullYear();
    const mes = fechaActual.getMonth() - fechaUsuario.getMonth();

    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaUsuario.getDate())) {
        edad--;
    }

    return edad >= 18;
}

function validarNombre(nombre){
    // Comprueba que no posea numeros tanto el nombre como el apellido
    const nombreRegEx = /^[^\d]+(?: [^\d]+)*$/;
    return nombreRegEx.test(nombre);
}
