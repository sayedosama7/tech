import React from 'react';

const HeroSection = () => {
	return (
		<div className="hero-section mt-5 pt-4">
			<div className="container">
				<div className="row">
					<div className="col-md-6 mb-3 hero-section-caption d-flex flex-column justify-content-center align-items-lg-start align-items-center">
						<h2 className="wow fadeInUp">Your Vision, Our Code</h2>
						<p className="wow fadeInUp" data-wow-delay=".2s">
							We turn your ideas into scalable, innovative digital
							products.
						</p>
						<div className="d-flex justify-content-between align-items-center gap-2 mt-lg-4 mt-1">
							<button
								type="button"
								className="btn btn-primary"
								onClick={() => {
									const section =
										document.getElementById('projects');
									if (section) {
										section.scrollIntoView({
											behavior: 'smooth',
										});
									}
								}}
							>
								Our Works
							</button>
							<button
								type="button"
								className="btn btn-outline-primary"
								onClick={() => {
									const section =
										document.getElementById('contact');
									if (section) {
										section.scrollIntoView({
											behavior: 'smooth',
										});
									}
								}}
							>
								Join Us
							</button>
						</div>
					</div>
					<div className="col-md-6 wow fadeInUp">
						<img
							className="img-fluid"
							src="./hero-section.jpg"
							alt="hero-img"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
