import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import imagenproyecto from "../assets/img/imagenproyecto.png";

const Login = () => {
  const [userData, setUserData] = useState({
    UserName: '',
    Password: '',
  });

  const [loginError, setLoginError] = useState('');
  const [redirectMenu, setRedirectMenu] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://localhost:7028/api/authentication/login', userData);

      console.log('Acceso éxitoso:', response.data);

      setTokens(response.data.accessToken, response.data.refreshToken, response.data.role);

    } catch (error) {
      console.error('Error durante el acceso:', error);

      if (error.response && error.response.status === 401) {
        setLoginError('Usuario o contraseña incorrectos');
      } else {
        setLoginError('Hubo un error al intentar iniciar sesión. Por favor, inténtalo de nuevo.');
      }
    }
  };

  // Función para establecer tokens y rol en el estado local o localStorage
  const setTokens = (accessToken, refreshToken, role) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('role', role);
    setRedirectMenu(true);
  };

  if (redirectMenu) {
    const role = localStorage.getItem('role');
    switch (role) {
      case 'Administrador':
        return <Navigate to="/IndexAdmin" />;
      case 'Cajero':
        return <Navigate to="/IndexCaja" />;
      case 'Bodega':
        return <Navigate to="/IndexBodega" />;
      default:
        return <Navigate to="/" />;
    }
  }

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
                            <h2 style={{color: '#0d6efd'}}>Iniciar sesión</h2>
                            <p>Ingresa usuario y contraseña.&nbsp;</p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center" style={{paddingTop: '0px',marginTop: '-30px'}}>
                        <div className="col-md-6 col-xl-4">
                            <div className="card mb-5">
                                <div className="card-body d-flex flex-column align-items-center">
                                  <div className="bs-icon-xl bs-icon-circle text-primary bs-icon my-4">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 16 16"><g fill="#0d6efd"><path d="M11 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0"/><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/></g></svg></div>
                                  <Form onSubmit={handleLogin}>
                                  <div className='mb-3'>

                                  <Form.Group controlId="formUserName">
                                  <Form.Label>Usuario:</Form.Label>
                                  <Form.Control
                                      type="text"
                                      name="UserName"
                                      value={userData.UserName}
                                      onChange={handleInputChange}
                                      required
                                    />
                                  </Form.Group></div>

                                    <div className='mb-3'>
                                    <Form.Group controlId="formPassword">
                                    <Form.Label>Contraseña:</Form.Label>
                                    <Form.Control
                                     type="password"
                                       name="Password"
                                        value={userData.Password}
                                       onChange={handleInputChange}
                                      required
                                     />
                                     </Form.Group>
                                     </div>
                                     <div className="mb-3">
                                   <Button style={{marginRight:'10px'}} variant="primary" type="submit" className="w-100">Loggin</Button>
                                   </div>{/* <Link to="/refresh-token" className="ml-2">Refrescar Token</Link> */}
                                    {loginError && <Alert variant="danger" className="mt-3">{loginError}</Alert>}
                                    
                                  </Form>
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
                        <p className="text-muted my-2" style={{color:' var(--bs-gray-100)'}}>Copyright&nbsp;© 2023 Brand</p>
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
};

export default Login;