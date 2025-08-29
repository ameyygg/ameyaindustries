import { FaChevronRight } from 'react-icons/fa'
import coverImageUrl from '../../images/cover page.png'

const SheetMetalFabrication = () => {
	return (
		<div>
			{/* Hero Section */}
			<section className="about-hero" style={{ backgroundImage: `url(${coverImageUrl})` }}>
				<div className="container">
					<h1>Sheet Metal Fabrication</h1>
				</div>
			</section>

			{/* Sheet Metal Fabrication Content Section */}
			<section className="section">
				<div className="container">
					<div className="story-content">
						<p className="story-subtitle">Advanced Manufacturing Solutions</p>
						<h2>Sheet Metal Laser Cutting and Fabrication</h2>
						<p className="story-text">
							At Ameya Industries, we offer complete sheet metal fabrication services tailored to meet the demanding specifications of various industries. From initial concept and prototyping to full-scale production, we utilize advanced equipment and techniques to fabricate high-quality components. Our solutions are built on precision, durability, and fast turnaround times — enabling our clients to succeed in fast-paced, competitive markets.
						</p>

						<h3>Fabrication Capabilities</h3>
						<div className="components-list">
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									Laser cutting, plasma cutting, and shearing
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									CNC bending and punching
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									Welding (TIG, MIG, Spot)
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									Fastening, riveting, and sub-assembly
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									Powder coating and surface treatments
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									Custom jigs and fixture support
								</div>
							</div>
						</div>

						<h3>Industries Served</h3>
						<div className="components-list">
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									Automotive and Commercial Vehicles
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									Construction and Infrastructure
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									Electrical Panels and Enclosures
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									Home Appliances and Furniture
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									Renewable Energy and Industrial Equipment
								</div>
							</div>
						</div>

						<h3>Machine Specifications</h3>
						<div className="components-list">
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									<strong>Laser Cutting:</strong> Up to 6kW power, 20mm thickness
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									<strong>CNC Bending:</strong> Up to 3m length, ±0.2mm accuracy
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									<strong>Welding:</strong> TIG, MIG stations with robotic welding option
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									<strong>Assembly:</strong> Pneumatic & hydraulic tool stations
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default SheetMetalFabrication
