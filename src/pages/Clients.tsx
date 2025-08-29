import { Link } from 'react-router-dom'
import coverImageUrl from '../images/cover page.png'
import coverImg2 from '../images/cover-img-2.jpeg'
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

const Clients = () => {
	const clientLogos = [L1, L2, L3, L4, L5, L6, L7, L8, L9]
	const assignmentLogos = [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12]

	return (
		<div>
			{/* Hero Section */}
			<section className="about-hero" style={{ backgroundImage: `url(${coverImageUrl})` }}>
				<div className="container">
					<h1>Clients</h1>
				</div>
			</section>

			{/* Clients Content Section */}
			<section className="section">
				<div className="container">
					<div style={{ textAlign: 'center' }}>
						<div className="centered-title-container" style={{ marginBottom: '20px' }}>
							<h2 className="centered-title">Building Stronger Partnerships Across Industries!</h2>
						</div>
						<p className="story-text" style={{ maxWidth: '900px', margin: '0 auto 60px', textAlign: 'center', fontSize: '1.1rem', lineHeight: '1.7' }}>
							We proudly serve a diverse clientele across domestic and international markets, spanning industries such as Automotive, Press Tool Engineering, Home Appliances, Agriculture, Renewable Energy, and Earth Moving Equipment. Through our comprehensive services including precision stamping, tooling, laser cutting, welding, CNC bending, and CMM inspection, we deliver tailored solutions that meet unique challenges and drive success. By fostering trust and collaboration, we empower our clients to achieve sustainable growth and leadership in their fields.
						</p>

						{/* Our Clients Section */}
						<div style={{ marginBottom: '80px' }}>
							<div className="centered-title-container" style={{ marginBottom: '40px' }}>
								<h2 className="centered-title" style={{ fontSize: '2rem' }}>Our Clients</h2>
							</div>
							<div className="clients-grid">
								{clientLogos.map((logo, index) => (
									<div key={index} className="client-logo-card">
										<img src={logo} alt={`Client ${index + 1}`} className="client-logo-static" />
									</div>
								))}
							</div>
						</div>

						{/* Assignment Through Clients Section */}
						<div>
							<div className="centered-title-container" style={{ marginBottom: '40px' }}>
								<h2 className="centered-title" style={{ fontSize: '2rem' }}>Assignment Through Clients</h2>
							</div>
							<div className="clients-grid">
								{assignmentLogos.map((logo, index) => (
									<div key={index} className="client-logo-card">
										<img src={logo} alt={`Assignment Client ${index + 1}`} className="client-logo-static" />
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Achieving Manufacturing Excellence Section */}
			<section className="band band--cover band--fixed" style={{ backgroundImage: `url(${coverImageUrl})` }}>
				<div className="container">
					<div style={{ textAlign: 'center', padding: '80px 0' }}>
						<div className="centered-title-container" style={{ marginBottom: '20px' }}>
							<h2 className="band-title" style={{ color: 'white', fontSize: '2.5rem', fontWeight: '700' }}>Achieving Manufacturing Excellence</h2>
						</div>
						<p style={{ color: 'rgba(255, 255, 255, 0.9)', maxWidth: '600px', margin: '0 auto 40px', fontSize: '1.1rem', lineHeight: '1.6' }}>
							At Ameya Industries, we are dedicated to delivering precision sheet metal components that adhere to the highest quality and environmental standards. Our IATF 16949:2016 and ISO 9001:2015 certified manufacturing processes are designed to meet the needs and expectations of all stakeholders, balancing sustainability with superior performance.
						</p>
						<Link to="/about" className="btn primary" style={{ fontSize: '1rem', padding: '12px 24px' }}>
							READ ABOUT AMEYA
						</Link>
					</div>
				</div>
			</section>

			{/* Committed to a Global Mission Section */}
			<section className="section">
				<div className="container">
					<div className="about-story-grid">
						<div className="story-content">
							<div className="centered-title-container" style={{ marginBottom: '20px' }}>
								<h2 className="centered-title" style={{ textAlign: 'left', fontSize: '2.2rem' }}>Committed to a Global Mission</h2>
							</div>
							<p className="story-text" style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '20px' }}>
								At Ameya Industries, we are dedicated to delivering world-class precision sheet metal components that adhere to the highest quality and environmental standards. Our IATF 16949:2016 certified manufacturing processes are designed to meet the needs and expectations of all stakeholders, balancing sustainability with superior performance across automotive, agriculture, renewable energy, and other critical industries.
							</p>
							<div style={{ display: 'flex', gap: '16px', marginTop: '30px' }}>
								<Link to="/about" className="btn" style={{ fontSize: '0.9rem', padding: '10px 20px' }}>
									ABOUT AMEYA
								</Link>
								<Link to="/services/sheet-metal-stamping" className="btn primary" style={{ fontSize: '0.9rem', padding: '10px 20px' }}>
									OUR SERVICES
								</Link>
							</div>
						</div>
						<div className="story-media">
							<div className="image-container">
								<img src={coverImg2} alt="Global Mission" className="story-image" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Clients 
