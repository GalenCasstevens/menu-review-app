import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Register() {
	return (
		<div id="register-page">
			<Form>
				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" placeholder="Enter name" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Enter password" />
				</Form.Group>

				<div className="d-grid gap-2">
					<Button id="register-btn" variant="primary" type="submit">
						Register
					</Button>
				</div>
			</Form>
		</div>
	);
}

export default Register;
