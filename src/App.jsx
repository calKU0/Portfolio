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

function App() {
  return (
    <>
      <Header />
      <ReactFullpage
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000}
        scrollOverflow={true}
        anchors={[
          "home",
          "about",
          "skills",
          "qualification",
          "portfolio",
          "contact",
        ]}
        verticalCentered={true}
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
