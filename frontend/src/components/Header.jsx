import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand id="brand-name" href="#home">
					Menu Review
				</Navbar.Brand>
				<Nav className="ms-auto">
					<Nav.Link href="#login">Login</Nav.Link>
					<Nav.Link href="#register">Register</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default Header;
