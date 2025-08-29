import { FaChevronRight } from 'react-icons/fa'
import { useState } from 'react'
import coverImageUrl from '../../images/cover page.png'
import ha1Img from '../../images/ha1.jpg'
import ha2Img from '../../images/ha2.jpg'

const StampedComponentsList = (): JSX.Element => {
	const [showAll, setShowAll] = useState(false)

	const allComponents = [
		{
			title: "Washing Machine Mounting Brackets",
			description: "Securing drums and motors with precision"
		},
		{
			title: "Refrigerator Door Hinges",
			description: "Stamped hinges for smooth opening durability"
		},
		{
			title: "Microwave Oven Latch Plates",
			description: "Secure door locking mechanism components"
		},
		{
			title: "AC Compressor Brackets",
			description: "Robust mounting solutions for compressor units"
		},
		{
			title: "Fan Motor Mounts",
			description: "Stable mounting systems for motor assemblies"
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

const FabricatedAssembliesList = (): JSX.Element => {
	const [showAll, setShowAll] = useState(false)

	const allComponents = [
		{
			title: "Air Conditioner Panel Frames",
			description: "Structural frames for AC control panels"
		},
		{
			title: "Washing Machine Tub Supports",
			description: "Robust support systems for washing tubs"
		},
		{
			title: "Refrigerator Shelf Brackets",
			description: "Adjustable shelf mounting bracket systems"
		},
		{
			title: "Exhaust Hood Covers",
			description: "Protective covers for kitchen exhaust systems"
		},
		{
			title: "Water Purifier Mounting Frames",
			description: "Secure mounting solutions for purifier units"
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

const HomeAppliances = (): JSX.Element => {
	return (
		<>
			{/* Hero Section */}
			<section className="about-hero" style={{ backgroundImage: `url(${coverImageUrl})` }}>
				<div className="container">
					<h1>Home Appliances</h1>
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
							<img src={ha1Img} alt="Home Appliances Stamped Components" className="automotive-components-image" />
						</div>
						<StampedComponentsList />
					</div>
				</div>
			</section>

			{/* Fabricated Assemblies Section */}
			<section className="section">
				<div className="container">
					<div className="centered-title-container">
						<h2 className="centered-title">Fabricated Assemblies</h2>
					</div>
					<div className="roll-forming-grid">
						<FabricatedAssembliesList />
						<div className="components-image">
							<img src={ha2Img} alt="Home Appliances Fabricated Assemblies" className="automotive-components-image" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default HomeAppliances
