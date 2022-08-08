const contactoForm = document.querySelector(".contacto__form");
const inputsContacto = document.querySelectorAll(".contacto__form input, textarea");
const nombre = document.getElementById("contacto__nombre");
const mensaje = document.getElementById("contacto__mensaje");

const expresionesContacto = {
  nombre: /^([A-Za-z]){1,40}$/,
  mensaje: /^([A-Za-z0-9!#%$+-?=*&".,]){1,120}$/,
};

const camposContacto = {
  nombre: false,
  mensaje: false,
};

const validarContacto = (e) => {
  console.log(e.target.name)
  switch (e.target.name) {
    case `contacto__nombre`:
      validarcampoContacto(expresionesContacto.nombre, e.target,"nombre");
      break;
    case `contacto__mensaje`:
      validarcampoContacto(expresionesContacto.mensaje,e.target,"mensaje");
      break;
  }
};

const validarcampoContacto = (expresion, input, campo) => {
console.log(campo)
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

/*  contactoForm.addEventListener("submit", (e) => {
  let msgExito = document.querySelector("#contacto__nombre");
  let msgError = document.querySelector("#contacto__mensaje");
  e.preventDefault();
  if (camposContacto.nombre && camposContacto.mensaje) {
    msgExito.classList.add("form__exito--mostrar");
    setTimeout(() => {
      msgExito.classList.remove("form__exito--mostrar");
    }, 5000);
    contactoForm.reset();
    document
      .querySelectorAll(".formulario__correcto")
      .forEach((campo_valido) => {
        campo_valido.classList.remove("formulario__correcto");
      });
  } else {
    msgError.classList.add("form__error--mostrar");
    setTimeout(() => {
      msgError.classList.remove("form__error--mostrar");
    }, 5000);
  }
});  */


