import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import TopNav from "./components/TopNav"
import Home from "./pages/Home"
import About from "./pages/About/About"
import EditorialTeam from "./pages/About/EditorialTeam"
import Contact from "./pages/About/Contact"
import Membership from "./pages/About/Membership"
import CurrentIssue from "./pages/CurrentIssue/CurrentIssue"
import PhysicalSciences from "./pages/CurrentIssue/PhysicalScience"
import LifeSciences from "./pages/CurrentIssue/LifeScience"
import SocialSciences from "./pages/CurrentIssue/SocialScience"
import ArtsHumanities from "./pages/CurrentIssue/ArtsHumanities"
import TerpsPublish from "./pages/TerpsPublish"
import ErrorPage from "./pages/ErrorPage"











function App() {
  return (
    <Router>
      <TopNav/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/about/editorialteam" element={<EditorialTeam/>}/>
        <Route path="/about/contact" element={<Contact/>}/>
        <Route path="/about/membership" element={<Membership/>}/>

        <Route path="/currentissue" element={<CurrentIssue/>}/>
        <Route path="/currentissue/applied-and-physical-sciences" element={<PhysicalSciences/>}/>
        <Route path="/currentissue/life-sciences" element={<LifeSciences/>}/>
        <Route path="/currentissue/social-sciences" element={<SocialSciences/>}/>
        <Route path="/currentissue/arts-and-humanities" element={<ArtsHumanities/>}/>

        <Route path="/terpspublish" element={<TerpsPublish/>}/>
        <Route path="*" element={<ErrorPage />}/>

      </Routes>
    </Router>
  );
}

export default App;
