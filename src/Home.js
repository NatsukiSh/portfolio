import "./Home.css";
import About from "./About";
import Projects from "./Projects";

export default function Home() {
  return (
    <div className="Home">
      <div className="container">
        <h2>Hello there, this is </h2>
        <h1>Natsuki Shuko</h1>
        <p>Fronend Web Developer, based in Germany</p>
        <button className="btn btn-outline-info">About me</button>
      </div>
      <About />
      <Projects />
    </div>
  );
}
