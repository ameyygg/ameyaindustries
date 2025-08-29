import { FaChevronRight } from 'react-icons/fa'
import { useState } from 'react'
import coverImageUrl from '../../images/cover page.png'
import pte1Img from '../../images/pte1.jpg'
import pte2Img from '../../images/pte2.jpg'
import pte3Img from '../../images/pte3.jpg'

const DesignCapabilitiesList = (): JSX.Element => {
	const [showAll, setShowAll] = useState(false)

	const allComponents = [
		{
			title: "CAD/CAM Proficiency",
			description: "Expertise in CATIA, SolidWorks, AutoCAD design"
		},
		{
			title: "Simulation & FEA",
			description: "Tool strength and material flow validation"
		},
		{
			title: "Reverse Engineering",
			description: "Component analysis and design recreation capabilities"
		},
		{
			title: "3D Modeling & Detailing",
			description: "Comprehensive modeling and technical detailing services"
		},
		{
			title: "BOM & Tool Cost Estimation",
			description: "Accurate material lists and cost projections"
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

const JigsFixturesList = (): JSX.Element => {
	const [showAll, setShowAll] = useState(false)

	const allComponents = [
		{
			title: "Welding Fixtures",
			description: "Repeatable and precise weld assembly solutions"
		},
		{
			title: "Machining Fixtures",
			description: "Holding parts during CNC operations securely"
		},
		{
			title: "Checking Fixtures",
			description: "Inspection processes for dimensional validation accuracy"
		},
		{
			title: "Assembly Jigs",
			description: "Precise component positioning and assembly guidance"
		},
		{
			title: "Drill Jigs",
			description: "Accurate hole drilling and positioning systems"
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

const StampingDiesList = (): JSX.Element => {
	const [showAll, setShowAll] = useState(false)

	const allComponents = [
		{
			title: "Progressive Dies",
			description: "High-volume precision part production across stages"
		},
		{
			title: "Compound Dies",
			description: "Combining multiple operations in one stroke"
		},
		{
			title: "Blanking & Piercing Dies",
			description: "Precision cutting and hole punching operations"
		},
		{
			title: "Bending Dies",
			description: "Accurate forming and bending operations"
		},
		{
			title: "Draw Dies",
			description: "Deep drawing and forming applications"
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

const PressToolEngineering = (): JSX.Element => {
	return (
		<>
			{/* Hero Section */}
			<section className="about-hero" style={{ backgroundImage: `url(${coverImageUrl})` }}>
				<div className="container">
					<h1>Press Tool Engineering</h1>
				</div>
			</section>

			{/* Stamping Dies Section */}
			<section className="section">
				<div className="container">
					<div className="centered-title-container">
						<h2 className="centered-title">Stamping Dies</h2>
					</div>
					<div className="stamped-components-grid">
						<div className="components-image">
							<img src={pte1Img} alt="Stamping Dies" className="automotive-components-image" />
						</div>
						<StampingDiesList />
					</div>
				</div>
			</section>

			{/* Jigs & Fixtures Section */}
			<section className="section">
				<div className="container">
					<div className="centered-title-container">
						<h2 className="centered-title">Jigs & Fixtures</h2>
					</div>
					<div className="roll-forming-grid">
						<JigsFixturesList />
						<div className="components-image">
							<img src={pte2Img} alt="Jigs & Fixtures" className="automotive-components-image" />
						</div>
					</div>
				</div>
			</section>

			{/* Design Capabilities Section */}
			<section className="section">
				<div className="container">
					<div className="centered-title-container">
						<h2 className="centered-title">Design Capabilities</h2>
					</div>
					<div className="stamped-components-grid">
						<div className="components-image">
							<img src={pte3Img} alt="Design Capabilities" className="automotive-components-image" />
						</div>
						<DesignCapabilitiesList />
					</div>
				</div>
			</section>
		</>
	)
}

export default PressToolEngineering
