import { FaChevronRight } from 'react-icons/fa'
import coverImageUrl from '../../images/cover page.png'

const SheetMetalStamping = () => {
	return (
		<div>
			{/* Hero Section */}
			<section className="about-hero" style={{ backgroundImage: `url(${coverImageUrl})` }}>
				<div className="container">
					<h1>Sheet Metal Stamping</h1>
				</div>
			</section>

			{/* Sheet Metal Stamping Content Section */}
			<section className="section">
				<div className="container">
					<div className="story-content">
						<p className="story-subtitle">Advanced Manufacturing Solutions</p>
						<h2>Sheet Metal Stamping Excellence</h2>
						<p className="story-text">
							Ameya Industries specializes in delivering advanced sheet metal stamping solutions for a wide range of industries that demand high levels of precision, durability, and performance. With over a decade of proven expertise and continuous investment in state-of-the-art technology, we provide comprehensive stamping services that are optimized for both small-batch prototyping and full-scale production.
						</p>
						<p className="story-text">
							Our stamping operations are supported by a skilled workforce, robust quality management systems, and flexible engineering capabilities that allow us to respond to complex design requirements and evolving client needs. From automotive to electrical, construction to industrial equipment — our sheet metal parts are manufactured to meet international standards, ensuring consistency, accuracy, and longevity.
						</p>
						<p className="story-text">
							We take pride in offering customer-specific customization, timely deliveries, and sustainable processes that reduce waste and environmental impact. At every step, our focus remains on delivering components that don't just meet expectations — but raise the benchmark for quality and performance.
						</p>

						<h3>How It Works</h3>
						<p className="story-text">
							Sheet metal stamping at Ameya Industries involves feeding flat sheet metal into stamping presses, where Tool and dies form the material into precise shapes through punching, blanking, bending, and embossing operations. With automated and manual setups, we accommodate both small prototypes and large-volume production with tight tolerances.
						</p>

						<h3>Key Features</h3>
						<div className="components-list">
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									High-speed progressive die stamping
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									Press capacity ranging from 20T to 350T
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									Capability to process a wide range of metals including steel, aluminum, and alloys
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									Short lead times and rapid prototyping support
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									ISO-compliant quality control systems
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									Custom Tool and in-house maintenance for continuous production
								</div>
							</div>
						</div>

						<h3>Machine Specifications</h3>
						<div className="components-list">
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									<strong>Mechanical and Hydraulic Presses:</strong> 20T to 350T
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									<strong>Feeding Line:</strong> Servo feeders and decoilers
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									<strong>Die Manufacturing:</strong> In-house die design and fabrication
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									<strong>Secondary Operations:</strong> Spot welding, tapping, and assembly support
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default SheetMetalStamping
