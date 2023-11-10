import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Testimonial from "./testimonial";
import Footer from "./footer";
import About from "./about";

function App() {
  return (
    <div className="App bg-[#fff6d2]">
      <Navbar></Navbar>
      <hr />
      <Home></Home>
      <Testimonial></Testimonial>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
