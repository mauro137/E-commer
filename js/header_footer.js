class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` 
      <header class="header">
      <img
        class="header__logo"
        src="estilos/HEADER/recursos/logo_alura.svg"
        alt="Logo alura"
      />
      <button class="header__btn__login">
        <a href="/seccion-login.html" target="_blank">
          <span class="btnLogin__txt"> Login </span></a
        >
      </button>
      <div class="buscador"> 
      <input type="text" class="buscador__input" placeholder="¿Que deseas hacer?">
      <img
        class="lupa__logo"
        src="estilos/HEADER/recursos/lupa.svg"
        alt="Lupa buscador"
      />
      </div>
    </header> 
          `;
  }
}
customElements.define("my-header", MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` 
      <footer class="footer">
      <section class="seccion__contacto">
        <div class="footer__info__frecuente">
          <div class="info__frecuente__links">
          <div class="footer__contenedor__logo">
          <img
            class="footer__logo__alura"
            src="estilos/HEADER/recursos/logo_alura.svg"
            alt="logo alura"
          />
        </div>  
            <a
              class="info__links-links"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              >Quienes somos</a
            >
            <a
              class="info__links-links"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              >Politica de privacidad</a
            >
            <a
              class="info__links-links"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              >Programa de fidelidad</a
            >
            <a
              class="info__links-links"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              >Nuestras tiendas</a
            >
            <a
              class="info__links-links"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              >Quiero ser franquiciado</a
            >
            <a
              class="info__links-links"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              >Anuncie aqui</a
            >
          </div>
        <form class="contacto__form">
          <span class="producto__precio">Habla con nosotros</span>
          <input
            type="text"
            name="contacto__nombre"
            id="contacto__nombre"
            placeholder="Nombre"
            spellcheck="false"
            autocomplete="off"
          />
          <textarea
            name="contacto__mensaje"
            id="contacto__mensaje"
            cols="20"
            rows="4"
            placeholder="Escribe un mensaje"
          ></textarea>
          <button class="btn__promocion" type="submit">
            <span class="btn__texto"> Enviar Mensaje </span>
          </button>
        </form>
        </div>
      </section>
      <section class="seccion__rodapie">
        <div class="web__autor">Desarrollado por Mauro Lizarriaga</div>
      </section>
    </footer>
      `;
  }
}
customElements.define("my-footer", MyFooter);
