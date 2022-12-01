import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cv from "./components/Pages/about-me/Cv";

function App() {
  return (
    <div className="main-wrapper">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/cv" component={Cv} />
        </Routes>
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
