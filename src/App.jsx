import "./App.css";
import Nosotros from "./components/Nosotros";
import Blog from "./components/Blog";
import MyFooter from "./components/Footer";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Product from "./components/Product";
import Whatsapp from "./components/Whatsapp"
import Services from "./components/Services";


function App() {


  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <Nosotros/>
      <Product/>
      <Blog/>
      <Newsletter/>
      <MyFooter/>
      <Whatsapp/>
    </>
  );
}

export default App;