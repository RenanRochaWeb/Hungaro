//Home page with highlighed clothing combination and buttons to navigatate to the available pieces with combinations
//maybe have a big photo or video
//add a footer with company info, faqs, contacts, social links,
import "./App.css";
import { useState } from "react";
import Clothing from "./pages/Clothing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [showClothesPage, setShowClothesPage] = useState(false);

  function ChangePage() {
    setShowClothesPage(!showClothesPage);
  }

  return (
    <>
      <div className="App">
        <Navbar ChangePage={ChangePage} />
        {showClothesPage ? <Clothing /> : <div id="main">Main Content</div>}
        <Footer />
      </div>
    </>
  );
}

export default App;
