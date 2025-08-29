import { FaChevronRight } from 'react-icons/fa'
import coverImageUrl from '../../images/cover page.png'

const PressToolDesign = () => {
	return (
		<div>
			{/* Hero Section */}
			<section className="about-hero" style={{ backgroundImage: `url(${coverImageUrl})` }}>
				<div className="container">
					<h1>Press Tool Design & Manufacturing</h1>
				</div>
			</section>

			{/* Press Tool Design Content Section */}
			<section className="section">
				<div className="container">
					<div className="story-content">
						<p className="story-subtitle">Engineering Excellence</p>
						<h2>Press Tool Design & Manufacturing</h2>
						<p className="story-text">
							Ameya Industries excels in the precision design and manufacturing of dies, tools, and jigs that are critical to modern sheet metal and manufacturing operations. Our in-house tool room is equipped with the latest CNC machines, EDM, wire-cut, and surface grinders to develop tools that ensure consistent, high-volume production and minimal downtime.
						</p>

						<h3>Our Expertise</h3>
						<div className="components-list">
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									Progressive, compound, and forming dies
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									Fixtures, jigs, and gauges for production support
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									CAD/CAM based design for rapid development and revisions
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									Reverse engineering of dies and tools for legacy components
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									Tool validation with trials and full documentation
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									Tool maintenance and refurbishment services
								</div>
							</div>
						</div>

						<h3>Capabilities</h3>
						<div className="components-list">
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									Precision machining with ±0.01mm tolerance
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									3D tool design and simulation
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									Die spotting presses and trial presses
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									Standardization for interchangeability and longevity
								</div>
							</div>
						</div>

						<h3>Industries Served</h3>
						<div className="components-list">
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									Automotive and Off-Highway Vehicles
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									Electrical Panels and Switchgear
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									Industrial Machinery and Equipment
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									Consumer Goods and Appliances
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default PressToolDesign
