import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
	return (
		<Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
			<Container>
				<Navbar.Brand href="/">Tech Company</Navbar.Brand>
				<Navbar.Toggle aria-controls="main-navbar" />
				<Navbar.Collapse id="main-navbar">
					<Nav className="ms-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="#about">About</Nav.Link>
						<Nav.Link href="#projects">Our Projects</Nav.Link>
						<Nav.Link href="#services">Services</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
