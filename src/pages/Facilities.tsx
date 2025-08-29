import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import coverImageUrl from '../images/cover page.png'
import unit1Image from '../images/unit 1.png'
import unit2Img from '../images/unit 2.jpg'
import stampingImg from '../images/stamping.jpg'
import toolingImg from '../images/tooling.jpg'
import laserCuttingImg from '../images/laser cutting.jpg'
import weldingImg from '../images/welding.jpg'
import cncBendingImg from '../images/cnc bending.webp'
import cmmImg from '../images/cmm.webp'
import certificateImg from '../images/certificate.jpg'

const Facilities = (): JSX.Element => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)

	return (
		<>
			{/* Hero Section */}
			<section className="about-hero" style={{ backgroundImage: `url(${coverImageUrl})` }}>
				<div className="container">
					<h1>Facilities & Infrastructure</h1>
				</div>
			</section>

			{/* Our Strength Section */}
			<section className="section our-strength-section">
				<div className="container">
					<div className="strength-grid">
						<div className="strength-image">
							<img src={unit1Image} alt="Ameya Industries Manufacturing Facility" className="facility-aerial-image" />
						</div>
						<div className="strength-content">
							<h2 className="strength-title">Our Strength</h2>
							<p className="strength-description">
								At Ameya Industries, our infrastructure is built for precision, scale, and global standards.
								From advanced press lines, roll forming machines, CNC laser cutting systems, and bending equipment to fabrication setups and in-house quality labs, every facility is engineered to support end-to-end manufacturing under one roof.
								Our technical strength is matched by seamless administrative operations — enabling us to deliver consistent quality, cost-effective solutions, and on-time exports tailored to the evolving needs of clients worldwide.
							</p>
							<Link to="/services/sheet-metal-stamping" className="btn primary strength-btn">OUR PRODUCT RANGE</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Services We Offer Section */}
			<section className="section">
				<div className="container">
					<h2>Services We Offer</h2>
					<div className="service-cards">
						<article className="service-card">
							<img src={stampingImg} alt="Stamping" className="service-thumb" />
							<div className="service-body">
								<h3>Stamping</h3>
								<p>Progressive, transfer, and single-hit operations with in-die sensing, coil feeding, and SPC.</p>
							</div>
						</article>
						<article className="service-card">
							<img src={toolingImg} alt="Tooling" className="service-thumb" />
							<div className="service-body">
								<h3>Tooling</h3>
								<p>End-to-end die design, build, and preventive maintenance with quick changeover support.</p>
							</div>
						</article>
						<article className="service-card">
							<img src={laserCuttingImg} alt="Laser Cutting" className="service-thumb" />
							<div className="service-body">
								<h3>Laser Cutting</h3>
								<p>High-precision laser cutting for prototypes and low-volume runs with tight tolerances.</p>
							</div>
						</article>
						<article className="service-card">
							<img src={weldingImg} alt="Welding" className="service-thumb" />
							<div className="service-body">
								<h3>Welding</h3>
								<p>MIG and spot welding cells with fixtures and gauges ensuring repeatability and throughput.</p>
							</div>
						</article>
						<article className="service-card">
							<img src={cncBendingImg} alt="CNC Bending" className="service-thumb" />
							<div className="service-body">
								<h3>CNC Bending</h3>
								<p>Precision CNC press brake operations for complex bends and forming with consistent angles and repeatability.</p>
							</div>
						</article>
						<article className="service-card">
							<img src={cmmImg} alt="CMM" className="service-thumb" />
							<div className="service-body">
								<h3>CMM</h3>
								<p>Coordinate measuring machine inspection services for dimensional verification and quality assurance.</p>
							</div>
						</article>
					</div>
				</div>
			</section>

			{/* Manufacturing Facility Highlights Section */}
			<section className="section facility-highlights-section">
				<div className="container">
					<div className="highlights-grid">
						<div className="highlights-content">
							<h2 className="highlights-title">Manufacturing Facility Highlights</h2>
							<p className="highlights-description">
								Our facilities at Ameya Industries are designed to deliver excellence at every stage of the manufacturing journey. Equipped with cutting-edge machinery, automated workflows, and quality systems, we ensure:
							</p>
							<ul className="highlights-list">
								<li className="highlight-item">
									<FaChevronRight size={16} className="highlight-icon" />
									<span>Precision-driven production processes</span>
								</li>
								<li className="highlight-item">
									<FaChevronRight size={16} className="highlight-icon" />
									<span>Flexible capacity for large-scale projects</span>
								</li>
								<li className="highlight-item">
									<FaChevronRight size={16} className="highlight-icon" />
									<span>Superior quality control mechanisms</span>
								</li>
								<li className="highlight-item">
									<FaChevronRight size={16} className="highlight-icon" />
									<span>Environmentally conscious operations</span>
								</li>
							</ul>
							<Link to="/contact" className="btn primary highlights-btn">CONTACT US</Link>
						</div>
						<div className="highlights-stats">
							<div className="stat-item">
								<p className="stat-label">State of the art three units stretched across</p>
								<h3 className="stat-value">23,500 Sq. Mtr.</h3>
							</div>
							<div className="stat-item">
								<p className="stat-label">Power presses ranging in size</p>
								<h3 className="stat-value">20 T - 350 T</h3>
							</div>
							<div className="stat-item">
								<p className="stat-label">Manufacturing parts and assemblies up to</p>
								<h3 className="stat-value">5 Mtrs.</h3>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Certificates Section */}
			<section className="band band--cover" style={{ backgroundImage: `url(${coverImageUrl})` }}>
				<div className="container">
					<div className="certificate-split">
						<div className="certificate-left">
							<h2 className="certificate-title">Presenting Advanced Precision Sheet Metal Components</h2>
							<Link to="/contact" className="btn primary certificate-btn">Download Brochure</Link>
						</div>
						<div className="certificate-right">
							<div className="certificate-card" onClick={openModal}>
								<img src={certificateImg} alt="ISO Certificate" className="certificate-thumb" />
								<div className="certificate-overlay">
									<p>Click to view certificate</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Working with A Global Mission Section */}
			<section className="section">
				<div className="container">
					<div style={{ textAlign: 'center', marginBottom: '12px' }}>
						<p style={{ color: 'var(--muted)', fontSize: '0.95rem', margin: '0 0 8px', letterSpacing: '0.5px' }}>Quality | Safety | Sustainability</p>
						<div className="centered-title-container" style={{ marginBottom: '0' }}>
							<h2 className="centered-title">Working with A Global Mission</h2>
						</div>
					</div>
					<div className="facility-cards">
						<article className="facility-card">
							<img src={unit1Image} alt="Unit 1" className="facility-thumb" />
							<div className="facility-body">
								<h3>Unit 1</h3>
								<p style={{ color: 'var(--muted)', fontSize: '0.9rem', margin: '4px 0 0' }}>
									Pressing | Stamping | Welding<br />
									QMS as per ISO 9001:2015<br />
									ISO 14001:2015 | ISO 45001:2018
								</p>
							</div>
						</article>
						<article className="facility-card">
							<img src={unit2Img} alt="Unit 2" className="facility-thumb" />
							<div className="facility-body">
								<h3>Unit 2</h3>
								<p style={{ color: 'var(--muted)', fontSize: '0.9rem', margin: '4px 0 0' }}>
									Pressing | Tooling<br />
									QMS as per ISO 9001:2015<br />
									ISO 14001:2015 | ISO 45001:2018
								</p>
							</div>
						</article>
					</div>
				</div>
			</section>

			{/* Certificate Modal */}
			{isModalOpen && (
				<div className="modal-overlay" onClick={closeModal}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<button className="modal-close" onClick={closeModal}>&times;</button>
						<img src={certificateImg} alt="ISO Certificate" className="modal-image" />
					</div>
				</div>
			)}
		</>
	)
}

export default Facilities 
