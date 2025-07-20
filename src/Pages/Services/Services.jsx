const projectData = [
	{
		title: 'Small E-commerce',
		desc: 'Fast and scalable online stores.',
		icon: '🛒',
	},
	{
		title: 'Tourism Platform',
		desc: 'Tour booking systems with maps and payments.',
		icon: '🌍',
	},
	{
		title: 'Landing Page',
		desc: 'High-converting product landing pages.',
		icon: '📄',
	},
	{
		title: 'ERP System',
		desc: 'Manage your entire business in one system.',
		icon: '📊',
	},
	{
		title: 'Company Profile',
		desc: 'Present your brand online professionally.',
		icon: '🏢',
	},
	{
		title: 'POS System',
		desc: 'Sell in-store with inventory tracking.',
		icon: '💳',
	},
];

const Services = () => {
	return (
		<section className="py-5 bg-light section-scroll-offset" id="services">
			<div className="container">
				<h2 className="text-center mb-4">Explore Our Services</h2>
				<div className="row">
					{projectData.map((proj, idx) => {
						return (
							<div className="col-md-4 mb-4" key={idx}>
								<div className="card h-100 shadow rounded-5 text-center p-3 border-0">
									<div className="fs-1 mb-3 wow animate__animated animate__fadeInUp">
										{proj.icon}
									</div>
									<h5 className="card-title wow animate__animated animate__fadeInUp">
										{proj.title}
									</h5>
									<p className="card-text text-muted wow animate__animated animate__fadeInUp">
										{proj.desc}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Services;
