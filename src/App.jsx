import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About/About";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Home />
      <About />
    </>
  );
}

export default App;
