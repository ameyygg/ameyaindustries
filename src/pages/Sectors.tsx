const Sectors = (): JSX.Element => {
	return (
		<section className="section">
			<div className="container">
				<h2>Sectors We Serve</h2>
				<p style={{ color: 'var(--muted)', marginTop: 8 }}>
					We support OEMs and tier suppliers across automotive and adjacent industries.
				</p>
				<ul style={{ marginTop: 12 }}>
					<li>Passenger and commercial vehicles</li>
					<li>EV platforms and battery assemblies</li>
					<li>Industrial equipment</li>
					<li>Consumer durable components</li>
				</ul>
			</div>
		</section>
	)
}

export default Sectors 
