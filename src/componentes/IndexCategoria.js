import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alerta } from '../function';
import imagenproyecto from "../assets/img/imagenproyecto.png";
import Camara from "../assets/img/Camara.png";
import Computador from "../assets/img/Computador.jpg";
import Celular from "../assets/img/Celular.avif";
import relojes from "../assets/img/relojes.jpeg";
import TecladoMause from "../assets/img/TecladoMause.png";
import clipboardimage4 from "../assets/img/clipboardimage4.png";

 
const IndexCategoria = () => {
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
                    <li className="nav-item" data-bss-hover-animate="flash" style={{ color: 'var(--bs-black)', fontWeight: 'normal' }}><a className="nav-link" data-bss-hover-animate="flash" href="./Registro" style={{ color: 'var(--bs-black)', fontWeight: 'normal', fontFamily: 'ABeeZee, sans-serif' , fontSize: '16px'}}>Registrarse</a></li>
                    <li className="nav-item" data-bss-hover-animate="flash" style={{ color: 'var(--bs-black)', fontWeight: 'normal' }}><a className="nav-link" data-bss-hover-animate="flash" href="./Iniciosesion" style={{ color: 'var(--bs-black)', fontWeight: 'normal', fontFamily: 'ABeeZee, sans-serif' , fontSize: '16px'}}>Iniciar sesion</a></li>
              </ul>
              </div>
              </div>
            </div>
            </nav>
        </header>
        <div className="container py-4 py-xl-5">
            <div className="row mb-5">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <h2 style={{color: 'var(--bs-link-hover-color)'}}>Categoria</h2>
                    <p></p>
                </div>
            </div>
            <div className="row gy-4 row-cols-1 row-cols-md-2" style={{paddingBottom: '42px'}}>
                <div className="col">
                    <div className="d-flex flex-column flex-lg-row">
                        <div className="w-100">
                        <img className="mx-auto d-block fit-cover" src={Celular} alt="Celular" style={{width: '261px',  height:'226px'}}/></div>
                        <div className="py-4 py-lg-0 px-lg-4">
                            <h4>Teléfonos y dispositivos móviles</h4>
                            <p>Smartphones, teléfonos básicos, tablets y accesorios relacionados.</p><a className="bounce animated" href="./CategoriaTelefonos">Conocer más&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-right">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                </svg></a>
                        </div>
                    </div><a className="btn btn-primary mx-auto" role="button" href="./Carrito" style={{color: 'var(--bs-black)', background: '#ffffff80', borderStyle: 'none'}}></a><a href="./Carrito" style={{paddingRight: '0px', marginRight: '-1px',marginLeft: '0px',paddingLeft: '0px'}}></a>
                </div>
                <div className="col">
                    <div className="d-flex flex-column flex-lg-row">
                        <div className="w-100" style={{textAlign: 'center'}}>
                        <img className="rounded img-fluid d-xl-flex mx-auto justify-content-xl-end align-items-xl-start d-block fit-cover" src={Computador} alt='Computador' width="243" height="243" style={{width: '243px'}}/></div>
                        <div className="py-4 py-lg-0 px-lg-4">
                            <h4>Computadoras y portátiles</h4>
                            <p>computadoras de escritorio, laptops, ultrabooks y sus componentes.</p><a className="bounce animated" href="./CategoriaComputadores">Conocer más&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-arrow-right">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                </svg></a>
                        </div>
                    </div><a className="btn btn-primary mx-auto" role="button" href="./Carrito" style={{color: 'var(--bs-black)', background: '#ffffff80', borderStyle: 'none'}}></a>
                </div>
                <div className="col">
                    <div className="d-flex flex-column flex-lg-row">
                        <div className="w-100"><img className="rounded img-fluid mx-auto d-block fit-cover" src={relojes} alt='relojes' width="188" height="174" style={{paddingTop: '24px'}}/></div>
                        <div className="py-4 py-lg-0 px-lg-4">
                            <h4>Dispositivos wearables</h4>
                            <p>Relojes inteligentes, pulseras de actividad, auriculares inalámbricos y otros dispositivos portátiles con funcionalidades avanzadas</p><a className="bounce animated" href="./CategoriaWeareables">Conocer más&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-right">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                </svg></a>
                        </div>
                    </div><a className="btn btn-primary mx-auto" role="button" href="./Carrito" style={{color: 'var(--bs-black)',background: '#ffffff80',borderStyle: 'none'}}></a><a href="./Carrito"></a>
                </div>
                <div className="col">
                    <div className="d-flex flex-column flex-lg-row">
                        <div className="w-100"><img src={Camara} width="201" height="198" style={{width: '201px',height: '198px'}}/></div>
                        <div className="py-4 py-lg-0 px-lg-4" style={{marginBottom: '-44px'}}>
                            <h4>Equipos de fotografía y video</h4>
                            <p>Cámaras DSLR, cámaras sin espejo, videocámaras, drones y accesorios asociados.
                            </p><a className="bounce animated" href="./CategoriaFotografia">Conocer más&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-right">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                </svg></a>
                        </div>
                    </div><a href="./Carrito"></a><a className="btn btn-primary mx-auto" role="button" href="./Carrito" style={{color: 'var(--bs-black)', background: '#ffffff80', borderStyle: 'none'}}></a>
                </div>
                <div className="col">
                    <div className="d-flex flex-column flex-lg-row">
                        <div className="w-100"><img src={TecladoMause} width="206" height="175"/></div>
                        <div className="py-4 py-lg-0 px-lg-4" style={{marginBottom: '-44px'}}>
                            <h4>Teclados y mouse para computadores</h4>
                            <p>Accesorios perfectos para mejorar tu experiencia de escritura y navegación, brindándote comodidad y precisión en cada movimiento.</p><a className="bounce animated" href="./CategoriaTeclado">Conocer más&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-arrow-right">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                </svg></a>
                        </div>
                    </div><a href="./Carrito"></a><a class="btn btn-primary mx-auto" role="button" href="./Carrito" style={{color: 'var(--bs-black)', background: '#ffffff80', borderStyle: 'none'}}></a>
                </div>
                <div className="col">
                    <div className="d-flex flex-column flex-lg-row">
                        <div className="w-100"><img src={clipboardimage4} width="217" height="170"/></div>
                        <div className="py-4 py-lg-0 px-lg-4" style={{marginBottom: '-44px'}}>
                            <h4>Cargadores, Cables, audífonos y más.</h4>
                            <p>Amplia variedad de cargadores, cables, audífonos y muchos otros accesorios indispensables</p><a className="bounce animated" href="./CategoriaCargadores">Conocer más&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-arrow-right">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                </svg></a>
                        </div>
                    </div><a href="./Carrito"></a><a className="btn btn-primary mx-auto" role="button" href="../Carrito-1.html" style={{color: 'var(--bs-black)', background: '#ffffff80',borderStyle: 'none'}}></a>
                </div>
            </div><a class="btn btn-primary" role="button" style={{marginTight: '288px',paddingRight: '15px',paddingLeft: '13px', marginLeft: '33px'}} href="./">Atrás</a>
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
export default IndexCategoria;