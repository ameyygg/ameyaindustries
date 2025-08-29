import { Link } from 'react-router-dom'
import coverImageUrl from '../images/cover page.png'
import coverImg2 from '../images/cover-img-2.jpeg'
import { FaCheckCircle, FaChevronRight, FaAward, FaComments, FaTruck, FaCog } from 'react-icons/fa'

const About = (): JSX.Element => {
	return (
		<>
			{/* Hero Section */}
			<section className="about-hero" style={{ backgroundImage: `url(${coverImageUrl})` }}>
				<div className="container">
					<h1>About Our Company</h1>
				</div>
			</section>

			{/* Our Story Section */}
			<section className="section">
				<div className="container">
					<div className="about-story-grid">
						<div className="story-content">
							<p className="story-subtitle">Who We Are</p>
							<h2>Our Story</h2>
							<p className="story-text">
								Ameya Industries is one of India’s emerging leaders in precision sheet metal manufacturing — with a growing presence in machined components and high-performance fabricated assemblies. We were founded with a clear vision and a deep commitment to quality.

								What began as a family-run initiative is now a globally-minded enterprise where our team is driven by a shared responsibility to uphold efficiency, reliability, and a spirit of continuous improvement.
							</p>

							<div className="certifications-section">
								<div className="certifications-box">
									<div className="cert-item">
										<div className="cert-icon">
											<FaCheckCircle size={24} />
										</div>
										<div className="cert-text">
											<p>IATF 16949:2016</p>
											<span>Certified</span>
										</div>
									</div>
									<div className="cert-item">
										<div className="cert-icon">
											<FaCheckCircle size={24} />
										</div>
										<div className="cert-text">
											<p>ISO 9001:2015</p>
											<span>Certified</span>
										</div>
									</div>
								</div>
								<div className="product-info">
									<h3>Explore our products</h3>
									<Link to="/services/sheet-metal-stamping" className="btn primary">Our Products</Link>
								</div>
							</div>
						</div>

						<div className="story-media">
							<div className="image-container">
								<img src={coverImg2} alt="Ameya Industries Facility" className="story-image" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Ameya Section */}
			<section className="band band--cover" style={{ backgroundImage: `url(${coverImg2})` }}>
				<div className="container">
					<div className="commitment-grid">
						<div className="commitment-left">
							<h2 className="commitment-title">Why Choose Ameya?</h2>
							<p className="commitment-text">
								At Ameya, quality is not just a goal; it's a standard. Our unwavering dedication
								ensures that every product adheres to the highest safety and environmental
								benchmarks.
							</p>
							<Link to="/facilities" className="btn primary commitment-btn">Infrastructure & Facilities</Link>
						</div>
						<div className="commitment-right">
							<div className="commitment-item">
								<div className="commitment-icon">
									<FaChevronRight size={16} />
								</div>
								<div className="commitment-content">
									<h3>Precision Engineering</h3>
									<p>From sheet metal stamping and roll forming to laser cutting, bending, and fabrication, we deliver components that meet global quality standards and exceed client expectations.</p>
								</div>
							</div>
							<div className="commitment-item">
								<div className="commitment-icon">
									<FaChevronRight size={16} />
								</div>
								<div className="commitment-content">
									<h3>Advanced Manufacturing Infrastructure</h3>
									<p>Equipped with cutting-edge machinery and skilled technicians, our facility is designed to handle large-volume production while maintaining tight tolerances and process control.</p>
								</div>
							</div>
							<div className="commitment-item">
								<div className="commitment-icon">
									<FaChevronRight size={16} />
								</div>
								<div className="commitment-content">
									<h3>Reliable Timelines</h3>
									<p>We understand how critical delivery schedules are. Our strong planning systems and in-house processes ensure on-time deliveries — every time.</p>
								</div>
							</div>
							<div className="commitment-item">
								<div className="commitment-icon">
									<FaChevronRight size={16} />
								</div>
								<div className="commitment-content">
									<h3>Sustainable Practices</h3>
									<p>We’re committed to responsible manufacturing with eco-friendly processes that reduce waste, optimize energy use, and lower environmental impact.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Industry Verticals Section */}
			<section className="section">
				<div className="container">
					<div className="verticals-header">
						<h2 className="verticals-title">Diverse Industry Verticals Served by Ameya</h2>
					</div>
					<div className="verticals-grid">
						<div className="vertical-item">
							<h3>Automotive</h3>
						</div>
						<div className="vertical-item">
							<h3>Press Tool Engineering</h3>
						</div>
						<div className="vertical-item">
							<h3>Home Appliances</h3>
						</div>
						<div className="vertical-item">
							<h3>Agriculture</h3>
						</div>
						<div className="vertical-item">
							<h3>Renewable</h3>
						</div>
						<div className="vertical-item">
							<h3>Earth Moving</h3>
						</div>
					</div>
				</div>
			</section>

			{/* Core Values Section */}
			<section className="core-values-section" style={{ backgroundImage: `url(${coverImg2})` }}>
				<div className="values-overlay"></div>
				<div className="container">
					<div className="values-grid">
						<div className="values-header-card">
							<h2 className="values-title">Our values.</h2>
							<p className="values-description">
								The fundamental principles that guide our operations and define our commitment to excellence in manufacturing and customer service.
							</p>
						</div>
						<div className="value-card">
							<div className="value-icon">
								<FaCheckCircle size={32} />
							</div>
							<h3>Quality Excellence</h3>
							<p>We maintain the highest standards in every component we manufacture, ensuring precision and reliability that exceeds industry expectations.</p>
						</div>
						<div className="value-card">
							<div className="value-icon">
								<FaCheckCircle size={32} />
							</div>
							<h3>Customer Commitment</h3>
							<p>Our unwavering dedication to customer satisfaction drives us to deliver solutions that meet specific requirements and exceed expectations.</p>
						</div>
						<div className="value-card">
							<div className="value-icon">
								<FaCheckCircle size={32} />
							</div>
							<h3>Continuous Innovation</h3>
							<p>We embrace cutting-edge technologies and processes to stay ahead in the manufacturing industry and provide innovative solutions.</p>
						</div>
						<div className="value-card">
							<div className="value-icon">
								<FaCheckCircle size={32} />
							</div>
							<h3>Operational Reliability</h3>
							<p>Consistent performance and dependable delivery schedules make us a trusted partner for businesses across various industries.</p>
						</div>
						<div className="value-card">
							<div className="value-icon">
								<FaCheckCircle size={32} />
							</div>
							<h3>Environmental Responsibility</h3>
							<p>We integrate sustainable practices into our manufacturing processes, minimizing environmental impact while maintaining efficiency.</p>
						</div>
						<div className="value-card">
							<div className="value-icon">
								<FaCheckCircle size={32} />
							</div>
							<h3>Strategic Partnership</h3>
							<p>Building long-term relationships based on trust, transparency, and mutual growth with our clients and stakeholders.</p>
						</div>
						<div className="value-card">
							<div className="value-icon">
								<FaCheckCircle size={32} />
							</div>
							<h3>Safety First</h3>
							<p>Prioritizing workplace safety and employee well-being through comprehensive safety protocols and continuous training programs.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Manufacturing Partner Section */}
			<section className="section manufacturing-partner-section">
				<div className="container">
					<div className="partner-content">
						<div className="partner-header">
							<h2 className="partner-title">Looking for a Reliable Manufacturing Partner in India?</h2>
							<p className="partner-intro">
								We are IATF 16949:2016 certified and ISO 9001:2015 compliant, ensuring that every component we manufacture meets stringent international quality requirements — making us a reliable partner for OEMs and Tier-1 suppliers.
							</p>
							<p className="partner-description">
								Currently, we supply to customers in India and the USA, delivering competitive pricing, scalable capacity, and end-to-end support for diverse industrial needs.
							</p>
						</div>

						<div className="partner-features">
							<div className="feature-item">
								<div className="feature-icon">
									<FaAward size={24} />
								</div>
								<div className="feature-content">
									<h3>IATF 16949:2016 & ISO 9001:2015 Certified Quality Systems</h3>
								</div>
							</div>
							<div className="feature-item">
								<div className="feature-icon">
									<FaComments size={24} />
								</div>
								<div className="feature-content">
									<h3>Transparent Communication & Documentation</h3>
								</div>
							</div>
							<div className="feature-item">
								<div className="feature-icon">
									<FaTruck size={24} />
								</div>
								<div className="feature-content">
									<h3>Seamless Logistics & On-Time Delivery</h3>
								</div>
							</div>
							<div className="feature-item">
								<div className="feature-icon">
									<FaCog size={24} />
								</div>
								<div className="feature-content">
									<h3>Customization & Engineering Support</h3>
								</div>
							</div>
						</div>

						<div className="partner-cta">
							<h3 className="cta-title">Partner With Us. Manufacture With Confidence.</h3>
							<p className="cta-description">
								Reach out for RFQs, technical discussions, and capability presentations. Let's build long-term value — from India to the world.
							</p>
							<div className="cta-buttons">
								<Link to="/contact" className="btn primary">Get In Touch</Link>
								<Link to="/services" className="btn">View Capabilities</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default About 
