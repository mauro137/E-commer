const productoForm = document.querySelector(".agregar__producto__form");
const nombre = document.querySelector("#form__input__nombre");
const precio = document.querySelector("#form__input__precio");
const descripcion = document.querySelector("#form__input__descripcion");
const categoria = document.querySelector("#form__input__categoria");
const imagen = document.querySelector("#form__input__imagen");
const inputs = document.querySelectorAll(
  ".agregar__producto__form input, textarea"
);

const textarea = document.querySelector(".agregar__producto");
const btnSubmit = document.querySelector(".login__button--producto");
const expresiones = {
  nombre: /^([A-Za-z ]){1,20}$/,
  precio: / *([.0-9])*\d/,
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
    case `form__input__nombre`:
      validarCampo(expresiones.nombre, e.target, "nombre");
      break;
    case `form__input__precio`:
      validarCampo(expresiones.precio, e.target, "precio");
      break;
    case `form__input__descripcion`:
      validarCampo(expresiones.descripcion, e.target, "descripcion");
      break;
  }
};

const validarCampo = (expresion, input, campo) => {
  let campoBox = document.getElementById(`form__input__${campo}`);
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

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

const addProduct = btnSubmit.addEventListener("click", (e) => {
  let msgExito = document.querySelector(`.form__exito`);
  let msgError = document.querySelector(`.form__error`);
  e.preventDefault();
  if (campos.nombre && campos.precio && campos.descripcion) {
    createProduct();
    msgError.classList.remove(`form__error--mostrar`);
    msgExito.classList.add(`form__exito--mostrar`);
    setTimeout(() => {
      msgExito.classList.remove(`form__exito--mostrar`);
    }, 3000);  
    productoForm.reset();
    document
      .querySelectorAll(`.formulario__correcto`)
      .forEach((campo_valido) => {
        campo_valido.classList.remove(`formulario__correcto`);
      });
  } else {
    msgExito.classList.remove(`form__exito--mostrar`);
    msgError.classList.add(`form__error--mostrar`);
    setTimeout(() => {
      msgError.classList.remove(`form__error--mostrar`);
    }, 3000);
  }
});

 const createProduct = () => {
  let categorieValue = categoria.value;
  let cardConteiner = document.querySelector('[data-section-star-wars]');
  let element = document.createElement('div');
  element.classList.add('tarjeta__producto');
  let imageValue = imagen.value;
  let nameValue = nombre.value;
  let priceValue = precio.value;
  let content = `<img
  class="tarjeta__imagen"
  src="${imageValue}"
  alt="${nameValue}"
 />
 <p class="producto__nombre"> ${nameValue} </p>
 <span class="producto__precio"> ${priceValue}</span>
 <a
  class="producto__link"
  href="http://"
  target="_blank"
  >Ver producto</a
 > `;
 element.innerHTML = content;
 cardConteiner.appendChild(element);
};
