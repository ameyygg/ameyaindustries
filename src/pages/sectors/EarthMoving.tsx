import { FaChevronRight } from 'react-icons/fa'
import { useState } from 'react'
import coverImageUrl from '../../images/cover page.png'
import em1Img from '../../images/em1.jpg'
import em2Img from '../../images/em2.jpg'
import em3Img from '../../images/em3.jpg'

const StampedComponentsList = (): JSX.Element => {
	const [showAll, setShowAll] = useState(false)

	const allComponents = [
		{
			title: "Reinforcement Brackets",
			description: "Used in cabins and structural supports"
		},
		{
			title: "Mounting Clips for Hoses and Cables",
			description: "Secure mounting solutions for hoses cables"
		},
		{
			title: "Cover Plates and Shields",
			description: "Protective covers and shield plate systems"
		},
		{
			title: "Exhaust System Brackets",
			description: "Robust mounting brackets for exhaust systems"
		},
		{
			title: "Seat Mounting Plates",
			description: "Secure mounting plates for operator seats"
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
			title: "Operator Cabin Structures",
			description: "Fabricated structures for operator cabin systems"
		},
		{
			title: "Engine Housings and Covers",
			description: "Protective housings and covers for engines"
		},
		{
			title: "Protective Guards and Panels",
			description: "Safety guards and protective panel systems"
		},
		{
			title: "Tool Boxes and Battery Covers",
			description: "Storage boxes and battery cover solutions"
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
			title: "Pivot Pins and Bushes",
			description: "Critical for moving arms and joints"
		},
		{
			title: "Mounting Flanges",
			description: "Precision flanges for secure mounting applications"
		},
		{
			title: "Hydraulic Cylinder End Fittings",
			description: "End fittings for hydraulic cylinder systems"
		},
		{
			title: "Steering Knuckles and Brackets",
			description: "Steering components and mounting bracket systems"
		},
		{
			title: "Loader Arm Linkages",
			description: "Precision linkages for loader arm assemblies"
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

const EarthMoving = (): JSX.Element => {
	return (
		<>
			{/* Hero Section */}
			<section className="about-hero" style={{ backgroundImage: `url(${coverImageUrl})` }}>
				<div className="container">
					<h1>Earth Moving Equipment</h1>
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
							<img src={em1Img} alt="Earth Moving Stamped Components" className="automotive-components-image" />
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
							<img src={em2Img} alt="Earth Moving Sheet Metal Fabrication" className="automotive-components-image" />
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
							<img src={em3Img} alt="Earth Moving Machined Components" className="automotive-components-image" />
						</div>
						<MachinedComponentsList />
					</div>
				</div>
			</section>
		</>
	)
}

export default EarthMoving
