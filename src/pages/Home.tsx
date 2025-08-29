import { Link } from 'react-router-dom'
import { useState } from 'react'
import coverImageUrl from '../images/cover page.png'
import coverImg2 from '../images/cover-img-2.jpeg'
import { FaChevronRight, FaCheckCircle } from 'react-icons/fa'
import stampingImg from '../images/stamping.jpg'
import toolingImg from '../images/tooling.jpg'
import laserCuttingImg from '../images/laser cutting.jpg'
import weldingImg from '../images/welding.jpg'
import cncBendingImg from '../images/cnc bending.webp'
import cmmImg from '../images/cmm.webp'
import automotiveImg from '../images/automotive.jpg'
import homeAppliancesImg from '../images/home-appliances.jpeg'
import agricultureImg from '../images/agriculture.png'
import renewableImg from '../images/renewable.jpg'
import earthMovingImg from '../images/earthmoving.png'
import unit1Img from '../images/unit 1.png'
import unit2Img from '../images/unit 2.jpg'
import certificateImg from '../images/certificate.jpg'
import L1 from '../images/L1.jpg'
import L2 from '../images/L2.jpg'
import L3 from '../images/L3.jpg'
import L4 from '../images/L4.jpg'
import L5 from '../images/L5.jpg'
import L6 from '../images/L6.jpg'
import L7 from '../images/L7.jpg'
import L8 from '../images/L8.jpg'
import L9 from '../images/L9.jpg'
import C1 from '../images/C1.jpg'
import C2 from '../images/C2.jpg'
import C3 from '../images/C3.jpg'
import C4 from '../images/C4.jpg'
import C5 from '../images/C5.jpg'
import C6 from '../images/C6.jpg'
import C7 from '../images/C7.jpg'
import C8 from '../images/C8.jpg'
import C9 from '../images/C9.jpg'
import C10 from '../images/C10.jpg'
import C11 from '../images/C11.jpg'
import C12 from '../images/C12.jpg'

