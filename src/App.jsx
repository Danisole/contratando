import "./App.css";
import Nosotros from "./components/Nosotros";
// import Blog from "./components/Blog";
import MyFooter from "./components/Footer";
// import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import Suscribete from "./components/Suscribete";
import Whatsapp from "./components/Whatsapp"
import Faq from "./components/Faq";
import Form from "./components/contacto/Form";
// import Services from "./components/Services";


function App() {


  return (
    <>
      <Navbar/>
      <Home/>
      <Nosotros/>
      {/* <Services/> */}
      <Suscribete/>
      <Faq/>
      <Form/>
      <Video/>
      <MyFooter/>
      <Whatsapp/>
    </>
  );
}

export default App;
