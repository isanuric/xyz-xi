import { Fragment } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import TopContainer from "./components/TopContainer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Navbar />
      <TopContainer />
      <About />
      <Service />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
