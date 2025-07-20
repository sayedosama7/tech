const Contact = () => {
	return (
		<section className="contact-section bg-light py-5 section-scroll-offset" id="contact">
			<div className="container">
				<div className="text-center mb-5">
					<h2 className="fw-bold">Contact Us</h2>
					<p className="text-muted w-75 mx-auto">
						Have a question or want to work with us? Send us a
						message!
					</p>
				</div>

				<div className="row">
					{/* Contact Info */}
					{/* <div className="col-md-5 mb-4">
						<h4 className="mb-4 fw-semibold">Get in Touch</h4>
						<p>
							<strong>Phone:</strong>{' '}
							<a href="tel:01210304516">0123456789</a>
						</p>
						<p>
							<strong>Email:</strong>{' '}
							<a href="mailto:sayedosam9@gmail.com">
								company@gmail.com
							</a>
						</p>
						<p>
							<strong>Address:</strong> Zagazig , Sharkia, Egypt
						</p>
						<div className="mt-4">
							<h6 className="fw-semibold mb-2">Follow us:</h6>
							<div className="d-flex gap-3">
								<a href="#">
									<i className="fab fa-facebook fa-lg"></i>
								</a>
								<a href="#">
									<i className="fab fa-linkedin fa-lg"></i>
								</a>
								<a href="#">
									<i className="fab fa-twitter fa-lg"></i>
								</a>
								<a href="#">
									<i className="fab fa-github fa-lg"></i>
								</a>
							</div>
						</div>
					</div> */}

					{/* Contact Form */}
					<div className="col-md-8 m-auto">
						<form>
							<div className="row">
								<div className="col-md-6 mb-3">
									<input
										type="text"
										className="form-control"
										placeholder="Your Name"
										required
									/>
								</div>
								<div className="col-md-6 mb-3">
									<input
										type="email"
										className="form-control"
										placeholder="Your Email"
										required
									/>
								</div>
							</div>
							<div className="mb-3">
								<input
									type="text"
									className="form-control"
									placeholder="phone"
									required
								/>
							</div>
							<div className="mb-3">
								<textarea
									className="form-control"
									rows="5"
									placeholder="Your Message"
									required
								></textarea>
							</div>
							<button
								type="submit"
								className="btn btn-primary px-4 d-block m-auto"
							>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
