import { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const sections = ['home', 'services', 'projects', 'about', 'contact'];

const NavBar = () => {
	const [activeSection, setActiveSection] = useState('home');

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + 150;

			for (let section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const offsetTop = element.offsetTop;
					const offsetHeight = element.offsetHeight;

					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleNavClick = section => {
		if (section === 'home') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		} else {
			const element = document.getElementById(section);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
		setActiveSection(section);
	};

	return (
		<Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
			<Container>
				<Navbar.Brand
					href="#"
					onClick={e => {
						e.preventDefault();
						handleNavClick('home');
					}}
				>
					Tech Company
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="main-navbar" />
				<Navbar.Collapse id="main-navbar">
					<Nav className="ms-auto">
						{sections.map(section => (
							<Nav.Link
								key={section}
								href={`#${section}`}
								className={
									activeSection === section
										? 'active-link'
										: ''
								}
								active={activeSection === section}
								onClick={e => {
									e.preventDefault();
									handleNavClick(section);
								}}
							>
								{section === 'projects'
									? 'Our Projects'
									: section.charAt(0).toUpperCase() +
									  section.slice(1)}
							</Nav.Link>
						))}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
