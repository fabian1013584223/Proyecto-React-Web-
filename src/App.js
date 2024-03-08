import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from './componentes/Index'
import Nosotros from './componentes/Nosotros'
import ShowStock from './componentes/ShowStock';
import ShowProductos from './componentes/ShowProductos';
import ShowCategorias from './componentes/ShowCategorias';
import Derechos from './componentes/Derechos';
import Iniciosesion from './componentes/Iniciosesion';
import Carrito from './componentes/Carrito';
import Administracion from './componentes/Administracion';
import TablaProductos from './componentes/TablaProductos';
import Registro from './componentes/Registro';
import IndexCategoria from './componentes/IndexCategoria';
import IndexDestacados from './componentes/IndexDestacados';
import IndexOfertas from './componentes/IndexOfertas';
import CategoriaTelefonos from './componentes/CategoriaTelefonos';
import CategoriaComputadores from './componentes/CategoriaComputadores';
import CategoriaCargadores from './componentes/CategoriaCargadores';
import CategoriaTeclado from './componentes/CategoriaTeclado';
import CategoriaFotografia from './componentes/CategoriaFotografia';
import CategoriaWeareables from './componentes/CategoriaWeareables';
import DestacadosEdiciones from './componentes/DestacadosEdiciones';
import DestacadosLanzamientos from './componentes/DestacadosLanzamientos';
import DestacadosNovedades from './componentes/DestacadosNovedades';
import DestacadosBundles from './componentes/DestacadosBundles';
import DestacadosRecomendaciones from './componentes/DestacadosRecomendaciones';
import DestacadosVendidos from './componentes/DestacadosVendidos';
import ShowCliente from './componentes/ShowCliente';
import ShowFactura from './componentes/ShowFactura';
import ShowProveedor from './componentes/ShowProveedor';
import ShowUsuarios from './componentes/ShowUsuarios';
import RecuperarContraseña from './componentes/RecuperarContraseña';
import IndexAdmin from './componentes/IndexAdmin';
import ShowFacturaCliente from './componentes/ShowFacturaCliente'; 
import IndexFacturas from './componentes/IndexFacturas'; 
import ShowPrecios from './componentes/ShowPrecios';
import ShowDetalleFacturaCliente from './componentes/ShowDetalleFacturaCliente';
import ShowDetalleFacturaProveedor from './componentes/ShowDetalleFacturaProveedor';
import ShowMetodoPago from './componentes/ShowMetodoPago';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Index/>}></Route>
        <Route path='/IndexCategoria' exact element={<IndexCategoria/>}></Route>
        <Route path='/IndexDestacados' exact element={<IndexDestacados/>}></Route>
        <Route path='/IndexOfertas' exact element={<IndexOfertas/>}></Route>
        <Route path='/Nosotros' exact element={<Nosotros/>}></Route>
        <Route path='/Derechos' exact element={<Derechos/>}></Route>
        <Route path='/Stock' exact element={<ShowStock/>}></Route>
        <Route path='/productos' exact element={<ShowProductos/>}></Route>
        <Route path='/categorias' exact element={<ShowCategorias/>}></Route>
        <Route path='/Administracion' exact element={<Administracion/>}></Route>
        <Route path='/TablaProductos' exact element={<TablaProductos/>}></Route>
        <Route path='/Registro' exact element={<Registro/>}></Route>
        <Route path='/Iniciosesion' exact element={<Iniciosesion/>}></Route>
        <Route path='/Carrito' exact element={<Carrito/>}></Route>
        <Route path='/CategoriaTelefonos' exact element={<CategoriaTelefonos/>}></Route>
        <Route path='/CategoriaComputadores' exact element={<CategoriaComputadores/>}></Route>
        <Route path='/CategoriaFotografia' exact element={<CategoriaFotografia/>}></Route>
        <Route path='/CategoriaWeareables' exact element={<CategoriaWeareables/>}></Route>
        <Route path='/CategoriaCargadores' exact element={<CategoriaCargadores/>}></Route>
        <Route path='/CategoriaTeclado' exact element={<CategoriaTeclado/>}></Route>
        <Route path='/DestacadosEdiciones' exact element={<DestacadosEdiciones/>}></Route>
        <Route path='/DestacadosNovedades' exact element={<DestacadosNovedades/>}></Route>
        <Route path='/DestacadosLanzamientos' exact element={<DestacadosLanzamientos/>}></Route>
        <Route path='/DestacadosBundles' exact element={<DestacadosBundles/>}></Route>
        <Route path='/DestacadosVendidos' exact element={<DestacadosVendidos/>}></Route>
        <Route path='/DestacadosRecomendaciones' exact element={<DestacadosRecomendaciones/>}></Route>
        <Route path='/Cliente' exact element={<ShowCliente/>}></Route>
        <Route path='/Factura' exact element={<ShowFactura/>}></Route>
        <Route path='/Proveedor' exact element={<ShowProveedor/>}></Route>
        <Route path='/Usuarios' exact element={<ShowUsuarios/>}></Route>
        <Route path='/RecuperarContraseña' exact element={<RecuperarContraseña/>}></Route>
        <Route path='/IndexAdmin' exact element={<IndexAdmin/>}></Route>
        <Route path='/FacturaCliente' exact element= {<ShowFacturaCliente/>}></Route>
        <Route path='/IndexFacturas' exact element= {<IndexFacturas/>}></Route>
        <Route path='/Precios' exact element={<ShowPrecios/>}></Route>
        <Route path='/DetalleFacturaCliente' exact element={<ShowDetalleFacturaCliente/>}></Route>
        <Route path='/DetalleFacturaProveedor' exact element={<ShowDetalleFacturaProveedor/>}></Route>
        <Route path='/MetodoPago' exact element={<ShowMetodoPago/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;