import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
	return (
		<Container id="login-page">
			<Form>
				<Form.Group className="mb-3" controlId="formBasicUsername">
					<Form.Label>Username</Form.Label>
					<Form.Control type="text" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" />
				</Form.Group>

				<div className="d-grid gap-2">
					<Button variant="primary" type="submit">
						Login
					</Button>
				</div>
			</Form>
		</Container>
	);
}

export default Login;
