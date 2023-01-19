import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from "./component/pages";
import About from "./component/AboutPage/about";
import Contact from "./component/ContactPage/contact";
import Event from "./component/EventsPage/event";
import Login from "./component/LoginPage/login";
import Support from "./component/SupportPage/support";
import Nav from "./component/LandingPage/navbar/nav";
import Blogs from "./component/BlogPage/blogs";

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
        <Routes>
          <Route path="/" element={<Pages/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/blogs" element={<Blogs/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/event" element={<Event/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/support" element={<Support/>}/>n
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;



