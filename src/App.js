import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Header from "./componenets/Header/Header";
import Footer from "./componenets/Footer/Footer";
import Home from "./componenets/Home/Home";
import ContactPage from "./componenets/Contact/ContactPage";
import About from "./componenets/About/About";
import News from "./componenets/News/News";
import OurWork from "./componenets/OurWork/OurWork";
import NewsSingle from "./componenets/News/NewsSingle";
import Cookies from "./componenets/Cookies/Cookies";
import PrivacyPolicy from "./componenets/PrivacyPolicy/PrivacyPolicy";
import NotFound from "./componenets/Home/NotFound"

function App() {
  return (
    <>
      <Router>
        <Cookies />
        <Header />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/o-nama" element={<About />} />
          <Route path="/nasi-radovi" element={<OurWork />} />
          <Route path="/novosti" element={<News />} />
          <Route path="/novosti/:slug" element={<NewsSingle />} />
          <Route path="/politika-privatnosti" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
