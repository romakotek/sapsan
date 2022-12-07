import "./App.scss";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Cv from "./components/Pages/about-me/Cv";
import Home from "./components/Pages/home/Home";
import Contacts from "./components/Pages/contacts/Contacts"

function App() {
  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <Header />
        <Navbar />
        <div className="main-wrapper-content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
