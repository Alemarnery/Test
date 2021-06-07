import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feature />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
