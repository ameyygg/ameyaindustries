import { FaChevronRight } from 'react-icons/fa'
import { useState } from 'react'
import coverImageUrl from '../../images/cover page.png'
import automotiveImg from '../../images/automotive.jpg'
import rollFormingImg from '../../images/roll-forming.jpg'
import fabricationImg from '../../images/fabrication-assembly.webp'
import machinedImg from '../../images/machined-components.jpg'

const StampedComponentsList = (): JSX.Element => {
	const [showAll, setShowAll] = useState(false)

	const allComponents = [
		{
			title: "Bracket Reinforcements",
			description: "Strengthen automotive structural connections"
		},
		{
			title: "Engine Mounting Brackets",
			description: "Secure engine to chassis systems"
		},
		{
			title: "Footrest Components",
			description: "Ergonomic comfort for vehicle occupants"
		},
		{
			title: "Spare Wheel Mounting Components",
			description: "Secure spare wheel storage solutions"
		},
		{
			title: "Seating Components",
			description: "Structural seat frame safety elements"
		},
		{
			title: "Chassis Components",
			description: "Critical vehicle backbone structural elements"
		},
		{
			title: "Exhaust Systems",
			description: "Heat-resistant exhaust assembly components"
		},
		{
			title: "Spring Retainers",
			description: "Secure suspension spring positioning clips"
		},
		{
			title: "Bumper Mounting Plates",
			description: "Reinforced bumper attachment point plates"
		},
		{
			title: "Pedal Brackets",
			description: "Secure pedal assembly mounting brackets"
		},
		{
			title: "Axle Bearing Housings",
			description: "Protective bearing support structural casings"
		}
	]

	const visibleComponents = showAll ? allComponents : allComponents.slice(0, 6)

	return (
		<div className="components-list">
			{visibleComponents.map((component, index) => (
				<div key={index} className="component-item">
					<FaChevronRight size={16} className="component-icon" />
					<div className="component-content">
						<h4>{component.title}</h4>
						<p>{component.description}</p>
					</div>
				</div>
			))}
			<button
				onClick={() => setShowAll(!showAll)}
				className="view-more-button"
			>
				{showAll ? 'View Less' : 'View More'}
			</button>
		</div>
	)
}

const MachinedComponentsList = (): JSX.Element => {
	const [showAll, setShowAll] = useState(false)

	const allComponents = [
		{
			title: "Brake Pedal Pivot Brackets",
			description: "Supports brake pedal movement with stability"
		},
		{
			title: "Battery Tray Holders",
			description: "Mounting component for securing battery systems"
		},
		{
			title: "Exhaust Brackets",
			description: "Supports exhaust system with durability focus"
		},
		{
			title: "Seat Frame Supports",
			description: "Metal supports for automotive seat alignment"
		},
		{
			title: "Gear Linkage Rods",
			description: "Components linking gear levers to transmission"
		},
		{
			title: "Engine Cover Mounting Brackets",
			description: "Simple mounting brackets for engine covers"
		},
		{
			title: "Alternator Mount Brackets",
			description: "Holds alternator with structural machining requirements"
		},
		{
			title: "Suspension Spring Perches",
			description: "Parts holding coil springs in suspension"
		},
		{
			title: "Hood Latch Supports",
			description: "Mounts supporting hood latch mechanism strength"
		},
		{
			title: "Windshield Wiper Motor Mounts",
			description: "Brackets securing windshield wiper motor systems"
		},
		{
			title: "Heat Shield Mounting Clips",
			description: "Holds heat shields in engine compartment"
		}
	]

	const visibleComponents = showAll ? allComponents : allComponents.slice(0, 5)

	return (
		<div className="components-list">
			{visibleComponents.map((component, index) => (
				<div key={index} className="component-item">
					<FaChevronRight size={16} className="component-icon" />
					<div className="component-content">
						<h4>{component.title}</h4>
						<p>{component.description}</p>
					</div>
				</div>
			))}
			<button
				onClick={() => setShowAll(!showAll)}
				className="view-more-button"
			>
				{showAll ? 'View Less' : 'View More'}
			</button>
		</div>
	)
}

const Automotive = (): JSX.Element => {
	return (
		<>
			{/* Hero Section */}
			<section className="about-hero" style={{ backgroundImage: `url(${coverImageUrl})` }}>
				<div className="container">
					<h1>Automotive Sector</h1>
				</div>
			</section>

			{/* Stamped Components Section */}
			<section className="section">
				<div className="container">
					<div className="centered-title-container">
						<h2 className="centered-title">Stamped Components</h2>
					</div>
					<div className="stamped-components-grid">
						<div className="components-image">
							<img src={automotiveImg} alt="Automotive Components" className="automotive-components-image" />
						</div>
						<StampedComponentsList />
					</div>
				</div>
			</section>

			{/* Roll Forming and Stamping Section */}
			<section className="section">
				<div className="container">
					<div className="centered-title-container">
						<h2 className="centered-title">Roll Forming and Stamping</h2>
					</div>
					<div className="roll-forming-grid">
						<div className="components-list">
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									<h4>Power Window Components</h4>
									<p>Precision rails and guide mechanisms</p>
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									<h4>Sunroof Components</h4>
									<p>Structural frame and sliding mechanisms</p>
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									<h4>Door Frame Channels</h4>
									<p>Weather-sealed structural door frameworks</p>
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									<h4>Roof Rail Systems</h4>
									<p>Integrated cargo and accessory mounting</p>
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									<h4>Window Regulator Tracks</h4>
									<p>Smooth window operation guide systems</p>
								</div>
							</div>
						</div>
						<div className="components-image">
							<img src={rollFormingImg} alt="Roll Forming Components" className="automotive-components-image" />
						</div>
					</div>
				</div>
			</section>

			{/* Fabrication, Welding and Assembly Section */}
			<section className="section">
				<div className="container">
					<div className="centered-title-container">
						<h2 className="centered-title">Fabrication, Welding and Assembly</h2>
					</div>
					<div className="stamped-components-grid">
						<div className="components-image">
							<img src={fabricationImg} alt="Fabrication and Assembly Components" className="automotive-components-image" />
						</div>
						<div className="components-list">
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									<h4>Footrest Assembly</h4>
									<p>Complete ergonomic footrest mounting systems</p>
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									<h4>Power Window Assembly</h4>
									<p>Integrated window mechanism complete units</p>
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									<h4>Sunroof Assembly</h4>
									<p>Complete sunroof structural assembly systems</p>
								</div>
							</div>
							<div className="component-item">
								<FaChevronRight size={16} className="component-icon" />
								<div className="component-content">
									<h4>Spare Wheel Mounting Assembly</h4>
									<p>Complete spare wheel storage solutions</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Machined Components Section */}
			<section className="section">
				<div className="container">
					<div className="centered-title-container">
						<h2 className="centered-title">Machined Components</h2>
					</div>
					<div className="roll-forming-grid">
						<MachinedComponentsList />
						<div className="components-image">
							<img src={machinedImg} alt="Machined Components" className="automotive-components-image" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Automotive
