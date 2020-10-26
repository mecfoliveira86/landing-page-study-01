import React from "react";
import Menu from "./components/Menu";
import Welcome from "./components/Welcome"
import Localizacao from "./components/Localizacao";
import Footer from "./components/Footer";
import Testimony from "./components/Testimony";

function App() {
  return (
    <>
      <Menu />
      <Welcome />
      <Testimony />
      <Localizacao />
      <Footer />
    </>
  );
}

export default App;
