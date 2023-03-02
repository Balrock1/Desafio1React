import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
  <div className="container">

  <Header titulo='Galería de imagenes con React'/>

  <div className="row">
  <Card titulo='Miami' imagen='https://images.pexels.com/photos/5507234/pexels-photo-5507234.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' descripcion='USA'/>
  <Card titulo='Florida' imagen='https://images.pexels.com/photos/15552225/pexels-photo-15552225.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' descripcion='USA'/>
  <Card titulo='Nigeria' imagen='https://images.pexels.com/photos/10768835/pexels-photo-10768835.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' descripcion='Nigeria'/>
  </div>

  <button type="button" class="btn btn-success my-5 d-grid gap-2 col-2 mx-auto">Mostrar mas imagenes</button>  

  <Footer />

  </div>
    </>
  );
}

export default App;
