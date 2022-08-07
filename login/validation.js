const productoForm = document.querySelector(".agregar__producto__form");
const nombre = document.querySelector("#form__input__nombre");
const precio = document.querySelector("#form__input__precio");
const descripcion = document.querySelector("#producto__descripcion");
const inputs = document.querySelectorAll(
  ".agregar__producto__form input, textarea"
);
const textarea = document.querySelector(".agregar__producto");
const btnSubmit = document.querySelector(".login__button--producto");

const expresiones = {
  nombre: /^([A-Za-z ]){1,20}$/,
  precio: /[^a-z ]\ *([.0-9])*\d/g,
  descripcion: /^([A-Za-z0-9!#%$+-? =*&".,]){1,150}$/,
};

const campos = {
  nombre: false,
  precio: false,
  descripcion: false,
  categoria: false,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "form__input__nombre":
      validarCampo(expresiones.nombre, e.target, "nombre");
      break;
    case "form__input__precio":
      validarCampo(expresiones.precio, e.target, "precio");
      break;
    case "producto__descripcion":
      validarCampo(expresiones.descripcion, e.target, "descripcion");
      break;
  }
};

const validarCampo = (expresion, input, campo) => {
  let campoBox = document.getElementById(`${campo}`);
  console.log(campoBox);
  if (expresion.test(input.value)) {
    campoBox.classList.remove("formulario__incorrecto");
    campoBox.classList.add("formulario__correcto");
    campos[campo] = true;
  } else {
    campoBox.classList.remove("formulario__correcto");
    campoBox.classList.add("formulario__incorrecto");
    campos[campo] = false;
  }
};

textarea.addEventListener("keyup", validarFormulario);
textarea.addEventListener("blur", validarFormulario);

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

productoForm.addEventListener("submit", (e) => {
  let msgExito = document.querySelector(".form__exito");
  let msgError = document.querySelector(".form__error");
  e.preventDefault();
  if (campos.nombre && campos.precio && campos.descripcion) {
    msgExito.classList.add("form__exito--mostrar");

    setTimeout(() => {
      msgExito.classList.remove("form__exito--mostrar");
    }, 5000);
    productoForm.reset();
    document
      .querySelectorAll(".formulario__correcto")
      .forEach((campo_valido) => {
        campo_valido.classList.remove("formulario__correcto");
      });
  } else {
   msgError.classList.add('form__error--mostrar');
   setTimeout(() => {
    msgError.classList.remove("form__error--mostrar");
  }, 5000);
  }
});
