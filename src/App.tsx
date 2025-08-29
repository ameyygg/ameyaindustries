import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Facilities from './pages/Facilities'
import Sectors from './pages/Sectors'
import Clients from './pages/Clients'
import Automotive from './pages/sectors/Automotive'
import PressToolEngineering from './pages/sectors/PressToolEngineering'
import HomeAppliances from './pages/sectors/HomeAppliances'
import Agriculture from './pages/sectors/Agriculture'
import Renewable from './pages/sectors/Renewable'
import EarthMoving from './pages/sectors/EarthMoving'
import SheetMetalStamping from './pages/services/SheetMetalStamping'
import SheetMetalFabrication from './pages/services/SheetMetalFabrication'
import PressToolDesign from './pages/services/PressToolDesign'
import MachiningComponents from './pages/services/MachiningComponents'

function App(): JSX.Element {
	return (
		<div className="app-container">
			<ScrollToTop />
			<NavBar />
			<main className="main-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/facilities" element={<Facilities />} />
					<Route path="/sectors" element={<Sectors />} />
					<Route path="/sectors/automotive" element={<Automotive />} />
					<Route path="/sectors/press-tool-engineering" element={<PressToolEngineering />} />
					<Route path="/sectors/home-appliances" element={<HomeAppliances />} />
					<Route path="/sectors/agriculture" element={<Agriculture />} />
					<Route path="/sectors/renewable" element={<Renewable />} />
					<Route path="/sectors/earth-moving" element={<EarthMoving />} />
					<Route path="/services" element={<Services />} />
					<Route path="/services/sheet-metal-stamping" element={<SheetMetalStamping />} />
					<Route path="/services/sheet-metal-fabrication" element={<SheetMetalFabrication />} />
					<Route path="/services/press-tool-design-manufacturing" element={<PressToolDesign />} />
					<Route path="/services/machining-components" element={<MachiningComponents />} />
					<Route path="/clients" element={<Clients />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</main>
			<Footer />
		</div>
	)
}

export default App 
