import ReactFullpage from "@fullpage/react-fullpage";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Qualification from "./components/Qualification/Qualification";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Scrollup from "./components/Scrollup/Scrollup";
import "./App.css";
import { useEffect } from "react";

function App() {
  function setViewportHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    setViewportHeight();
    window.addEventListener("resize", setViewportHeight);
    return () => window.removeEventListener("resize", setViewportHeight);
  }, []);
  return (
    <>
      <Header />
      <ReactFullpage
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000}
        anchors={[
          "home",
          "about",
          "skills",
          "qualification",
          "portfolio",
          "contact",
        ]}
        navigation
        normalScrollElements="#home, #about, #skills, #qualification, #portfolio, #contact"
        render={({ fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Home />
              <About />
              <Skills />
              <Qualification />
              <Portfolio />
              <Contact />
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <Scrollup />
    </>
  );
}

export default App;
