const productoForm = document.querySelector(".agregar__producto__form");
const nombre = document.querySelector('#form__input__nombre');
const precio = document.querySelector('#form__input__precio');
const descripcion = document.querySelector('#producto__descripcion');
const inputs = document.querySelectorAll(".agregar__producto__form input, textarea");
const textarea = document.querySelector(".agregar__producto");
const btnSubmit = document.querySelector(".login__button--producto");

const expresiones = {
    nombre:  /^([A-Za-z]){1,20}$/,
    precio: /[^a-z ]\ *([.0-9])*\d/g,
    descripcion: /^([A-Za-z0-9!#%$+-?=*&".,]){1,150}$/,
  };

  
const campos = {
  nombre: false,
  precio: false,
  descripcion: false,
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
  console.log(campoBox)
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
e.preventDefault();
if(campos.nombre && campos.precio && campos.descripcion) {
  alert("Producto Agregado con exito");
}
else{
  alert("Falló la carga del producto, revisar formulario");
}

});