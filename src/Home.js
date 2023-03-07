import "./Home.css";
import About from "./About";
import Projects from "./Projects";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import SideBtn from "./SideBtn";

export default function Home() {
  return (
    <div className="Home" id="Home">
      <div className="container">
        <h3>Welcome to my page, this is </h3>
        <h1>Natsuki Shuko</h1>
        <p>Fronend Web Developer, based in Germany</p>
      </div>
      <a href="#about" className="btn btn-outline-info">
        About me
      </a>
      <SideBtn />
      <About />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}
