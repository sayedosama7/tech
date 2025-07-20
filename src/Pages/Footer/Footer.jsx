const Footer = () => {
	return (
		<footer className="bg-dark text-white py-4">
			<div className="container text-center">
				<h5 className="mb-2">Tech Company</h5>
				<p className="mb-3 small">
					Empowering businesses with smart digital solutions.
				</p>

				<div className="d-flex justify-content-center gap-3 mb-3">
					<a href="#" className="text-white text-decoration-none">
						<i className="fab fa-facebook"></i>
					</a>
					<a href="#" className="text-white text-decoration-none">
						<i className="fab fa-linkedin"></i>
					</a>
					<a href="#" className="text-white text-decoration-none">
						<i className="fab fa-twitter"></i>
					</a>
					<a href="#" className="text-white text-decoration-none">
						<i className="fab fa-whatsapp"></i>
					</a>
				</div>

				<p className="mb-0 small">
					&copy; {new Date().getFullYear()} Tech Company Tech. All
					rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
