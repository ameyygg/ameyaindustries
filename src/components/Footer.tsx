import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import ameyaLogo from '../images/ameya_logo.png'

const Footer = (): JSX.Element => {
	const year = new Date().getFullYear()
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-content">
					<div className="footer-section">
						<div className="footer-logo">
							<img src={ameyaLogo} alt="Ameya Industries" className="footer-logo-img" />
						</div>
						<p className="footer-description">
							Ameya Industries Private Limited is set to write its own 
							growth story with an unwavering commitment to the values of 
							quality, innovation, and customer satisfaction. We have 
							positioned as a top sheet metal components manufacturer and 
							exporter.
						</p>
						<div className="footer-contact">
							<div className="contact-item">
								<FaPhone size={16} />
								<span>+91 8888810145</span>
							</div>
							<div className="contact-item">
								<FaPhone size={16} />
								<span>+91 9689959534</span>
							</div>
							<div className="contact-item">
								<FaEnvelope size={16} />
								<span>info@ameyaindia.com</span>
							</div>
						</div>
					</div>

					<div className="footer-section">
						<h3>Company</h3>
						<ul className="footer-links">
							<li><Link to="/">Home</Link></li>
							<li><Link to="/about">About</Link></li>
							<li><Link to="/facilities">Facilities</Link></li>
							<li><Link to="/services">Services</Link></li>
							<li><Link to="/clients">Clients</Link></li>
							<li><Link to="/contact">Contact</Link></li>
						</ul>
					</div>

					<div className="footer-section">
						<h3>Sectors / Industries</h3>
						<ul className="footer-links">
							<li><Link to="/sectors">Automotive</Link></li>
							<li><Link to="/sectors">Press Tool Engineering</Link></li>
							<li><Link to="/sectors">Home Appliances</Link></li>
							<li><Link to="/sectors">Agriculture</Link></li>
							<li><Link to="/sectors">Renewable</Link></li>
							<li><Link to="/sectors">Earth Moving</Link></li>
						</ul>
					</div>

					<div className="footer-section">
						<h3>Support</h3>
						<ul className="footer-links">
							<li><Link to="/contact">Contact</Link></li>
							<li><Link to="/services">Services</Link></li>
						</ul>
					</div>

					<div className="footer-section">
						<h3>Address</h3>
						<p className="footer-address-text">
							G-64, Phase-lll, MIDC Chakan, Kuruli, 410501
						</p>
					</div>
				</div>

				<div className="footer-bottom">
					<p>Copyright © {year} Ameya Industries - All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer 
