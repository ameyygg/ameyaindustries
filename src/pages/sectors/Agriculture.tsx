import { FaChevronRight } from 'react-icons/fa'
import { useState } from 'react'
import coverImageUrl from '../../images/cover page.png'
import ag1Img from '../../images/ag1.jpg'
import ag2Img from '../../images/ag2.jpg'
import ag3Img from '../../images/ag3.jpg'

const StampedComponentsList = (): JSX.Element => {
	const [showAll, setShowAll] = useState(false)

	const allComponents = [
		{
			title: "Mounting Brackets",
			description: "Supporting equipment on tractors and tillers"
		},
		{
			title: "Linkage Plates",
			description: "Used in transmission and control linkages"
		},
		{
			title: "Tiller Blade Supports",
			description: "Robust support systems for tiller blades"
		},
		{
			title: "Reinforcement Brackets for Housings",
			description: "Structural reinforcement for equipment housings"
		},
		{
			title: "Spacer Plates",
			description: "Used between housing units for spacing"
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

const SheetMetalStampingList = (): JSX.Element => {
	const [showAll, setShowAll] = useState(false)

	const allComponents = [
		{
			title: "Housing Covers",
			description: "Covers for gearboxes and motor systems"
		},
		{
			title: "Chain Guards",
			description: "Protective metal guards for chain drives"
		},
		{
			title: "Reinforcement Flanges",
			description: "Structural flanges for equipment reinforcement"
		},
		{
			title: "Plate Connectors for Implements",
			description: "Connection plates for agricultural implement systems"
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

const SheetMetalFabricationList = (): JSX.Element => {
	const [showAll, setShowAll] = useState(false)

	const allComponents = [
		{
			title: "Equipment Housings",
			description: "Fabricated enclosures for motors and drives"
		},
		{
			title: "Tool Carrier Plates",
			description: "Mounting plates for agricultural tool carriers"
		},
		{
			title: "Seed Drill Frames",
			description: "Structural frames for seed drilling equipment"
		},
		{
			title: "Hydraulic Tank Mounts",
			description: "Secure mounting systems for hydraulic tanks"
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

const Agriculture = (): JSX.Element => {
	return (
		<>
			{/* Hero Section */}
			<section className="about-hero" style={{ backgroundImage: `url(${coverImageUrl})` }}>
				<div className="container">
					<h1>Agriculture Sector</h1>
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
							<img src={ag1Img} alt="Agriculture Stamped Components" className="automotive-components-image" />
						</div>
						<StampedComponentsList />
					</div>
				</div>
			</section>

			{/* Sheet Metal Stamping Section */}
			<section className="section">
				<div className="container">
					<div className="centered-title-container">
						<h2 className="centered-title">Sheet Metal Stamping</h2>
					</div>
					<div className="roll-forming-grid">
						<SheetMetalStampingList />
						<div className="components-image">
							<img src={ag2Img} alt="Agriculture Sheet Metal Stamping" className="automotive-components-image" />
						</div>
					</div>
				</div>
			</section>

			{/* Sheet Metal Fabrication Section */}
			<section className="section">
				<div className="container">
					<div className="centered-title-container">
						<h2 className="centered-title">Sheet Metal Fabrication</h2>
					</div>
					<div className="stamped-components-grid">
						<div className="components-image">
							<img src={ag3Img} alt="Agriculture Sheet Metal Fabrication" className="automotive-components-image" />
						</div>
						<SheetMetalFabricationList />
					</div>
				</div>
			</section>
		</>
	)
}

export default Agriculture
