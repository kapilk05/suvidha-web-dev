import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from "./component/pages";
import About from "./component/AboutPage/about";
import Contact from "./component/ContactPage/contact";
import Campaign from "./component/CampaignPage/campaign";
import Login from "./component/LoginPage/login";
import Support from "./component/SupportPage/support";
import Nav from "./component/LandingPage/navbar/nav";
import Blogs from "./component/BlogPage/blogs";

import TreePlantation from "./component/CampaignPage/TreePlantation";
import WomenHealth from "./component/CampaignPage/WomenHealth";
import FoodDonation from "./component/CampaignPage/FoodDonation";
import BetiPadhao from "./component/CampaignPage/BetiPadhao";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Pages />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/campaign" element={<Campaign />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/support" element={<Support />} />
          <Route
            path="/campaign/tree-plantation"
            element={<TreePlantation />}
          />
          <Route path="/campaign/women-health" element={<WomenHealth />} />
          <Route path="/campaign/food-donation" element={<FoodDonation />} />
          <Route path="/campaign/beti-padhao" element={<BetiPadhao />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
