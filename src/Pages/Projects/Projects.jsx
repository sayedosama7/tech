const projects = [
	{
		title: 'brandah Website',
		desc: 'Brandah Oman is your one-stop destination for booking unforgettable tours across Oman, offering hotel reservations, car rentals, and professional tour guidesEnjoy a seamless travel experience and discover the beauty of Oman with ease and convenience.',
		img: './projects/brandah.jpg',
		link: 'https://brandah-om.com/en',
	},
	{
		title: 'Tourism Touf W Shouf',
		desc: 'Touf W Shouf is the official travel booking platform by Misr Travel, one of Egypt leadingtourism companies. The platform allows users to easily book hotel lodges, explore travel packages,and enjoy curated experiences across various destinations.',
		img: './projects/touf.jpg',
		link: 'https://www.toufwshouf.travel/home',
	},
	{
		title: 'Landing Page bmp law',
		desc: ' A specialized website for law firms, designed to manage case files, client information, and billing processes efficiently.',
		img: './projects/bmp-law.png',
		link: 'https://bmp-law.vercel.app/',
	},
	{
		title: 'Exodus',
		desc: 'Exodus is a user-friendly travel booking platform that offers a wide range of tours and adventures across various destinations. Whether you are planning a relaxing getaway or an exciting journey, Exodus makes travel planning simple, convenient, and reliable.',
		img: './projects/Exodus-2.jpg',
		link: 'https://exodus-2.vercel.app/',
	},
	{
		title: 'Exception Cafe',
		desc: 'Exception Café is a stylish online menu platform showcasing a rich variety of hot and cold drinks, Eastern and Western desserts, and specialty café items. Explore the exceptional flavors and elegant offerings crafted to satisfy every taste.',
		img: './projects/exception.jpg',
		link: 'https://exception-cafe.vercel.app/',
	},
	{
		title: 'swimming dashboard',
		desc: 'Swimming is a comprehensive dashboard designed for managing swimming pool operations and reservations. It offers users a seamless booking experience',
		img: './projects/swimming-dashboard.png',
		link: 'https://swimming-dashboard-lake.vercel.app/',
	},
];

const Projects = () => {
	return (
		<section className="projects-section py-5 section-scroll-offset" id="projects">
			<div className="container">
				<h2 className="text-center fw-bold mb-5">Our Projects</h2>
				<div className="row">
					{projects.map((proj, index) => (
						<div className="col-md-4 mb-4" key={index}>
							<div className="card h-100 shadow-sm border-0">
								<img
									src={proj.img}
									alt={proj.title}
									className="card-img-top"
									style={{
										height: '200px',
										objectFit: 'cover',
									}}
								/>
								<div className="card-body d-flex flex-column">
									<h5 className="card-title">{proj.title}</h5>
									<p
										className="card-text text-muted project-desc"
										title={proj.desc}
									>
										{proj.desc}
									</p>
									<a
										href={proj.link}
										className="btn btn-outline-primary mt-auto"
										target="_blank"
										rel="noopener noreferrer"
									>
										View Project
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
