import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alerta } from '../function';
import imagenproyecto from "../assets/img/imagenproyecto.png";
 
const Nosotros = () => {
  return (
    <div className="App">
        <header>
        <nav className="navbar navbar-expand-md py-3 navbar-light" style={{ marginTop: '15px', color: 'var(--bs-cyan)', background: 'var(--bs-link-hover-color)', height: '119px' }}>
        <div className="container">
          <img src={imagenproyecto} alt="imagenproyecto"width="100 "height="80"style={{ height: '80px' }} />
            <span className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon"></span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navcol-2">
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-2" style={{ color: 'var(--bs-black)', fontSize: '20px' }}>
            <div className="collapse navbar-collapse" id="navcol-2">
            <span className="navbar-text" style={{textAlign: 'center',
            paddingTop: '0px',    
            paddingBottom: '5px',   
             marginTop: '2px',
             fontSize: '20px',
             fontFamily: 'Anaheim, sans-serif',
             color: 'var(--bs-white)',  
              fontWeight: 'bold',   
               paddingLeft: '0px',    
            paddingRight: '55px',    marginLeft: '18px',marginRight: '-24px' }}>Servicio tecnológico&nbsp;</span>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a className="nav-link active" data-bss-hover-animate="flash" href="./" style={{ color: 'var(--bs-black)', fontWeight: 'normal', fontFamily: 'ABeeZee, sans-serif', fontSize: '16px' }}>Inicio</a></li>
                    <li className="nav-item" data-bss-hover-animate="flash" style={{ color: 'var(--bs-black)', fontWeight: 'normal' }}><a className="nav-link" data-bss-hover-animate="flash" href="./Derechos" style={{ color: 'var(--bs-black)', fontWeight: 'normal', fontFamily: 'ABeeZee, sans-serif' , fontSize: '16px'}}>Derechos</a></li>
                    <li className="nav-item" data-bss-hover-animate="flash" style={{ color: 'var(--bs-black)', fontWeight: 'normal' }}><a className="nav-link" data-bss-hover-animate="flash" href="./Nosotros" style={{ color: 'var(--bs-black)', fontWeight: 'normal', fontFamily: 'ABeeZee, sans-serif' , fontSize: '16px'}}>Nosotros</a></li>
                    <li className="nav-item" data-bss-hover-animate="flash" style={{ color: 'var(--bs-black)', fontWeight: 'normal' }}><a className="nav-link" data-bss-hover-animate="flash" href="./TablaProductos" style={{ color: 'var(--bs-black)', fontWeight: 'normal', fontFamily: 'ABeeZee, sans-serif' , fontSize: '16px'}}>Productos</a></li>
                    <li className="nav-item" data-bss-hover-animate="flash" style={{ color: 'var(--bs-black)', fontWeight: 'normal' }}><a className="nav-link" data-bss-hover-animate="flash" href="./Administracion" style={{ color: 'var(--bs-black)', fontWeight: 'normal', fontFamily: 'ABeeZee, sans-serif' , fontSize: '16px'}}>Administracion</a></li>
                    <li className="nav-item" data-bss-hover-animate="flash" style={{ color: 'var(--bs-black)', fontWeight: 'normal' }}><a className="nav-link" data-bss-hover-animate="flash" href="./IndexBodega" style={{ color: 'var(--bs-black)', fontWeight: 'normal', fontFamily: 'ABeeZee, sans-serif' , fontSize: '16px'}}>Bodega</a></li>
                    <li className="nav-item" data-bss-hover-animate="flash" style={{ color: 'var(--bs-black)', fontWeight: 'normal' }}><a className="nav-link" data-bss-hover-animate="flash" href="./IndexCaja" style={{ color: 'var(--bs-black)', fontWeight: 'normal', fontFamily: 'ABeeZee, sans-serif' , fontSize: '16px'}}>Caja</a></li>
                    <li className="nav-item" data-bss-hover-animate="flash" style={{ color: 'var(--bs-black)', fontWeight: 'normal' }}><a className="nav-link" data-bss-hover-animate="flash" href="./Registro" style={{ color: 'var(--bs-black)', fontWeight: 'normal', fontFamily: 'ABeeZee, sans-serif' , fontSize: '16px'}}>Registrarse</a></li>
                    <li className="nav-item" data-bss-hover-animate="flash" style={{ color: 'var(--bs-black)', fontWeight: 'normal' }}><a className="nav-link" data-bss-hover-animate="flash" href="./Iniciosesion" style={{ color: 'var(--bs-black)', fontWeight: 'normal', fontFamily: 'ABeeZee, sans-serif' , fontSize: '16px'}}>Iniciar sesion</a></li>
              </ul>
              </div>
              </div>
            </div>
            </nav>
        </header>
        <div className="container">
        <section className="py-4 py-xl-5" style={{paddingTop: '20px',marginTop: '21px'}}>
        <div className="container">
        <div className="row mb-5">
                        <div className="col-md-8 col-xl-6 text-center mx-auto">
                            <h2 style={{color: '#0d6efd'}}>Derechos</h2>
                        </div>
                            <p>Los derechos de autor están reservados por Diana Lorena Yepes Córdoba. Todo el contenido de este proyecto, desde su creación hasta la actualidad, ha sido desarrollado completamente por los mencionados anteriormente, quienes son aprendices del Sena del Centro de Electricidad, Electrónica y Telecomunicaciones, en el programa de Análisis y Desarrollo de Software (ADSO), Ficha 2558108 G2, año 2023.</p>
                    </div>
              <p className="text-center" style={{ fontSize: '20px' }}>"Descubre el poder de la tecnología en nuestras manos"&nbsp;</p>
            <div className="row mb-5">
              <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h2 style={{color: '#0d6efd'}}>Contacto</h2>
                  <p>Estamos pendientes de tus necesidades o peticiones.&nbsp;</p>
              </div>
            </div>
        <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="d-flex flex-column justify-content-center align-items-start h-100">
            <div className="d-flex align-items-center p-3">
      <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="27.79" height="28" viewBox="0 0 256 258"><defs><linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#0a58ca"/><stop offset="100%" stop-color="#0a58ca"/></linearGradient><linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="white"/><stop offset="100%" stop-color="white"/></linearGradient></defs><path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"/><path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"/><path fill="white" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561c0 15.67 11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716c-3.186-1.593-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"/></svg></div>
      <div className="px-2">
        <h6 className="mb-0">Whatsapp</h6>
        <p className="mb-0">+57 310 1234567</p>
      </div>
    </div>
   
    <div className="d-flex align-items-center p-3">
  <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon">
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><path fill="#0a58ca" d="M391 480c-19.52 0-46.94-7.06-88-30c-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21c4.95-2.23 12.45-5.6 21.95-2c6.34 2.38 12 7.25 20.86 16c18.17 17.92 43 57.83 52.16 77.43c6.15 13.21 10.22 21.93 10.23 31.71c0 11.45-5.76 20.28-12.75 29.81c-1.31 1.79-2.61 3.5-3.87 5.16c-7.61 10-9.28 12.89-8.18 18.05c2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47c1.48-1.13 3-2.3 4.59-3.47c10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18c18 9.08 59.11 33.59 77.14 51.78c8.77 8.84 13.66 14.48 16.05 20.81c3.6 9.53.21 17-2 22c-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 0 1 391 480"/></svg></div>
  <div className="px-2">
    <h6 className="mb-0">Teléfono</h6>
    <p className="mb-0">+57 310 1234567</p>
  </div>
</div>
<div className="d-flex align-items-center p-3">
  <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon">
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#0a58ca" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-6.54 4.09c-.65.41-1.47.41-2.12 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44"/></svg></div>
  <div className="px-2">
    <h6 className="mb-0">Email</h6>
    <p className="mb-0">info_tecnologia@sisi.com</p>
  </div>
</div>
<div className="d-flex flex-column justify-content-center align-items-start h-100">
<div className="d-flex align-items-center p-3">
<div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><circle cx="256" cy="192" r="32" fill="#0a58ca"/><path fill="#0a58ca" d="M256 32c-88.22 0-160 68.65-160 153c0 40.17 18.31 93.59 54.42 158.78c29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0 0 51.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153m0 224a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64"/></svg></div>
<div className="px-2">
  <h6 className="mb-0">Ubicación</h6>
  <p className="mb-0">Carrera 13 #64-10, local 302 Chapinero, Bogotá, Colombia</p>
  </div>
</div>
</div>
            </div>
            </div>
            </div>
        </div>
      </section>
</div>
    <footer>
        <footer className="text-center py-4" style={{background:' var(--bs-gray-200)'}}>
            <div className="container">
                <div className="row row-cols-1 row-cols-lg-3">
                    <div className="col">
                        <p className="text-muted my-2" style={{color: 'var(--bs-gray-100)'}}>Copyright&nbsp;© 2023 Brand</p>
                    </div>
                    <div className="col">
                        <ul className="list-inline my-2">
                            <li className="list-inline-item me-4">
                                <div className="bs-icon-circle bs-icon-primary bs-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-facebook">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                                    </svg></div>
                            </li>
                            <li className="list-inline-item me-4">
                                <div className="bs-icon-circle bs-icon-primary bs-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-twitter">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                                    </svg></div>
                            </li>
                            <li className="list-inline-item">
                                <div className="bs-icon-circle bs-icon-primary bs-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-instagram">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                                    </svg></div>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="list-inline my-2">
                            <li className="list-inline-item"><a className="link-secondary" href="#">Privacy Policy</a></li>
                            <li className="list-inline-item"><a className="link-secondary" href="#">Terms of Use</a></li>
                            </ul>
                    </div>
                </div>
            </div>
        </footer>
    </footer>
  </div>
  );
}
export default Nosotros;