const Home = (): JSX.Element => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)

	const clientLogos = [L1, L2, L3, L4, L5, L6, L7, L8, L9]
	const assignmentLogos = [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12]

	return (
		<>
			<section className="hero hero--cover" style={{ backgroundImage: `url(${coverImageUrl})` }}>
				<div className="container">
					<h1>Precision Automobile Pressing and Component Manufacturing</h1>
					<p>
						Ameya Industries stands at the forefront of precision sheet metal stamping, roll forming, laser cutting, bending, and fabrication. Backed by robust in-house capabilities and a customer-centric mindset, we deliver solutions that are built to perform, last, and lead.
					</p>
					<div className="cta-group">
						<Link to="/services/sheet-metal-stamping" className="btn primary">Explore Services</Link>
						<Link to="/contact" className="btn">Get a Quote</Link>
					</div>
				</div>

				{/* Bottom hover-expand tabs */}
				<div className="hero-tabs">
					<div className="container">
						<div className="hero-tabs-grid">
							<div className="hero-tab">
								<div className="tab-surface">
									<div className="tab-head"><span>Capacity</span><span className="icon-pill"><FaChevronRight size={16} /></span></div>
									<div className="tab-body">
										<p>Annual Steel Processing Capacity: 5,000 Tons <br /> Number of Plants: 2 <br /> Press Machine Tonnage: 20 Ton to 350 Ton</p>
									</div>
								</div>
							</div>
							<div className="hero-tab">
								<div className="tab-surface">
									<div className="tab-head"><span>Quality</span><span className="icon-pill"><FaChevronRight size={16} strokeWidth={3} /></span></div>
									<div className="tab-body">
										<p>QMS as per IATF 16949:2016 | ISO 9001:2015 <br /> Stringent in-process and final inspection ensures consistent product reliability</p>
									</div>
								</div>
							</div>
							<div className="hero-tab">
								<div className="tab-surface">
									<div className="tab-head"><span>Delivery</span><span className="icon-pill"><FaChevronRight size={16} strokeWidth={3} /></span></div>
									<div className="tab-body">
										<p>Countries We Serve: India and USA , Modes of Transportation: Road, Sea and Air </p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* About-style split section */}
			<section className="section about-section">
				<div className="container">
					<div className="split">
						<div className="split-col">
							<h2>About Us</h2>
							<p style={{ color: 'var(--muted)', marginTop: 8 }}>
								<span style={{ fontWeight: 'bold' }}>India’s Trusted Partner in Sheet Metal Excellence</span> <br />
								Ameya Industries stands at the forefront of precision sheet metal stamping, roll forming, laser cutting, bending, and fabrication. Backed by robust in-house capabilities and a customer-centric mindset, we deliver solutions that are built to perform, last, and lead.
								<br />
								<ul className="check-list">
									<li><FaChevronRight size={16} /><span>Over a decade of industry experience</span></li>
									<li><FaChevronRight size={16} /><span>Advanced manufacturing & assembly capabilities</span></li>
									<li><FaChevronRight size={16} /><span>Focus on quality, innovation, and customer satisfaction</span></li>
									<li><FaChevronRight size={16} /><span>Skilled team and cutting-edge machinery</span></li>
									<li><FaChevronRight size={16} /><span>Global-standard products & solutions</span></li>
								</ul>
							</p>
							<ul className="check-list">
								<li><FaCheckCircle size={18} /><span>IATF 16949:2016</span></li>
								<li><FaCheckCircle size={18} /><span>ISO 9001:2015</span></li>
							</ul>
							<div style={{ marginTop: 12 }}>
								<Link to="/about" className="btn primary">Read More</Link>
							</div>
						</div>
						<div className="split-col split-media">
							<img src={coverImageUrl} alt="Facility" className="img-cover" />
						</div>
					</div>
				</div>
			</section>

			{/* Dark band section */}
			<section className="band band--cover" style={{ backgroundImage: `url(${coverImageUrl})` }}>
				<div className="container">
					<div className="band-grid">
						<div className="band-left">
							<h2 className="band-title">Diverse Industrial Solutions for Different Sectors</h2>
							<p className="band-sub">We deliver tailored solutions across sectors including automotive, press tool engineering, home appliances, agriculture, renewable and earthmoving.</p>
							<Link to="/facilities" className="btn primary">Explore Infrastructure</Link>
						</div>
						<div className="band-right">
							<div className="band-item">
								<span className="icon-pill"><FaChevronRight size={16} strokeWidth={3} /></span>
								<div className="band-item-body">
									<h3>Mission</h3>
									<p>To be a globally trusted partner in precision sheet metal and machined component manufacturing, delivering engineering solutions that uphold the highest standards of quality, performance, and reliability. We are committed to fostering long-term partnerships through innovation, sustainability, and unwavering customer focus.</p>
								</div>
							</div>
							<div className="band-item">
								<span className="icon-pill"><FaChevronRight size={16} strokeWidth={3} /></span>
								<div className="band-item-body">
									<h3>Vision</h3>
									<p>To emerge as a globally recognized leader in sheet metal stamping, roll forming, fabrication, and machining, known for our commitment to excellence, forward-thinking engineering, and sustainable manufacturing practices — enabling industries to build with confidence and efficiency.</p>
								</div>
							</div>
							<div className="band-item">
								<span className="icon-pill"><FaChevronRight size={16} strokeWidth={3} /></span>
								<div className="band-item-body">
									<h3>Core Values</h3>
									<p>Integrity, quality, innovation, and on-time delivery supported by ethical practices and continuous improvement.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services grid section */}
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

			{/* Sectors We Serve section */}
			<section className="band band--cover" style={{ backgroundImage: `url(${coverImg2})` }}>
				<div className="container">
					<h2 className="band-title with-underline" style={{ textAlign: 'center', marginBottom: '40px' }}>Sectors We Serve</h2>
					<div className="sector-cards">
						<Link to="/sectors/automotive" className="sector-card">
							<img src={automotiveImg} alt="Automotive" className="sector-thumb" />
							<div className="sector-body">
								<h3>Automotive<FaChevronRight size={18} className="sector-arrow" /></h3>
							</div>
						</Link>
						<Link to="/sectors/press-tool-engineering" className="sector-card">
							<img src={toolingImg} alt="Press Tool Engineering" className="sector-thumb" />
							<div className="sector-body">
								<h3>Press Tool Engineering<FaChevronRight size={18} className="sector-arrow" /></h3>
							</div>
						</Link>
						<Link to="/sectors/home-appliances" className="sector-card">
							<img src={homeAppliancesImg} alt="Home Appliances" className="sector-thumb" />
							<div className="sector-body">
								<h3>Home Appliances<FaChevronRight size={18} className="sector-arrow" /></h3>
							</div>
						</Link>
						<Link to="/sectors/agriculture" className="sector-card">
							<img src={agricultureImg} alt="Agriculture" className="sector-thumb" />
							<div className="sector-body">
								<h3>Agriculture<FaChevronRight size={18} className="sector-arrow" /></h3>
							</div>
						</Link>
						<Link to="/sectors/renewable" className="sector-card">
							<img src={renewableImg} alt="Renewable" className="sector-thumb" />
							<div className="sector-body">
								<h3>Renewable<FaChevronRight size={18} className="sector-arrow" /></h3>
							</div>
						</Link>
						<Link to="/sectors/earth-moving" className="sector-card">
							<img src={earthMovingImg} alt="Earth Moving" className="sector-thumb" />
							<div className="sector-body">
								<h3>Earth Moving<FaChevronRight size={18} className="sector-arrow" /></h3>
							</div>
						</Link>
					</div>
				</div>
			</section>

			{/* Facilities section */}
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
							<img src={unit1Img} alt="Unit 1" className="facility-thumb" />
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

			{/* Certificates section */}
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

			{/* Our Clients section */}
			<section className="section">
				<div className="container">
					<div className="centered-title-container">
						<h2 className="centered-title">Our Clients</h2>
					</div>
					<div className="clients-carousel">
						<div className="carousel-track">
							{/* First set of logos */}
							{clientLogos.map((logo, index) => (
								<div key={`first-${index}`} className="logo-item">
									<img src={logo} alt={`Client ${index + 1}`} className="client-logo" />
								</div>
							))}
							{/* Duplicate set for infinite scroll */}
							{clientLogos.map((logo, index) => (
								<div key={`second-${index}`} className="logo-item">
									<img src={logo} alt={`Client ${index + 1}`} className="client-logo" />
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Assignment Through Clients section */}
			<section className="section">
				<div className="container">
					<div className="centered-title-container">
						<h2 className="centered-title">Assignment Through Clients</h2>
					</div>
					<div className="assignment-carousel">
						<div className="assignment-track">
							{/* First set of logos */}
							{assignmentLogos.map((logo, index) => (
								<div key={`first-${index}`} className="logo-item">
									<img src={logo} alt={`Assignment Client ${index + 1}`} className="client-logo" />
								</div>
							))}
							{/* Duplicate set for infinite scroll */}
							{assignmentLogos.map((logo, index) => (
								<div key={`second-${index}`} className="logo-item">
									<img src={logo} alt={`Assignment Client ${index + 1}`} className="client-logo" />
								</div>
							))}
						</div>
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

export default Home 
