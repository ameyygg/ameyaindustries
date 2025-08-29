const Services = (): JSX.Element => {
	return (
		<section className="section">
			<div className="container">
				<h2>Our Services</h2>
				<div className="cards" style={{ marginTop: 12 }}>
					<div className="card">
						<h3>Automobile Pressing</h3>
						<p>Progressive, transfer, and single-hit operations with SPC and PPAP documentation.</p>
					</div>
					<div className="card">
						<h3>Tool Design & Fabrication</h3>
						<p>Die design, fabrication, and maintenance; quick response on trials and ECRs.</p>
					</div>
					<div className="card">
						<h3>Value-Add Assemblies</h3>
						<p>Spot/MIG welding, clinching, tapping, riveting, and sub-assembly lines.</p>
					</div>
					<div className="card">
						<h3>Quality Lab</h3>
						<p>3D CMM, gauges, in-line Poka-Yoke, PFMEA/APQP, and traceability systems.</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services 
