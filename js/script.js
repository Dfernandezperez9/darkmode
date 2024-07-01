const BODY_MASTER_DIV = document.querySelector('.bodyMasterDiv');
const HEADER_MASTER_DIV = document.querySelector('.headerMasterDiv');
const TITULO_MASTER_DIV = document.querySelector('.tituloMasterDiv');
const PARRAFO_TITULO_MASTER_DIV = document.querySelector('.parrafoTituloMasterDiv');
const BOTON_MASTER_DIV = document.querySelector('.botonMasterDiv');
const BOTON_MASTER_DIV1 = document.querySelector('.botonMasterDiv1');
const PARRAFO_BOTON_MASTER_DIV1 = document.querySelector('.parrafoBotonMasterDiv1');
const BOTON_MASTER_DIV2 = document.querySelector('.botonMasterDiv2');
const BOTON_MASTER_DIV2_1 = document.querySelector('.botonMasterDiv2_1');
const IMAGEN_MAIN_MASTER_DIV2_1 = document.querySelector('.imagenMainMasterDiv2_1');
const MAIN_MASTER_DIV = document.querySelector('.mainMasterDiv');
const IMAGEN_MASTER_DIV = document.querySelector('.imagenMainMasterDiv');
const FOOTER_MASTER_DIV = document.querySelector('.footerMasterDiv');
const H1_FOOTER_MASTER_DIV = document.querySelector('.h1FooterMasterDiv');
const PARRAFO_FOOTER_MASTER_DIV = document.querySelector('.parrafoFooterMasterDiv');
const PARRAFO_BOTON_MASTER_DIV2 = document.querySelector('parrafoBotonMasterDiv2');


BOTON_MASTER_DIV2_1.addEventListener("click", () => {
    PARRAFO_TITULO_MASTER_DIV.classList.toggle('parrafoDarkMode');
    PARRAFO_BOTON_MASTER_DIV1.classList.toggle('parrafoDarkMode');
    PARRAFO_BOTON_MASTER_DIV1.classList.toggle('hidden');
    BODY_MASTER_DIV.classList.toggle('bodyDarkMode');
    H1_FOOTER_MASTER_DIV.classList.toggle('parrafoDarkMode');
    PARRAFO_FOOTER_MASTER_DIV.classList.toggle('parrafoDarkMode');
    BOTON_MASTER_DIV2_1.classList.toggle('botonDarkMode');
})