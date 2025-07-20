import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();
		emailjs
			.sendForm(
				'service_0dtxjyi',
				'template_utgseh6',
				form.current,
				'dg2DyxEt1uOo6GFBH'
			)
			.then(
				result => {
					console.log(result.text);
					toast.success('Message sent successfully!');
					e.target.reset();
				},
				error => {
					console.log(error.text);
					toast.error('Failed to send message. Please try again.');
				}
			);
		e.target.reset();
	};

	return (
		<section
			className="contact-section bg-light py-5 section-scroll-offset"
			id="contact"
		>
			<div className="container">
				<div className="text-center mb-5">
					<h2 className="fw-bold">Contact Us</h2>
					<p className="text-muted w-75 mx-auto">
						Have a question or want to work with us? Send us a
						message!
					</p>
				</div>

				<div className="row">
					<div className="col-md-8 m-auto">
						<form ref={form} onSubmit={sendEmail}>
							<div className="row">
								<div className="col-md-6 mb-3">
									<input
										type="text"
										name="user_name"
										className="form-control"
										placeholder="Your Name"
										required
									/>
								</div>
								<div className="col-md-6 mb-3">
									<input
										type="email"
										name="user_email"
										className="form-control"
										placeholder="Your Email"
										required
									/>
								</div>
							</div>
							<div className="mb-3">
								<input
									type="text"
									name="user_phone"
									className="form-control"
									placeholder="Phone"
									required
								/>
							</div>
							<div className="mb-3">
								<textarea
									name="user_message"
									className="form-control"
									rows={5}
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
			<ToastContainer position="top-center" autoClose={3000} />
		</section>
	);
};

export default Contact;
