import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import OurTeams from "./pages/OurTeams"
import Pricing from "./pages/PricingPolicy"
import NotFound from "./pages/404NotFound"
import Navbar from "./components/all/Navbar"
import OurServices from "./pages/OurServices"
import Footer from "./components/all/Footer"
import Products from "./pages/Products"
import ProductViewer from "./pages/ProductViewer"
import { ViewProductProvider } from "./context/ViewProductContext"
import StartHere from "./pages/StartHere"
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-teams" element={<OurTeams />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/start" element={<StartHere />} />
        <Route path="/products" element={<ViewProductProvider><Products /></ViewProductProvider>} />
        <Route path="/products/:id" element={<ViewProductProvider><ProductViewer /></ViewProductProvider>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App