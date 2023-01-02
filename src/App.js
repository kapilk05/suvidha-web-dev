import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from "./component/pages";
import About from "./component/AboutPage/about";
import Contact from "./component/ContactPage/contact";
import Event from "./component/EventsPage/event";
import Login from "./component/LoginPage/login";
import Support from "./component/SupportPage/support";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pages/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/event" element={<Event/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/support" element={<Support/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
