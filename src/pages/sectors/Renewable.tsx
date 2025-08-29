import { FaChevronRight } from 'react-icons/fa'
import { useState } from 'react'
import coverImageUrl from '../../images/cover page.png'
import rw1Img from '../../images/rw1.jpg'
import rw2Img from '../../images/rw2.jpg'
import rw3Img from '../../images/rw3.jpg'

const StampedComponentsList = (): JSX.Element => {
	const [showAll, setShowAll] = useState(false)

	const allComponents = [
		{
			title: "Mounting Clips",
			description: "Securing solar panel frames and components"
		},
		{
			title: "Cable Management Brackets",
			description: "Used in solar and wind installations"
		},
		{
			title: "Electrical Enclosure Plates",
			description: "Protective plates for electrical enclosure systems"
		},
		{
			title: "Sensor Brackets",
			description: "Mounting solutions for renewable energy sensors"
		},
		{
			title: "Inverter Mounting Plates",
			description: "Secure mounting plates for inverter systems"
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
			{allComponents.length > 5 && (
				<button 
					onClick={() => setShowAll(!showAll)}
					className="view-more-button"
				>
					{showAll ? 'View Less' : 'View More'}
				</button>
			)}
		</div>
	)
}

const SheetMetalFabricationList = (): JSX.Element => {
	const [showAll, setShowAll] = useState(false)

	const allComponents = [
		{
			title: "Solar Panel Support Frames",
			description: "Fabricated frames for rooftop and ground-mount"
		},
		{
			title: "Wind Turbine Control Cabinets",
			description: "Control cabinet enclosures for wind systems"
		},
		{
			title: "Inverter Enclosures",
			description: "Protective enclosures for inverter equipment systems"
		},
		{
			title: "Battery Storage Housing",
			description: "Secure housing solutions for battery storage"
		}
	]

	const visibleComponents = showAll ? allComponents : allComponents.slice(0, 4)

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
			{allComponents.length > 4 && (
				<button 
					onClick={() => setShowAll(!showAll)}
					className="view-more-button"
				>
					{showAll ? 'View Less' : 'View More'}
				</button>
			)}
		</div>
	)
}

const MachinedComponentsList = (): JSX.Element => {
	const [showAll, setShowAll] = useState(false)

	const allComponents = [
		{
			title: "Generator Mounting Hubs",
			description: "Precision machined for wind turbine systems"
		},
		{
			title: "Shaft Couplings for Solar Trackers",
			description: "Precision couplings for solar tracking systems"
		},
		{
			title: "Connector Plates for Battery Racks",
			description: "Connection plates for battery rack assemblies"
		},
		{
			title: "Machined Bushings for Structural Assemblies",
			description: "Precision bushings for structural assembly systems"
		}
	]

	const visibleComponents = showAll ? allComponents : allComponents.slice(0, 4)

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
			{allComponents.length > 4 && (
				<button 
					onClick={() => setShowAll(!showAll)}
					className="view-more-button"
				>
					{showAll ? 'View Less' : 'View More'}
				</button>
			)}
		</div>
	)
}

const Renewable = (): JSX.Element => {
	return (
		<>
			{/* Hero Section */}
			<section className="about-hero" style={{ backgroundImage: `url(${coverImageUrl})` }}>
				<div className="container">
					<h1>Renewable Energy</h1>
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
							<img src={rw1Img} alt="Renewable Energy Stamped Components" className="automotive-components-image" />
						</div>
						<StampedComponentsList />
					</div>
				</div>
			</section>

			{/* Sheet Metal Fabrication Section */}
			<section className="section">
				<div className="container">
					<div className="centered-title-container">
						<h2 className="centered-title">Sheet Metal Fabrication</h2>
					</div>
					<div className="roll-forming-grid">
						<SheetMetalFabricationList />
						<div className="components-image">
							<img src={rw2Img} alt="Renewable Energy Sheet Metal Fabrication" className="automotive-components-image" />
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
					<div className="stamped-components-grid">
						<div className="components-image">
							<img src={rw3Img} alt="Renewable Energy Machined Components" className="automotive-components-image" />
						</div>
						<MachinedComponentsList />
					</div>
				</div>
			</section>
		</>
	)
}

export default Renewable
