class Usuario {
  #email = null;
  #password = null;

  set email(valor) {
    if (valor instanceof Usuario) this.#email = valor;
  }
  get email() {
    return this.#email;
  }

  set password(valor) {
    if (valor instanceof Usuario) this.#password = valor;
  }
  get password() {
    return this.#password;
  }

  constructor(email, password) {
    this.#email = email;
    this.#password = password;
  }
}

/* Cuentas Admin */

const usuario1 = new Usuario("admin@alura.com", "admin");
const usuario2 = new Usuario("author@alura.com", "author");

console.log(usuario2.email, usuario2.password);
