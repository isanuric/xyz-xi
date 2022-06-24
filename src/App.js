import { Fragment } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import TopContainer from "./components/TopContainer";
import Footer from "./components/Footer";
import Picture from "./components/Picture";
import Quote from "./components/Quote";

function App() {
  return (
    <Fragment>
      <Navbar />
      <TopContainer />
      <About />
      <Service />
      <Picture />
      <Quote />
      <Footer />
    </Fragment>
  );
}

export default App;
