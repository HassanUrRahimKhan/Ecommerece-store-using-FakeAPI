import './App.css';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import AddtoCart from './containers/AddtoCart';
import {
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route index element={<ProductListing/>}/>
          <Route path='/product/:productId' element={<ProductDetail/>}/>
          <Route path="/cart" element={<AddtoCart />}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
