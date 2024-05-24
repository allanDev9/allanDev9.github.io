const Password = document.getElementById("contraseña");

let nombre = "Allan";

if(contraseña > 1){
    alert("No se permiten numeros. ");
}else if(contraseña < 1){
    alert("No se permiten numeros. ");
}

Password.innerHTML = `<h2>${nombre}</h2>`;