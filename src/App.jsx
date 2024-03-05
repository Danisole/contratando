
import "./App.css";
import Nosotros from "./components/Nosotros";
import Blog from "./components/Blog";
import MyFooter from "./components/Footer";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
// import Product from "./components/Product";
import Registrate from "./components/Registrate";
import WhatsappBtn from "./components/Watsapp";

function App() {


  return (
    <>
      <Navbar/>
      <Home/>
      <Registrate/>
      <Nosotros/>
      {/* <Product/> */}
      <Blog/>
      <Newsletter/>
      <WhatsappBtn/>
      <MyFooter/>
    </>
  );
}

export default App;
