import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FaChevronDown, FaTimes } from 'react-icons/fa'
import logoUrl from '../images/ameya_logo.png'

const NavBar = (): JSX.Element => {
	const [isSectorsDropdownOpen, setIsSectorsDropdownOpen] = useState(false)
	const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [isMobileSectorsOpen, setIsMobileSectorsOpen] = useState(false)
	const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)

	const sectorOptions = [
		{ name: 'Automotive', path: '/sectors/automotive' },
		{ name: 'Press Tool Engineering', path: '/sectors/press-tool-engineering' },
		{ name: 'Home Appliances', path: '/sectors/home-appliances' },
		{ name: 'Agriculture', path: '/sectors/agriculture' },
		{ name: 'Renewable', path: '/sectors/renewable' },
		{ name: 'Earth Moving', path: '/sectors/earth-moving' }
	]

	const serviceOptions = [
		{ name: 'Sheet Metal Stamping', path: '/services/sheet-metal-stamping' },
		{ name: 'Sheet Metal Fabrication', path: '/services/sheet-metal-fabrication' },
		{ name: 'Press Tool Design & Manufacturing', path: '/services/press-tool-design-manufacturing' },
		{ name: 'Machining Components', path: '/services/machining-components' }
	]

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false)
		setIsMobileSectorsOpen(false)
		setIsMobileServicesOpen(false)
	}

	return (
		<header className="nav">
			<div className="container nav-inner">
				<div className="brand">
					<NavLink to="/" className="brand-link" onClick={closeMobileMenu}>
						<img src={logoUrl} alt="Ameya Industries logo" className="brand-logo" />
					</NavLink>
				</div>

				{/* Sleek Hamburger Menu Button */}
				<button
					className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					aria-label="Toggle mobile menu"
				>
					<div className="hamburger-lines">
						<span className="line line1"></span>
						<span className="line line2"></span>
						<span className="line line3"></span>
					</div>
				</button>

				{/* Desktop Navigation */}
				<nav className="links desktop-nav">
					<NavLink to="/" end className={({ isActive }) => (isActive ? 'link active' : 'link')}>
						Home
					</NavLink>
					<NavLink to="/about" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
						About
					</NavLink>
					<NavLink to="/facilities" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
						Facilities
					</NavLink>
					<div
						className="dropdown-container"
						onMouseEnter={() => setIsSectorsDropdownOpen(true)}
						onMouseLeave={() => setIsSectorsDropdownOpen(false)}
					>
						<div className="link dropdown-trigger">
							Sectors
							<FaChevronDown size={14} className={`dropdown-icon ${isSectorsDropdownOpen ? 'rotated' : ''}`} />
						</div>
						<div className={`dropdown-menu ${isSectorsDropdownOpen ? 'open' : ''}`}>
							{sectorOptions.map((sector) => (
								<NavLink
									key={sector.path}
									to={sector.path}
									className="dropdown-item"
								>
									{sector.name}
								</NavLink>
							))}
						</div>
					</div>
					<div
						className="dropdown-container"
						onMouseEnter={() => setIsServicesDropdownOpen(true)}
						onMouseLeave={() => setIsServicesDropdownOpen(false)}
					>
						<div className="link dropdown-trigger">
							Services
							<FaChevronDown size={14} className={`dropdown-icon ${isServicesDropdownOpen ? 'rotated' : ''}`} />
						</div>
						<div className={`dropdown-menu ${isServicesDropdownOpen ? 'open' : ''}`}>
							{serviceOptions.map((service) => (
								<NavLink
									key={service.path}
									to={service.path}
									className="dropdown-item"
								>
									{service.name}
								</NavLink>
							))}
						</div>
					</div>
					<NavLink to="/clients" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
						Clients
					</NavLink>
					<NavLink to="/contact" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
						Contact
					</NavLink>
				</nav>

				{/* Mobile Navigation */}
				<nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
					<div className="mobile-nav-header">
						{/* <button className="mobile-nav-close" onClick={closeMobileMenu} aria-label="Close mobile menu">
							<FaTimes size={20} />
						</button> */}
					</div>
					<div className="mobile-nav-content">
						<NavLink
							to="/"
							end
							className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
							onClick={closeMobileMenu}
						>
							Home
						</NavLink>
						<NavLink
							to="/about"
							className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
							onClick={closeMobileMenu}
						>
							About
						</NavLink>
						<NavLink
							to="/facilities"
							className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
							onClick={closeMobileMenu}
						>
							Facilities
						</NavLink>

						{/* Mobile Sectors Dropdown */}
						<div className="mobile-dropdown">
							<button
								className="mobile-dropdown-trigger"
								onClick={() => setIsMobileSectorsOpen(!isMobileSectorsOpen)}
							>
								Sectors
								<FaChevronDown size={14} className={`mobile-dropdown-icon ${isMobileSectorsOpen ? 'rotated' : ''}`} />
							</button>
							<div className={`mobile-dropdown-menu ${isMobileSectorsOpen ? 'open' : ''}`}>
								{sectorOptions.map((sector) => (
									<NavLink
										key={sector.path}
										to={sector.path}
										className="mobile-dropdown-item"
										onClick={closeMobileMenu}
									>
										{sector.name}
									</NavLink>
								))}
							</div>
						</div>

						{/* Mobile Services Dropdown */}
						<div className="mobile-dropdown">
							<button
								className="mobile-dropdown-trigger"
								onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
							>
								Services
								<FaChevronDown size={14} className={`mobile-dropdown-icon ${isMobileServicesOpen ? 'rotated' : ''}`} />
							</button>
							<div className={`mobile-dropdown-menu ${isMobileServicesOpen ? 'open' : ''}`}>
								{serviceOptions.map((service) => (
									<NavLink
										key={service.path}
										to={service.path}
										className="mobile-dropdown-item"
										onClick={closeMobileMenu}
									>
										{service.name}
									</NavLink>
								))}
							</div>
						</div>

						<NavLink
							to="/clients"
							className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
							onClick={closeMobileMenu}
						>
							Clients
						</NavLink>
						<NavLink
							to="/contact"
							className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
							onClick={closeMobileMenu}
						>
							Contact
						</NavLink>
					</div>
				</nav>

				{/* Mobile Menu Overlay */}
				{isMobileMenuOpen && (
					<div className="mobile-nav-overlay" onClick={closeMobileMenu}></div>
				)}
			</div>
		</header>
	)
}

export default NavBar 
