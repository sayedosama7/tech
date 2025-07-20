import React from 'react';

const AboutUs = () => {
	return (
		<section className="about-section py-lg-5 py-2 section-scroll-offset" id="about">
			<div className="container-fluid">
				{/* Header */}
				<div className="text-center who-we mb-5">
					<div className="caption">
						<h2 className="fw-bold">Who We Are</h2>
						<p>
							We are a passionate software development company
							focused on building powerful, scalable, and
							user-friendly digital solutions for clients across
							industries.
						</p>
					</div>
				</div>

				{/* Why Choose Us */}
				<div className="text-center mb-5">
					<h3 className="fw-bold mb-4">Why Choose Us?</h3>
					<div className="row">
						{[
							{
								icon: '🚀',
								title: 'Fast Delivery',
								desc: 'We deliver projects on time without compromising quality.',
							},
							{
								icon: '💡',
								title: 'Creative Team',
								desc: 'Innovative minds that turn your ideas into real digital products.',
							},
							{
								icon: '🔒',
								title: 'Secure Code',
								desc: 'We write clean, scalable, and secure code.',
							},
							{
								icon: '🤝',
								title: 'Ongoing Support',
								desc: 'We build lasting relationships and support you at every step.',
							},
						].map((item, idx) => (
							<div className="col-md-3 mb-4" key={idx}>
								<div className="card border-0 shadow-sm h-100 p-3">
									<div className="fs-1">{item.icon}</div>
									<h5 className="mt-3 fw-semibold">
										{item.title}
									</h5>
									<p className="text-muted">{item.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
