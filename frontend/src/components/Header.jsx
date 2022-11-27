import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUtensils,
	faUserPlus,
	faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
	return (
		<Navbar id="header" bg="light" expand="lg">
			<Container>
				<Navbar.Brand id="brand-name" href="#home">
					<Link class="link" to="/">
						<FontAwesomeIcon icon={faUtensils} />
						&nbsp; Menu Review
					</Link>
				</Navbar.Brand>
				<Nav className="ms-auto">
					<Nav.Link href="#login">
						<Link class="link" to="/login">
							<FontAwesomeIcon icon={faRightToBracket} /> Login
						</Link>
					</Nav.Link>
					<Nav.Link href="#register">
						<Link class="link" to="/register">
							<FontAwesomeIcon icon={faUserPlus} /> Register
						</Link>
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default Header;
