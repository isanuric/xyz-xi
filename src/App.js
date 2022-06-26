import { Fragment } from "react";
import "./css/App.css";
import "./css/animation.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import TopContainer from "./components/TopContainer";
import Footer from "./components/Footer";
import Picture from "./components/Picture";
import Quote from "./components/Quote";
import ReactSecssionsns from "./components/react/ReactSecssions";

function App() {
  return (
    <Fragment>
      <Navbar />
      <TopContainer />
      <About />
      <Service />
      <Picture />
      <Quote />
      <ReactSecssionsns />
      <Footer />
    </Fragment>
  );
}

export default App;
