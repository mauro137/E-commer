const contactoForm = document.querySelector(".contacto__form");
const inputsContacto = document.querySelectorAll(".contacto__form input, textarea");
const contactoNombre = document.getElementById("contacto__nombre");
const mensaje = document.getElementById("contacto__mensaje");
const btnContacto = document.querySelector("#btn__contacto");

const expresionesContacto = {
  nombre: /^([A-Za-z ]){1,40}$/,
  mensaje: /^([A-Za-z0-9!#%$+-?=*&".,]){1,120}$/,
};

const camposContacto = {  
  nombre: false,
  mensaje: false,
};

const validarContacto = (e) => {
  switch (e.target.name) {
    case `contacto__nombre`:
      validarcampoContacto(expresionesContacto.nombre, e.target, "nombre");
      break;
    case `contacto__mensaje`:
      validarcampoContacto(expresionesContacto.mensaje, e.target, "mensaje");
      break;
  }
};

const validarcampoContacto = (expresion, input, campo) => {
  let campoBox = document.getElementById(`contacto__${campo}`);
  if (expresion.test(input.value)) {
    campoBox.classList.remove("formulario__incorrecto");
    campoBox.classList.add("formulario__correcto");
    camposContacto[campo] = true;
  } else {
    campoBox.classList.remove("formulario__correcto");
    campoBox.classList.add("formulario__incorrecto");
    camposContacto[campo] = false;
  }
};
inputsContacto.forEach((textarea) => {
  textarea.addEventListener("keyup", validarContacto);
  textarea.addEventListener("blur", validarContacto);
});

inputsContacto.forEach((input) => {
  input.addEventListener("keyup", validarContacto);
  input.addEventListener("blur", validarContacto);
});

 const enviarMensaje = btnContacto.addEventListener("click", (e) => {
  let msgExito = document.querySelector(".contacto__exito");
  let msgError = document.querySelector(".contacto__error");
  e.preventDefault();
if (camposContacto.nombre && camposContacto.mensaje) {
    msgError.classList.remove("contacto__error--mostrar");
    msgExito.classList.add("contacto__exito--mostrar");
    setTimeout(() => {
      msgExito.classList.remove("contacto__exito--mostrar");
    }, 5000);
    contactoForm.reset();
    document
      .querySelectorAll(".formulario__correcto")
      .forEach((campo_valido) => {
        campo_valido.classList.remove("formulario__correcto");
      });
  } else {
    msgExito.classList.remove("contacto__exito--mostrar");
    msgError.classList.add("contacto__error--mostrar");
    setTimeout(() => {
      msgError.classList.remove("contacto__error--mostrar");
    }, 5000);
  }
}); 

