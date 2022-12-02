import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUtensils,
	faUser,
	faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import {LinkContainer} from 'react-router-bootstrap';

function Header() {
	return (
		<Navbar id="header" bg="light" expand="lg">
			<Container>
				<LinkContainer to="/">
					<Navbar.Brand id="brand-name" className='link' to="/">
						<FontAwesomeIcon icon={faUtensils} />
						&nbsp; Menu Review
					</Navbar.Brand>
				</LinkContainer>
				<Nav className="ms-auto">
					<LinkContainer to="/login">
						<Nav.Link id="nav-login" className='link'>
							<FontAwesomeIcon icon={faRightToBracket} /> Login
						</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/register">
						<Nav.Link id="nav-register" className='link'>
							<FontAwesomeIcon icon={faUser} /> Register
						</Nav.Link>
					</LinkContainer>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default Header;
